"use client";

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { useAuth } from './AuthContext';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };

    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case 'SET_CART_ITEMS':
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  const { user, isAuthenticated } = useAuth();
  
  // Convex mutations
  const addToCartMutation = useMutation(api.cart.addToCart);
  const updateCartItemMutation = useMutation(api.cart.updateCartItem);
  const removeFromCartMutation = useMutation(api.cart.removeFromCart);
  const clearCartMutation = useMutation(api.cart.clearCart);

  // Real-time cart data from Convex (only when user is authenticated)
  const convexCartItems = useQuery(
    api.cart.getCartWithProducts,
    isAuthenticated && user ? { userId: user.id } : "skip"
  );

  // Update local state when Convex data changes
  useEffect(() => {
    if (convexCartItems && isAuthenticated) {
      // Convert Convex cart items to local format
      const localItems = convexCartItems.map(item => ({
        id: item.productId,
        name: item.product?.name || 'Unknown Product',
        price: item.product?.price || 0,
        image: item.product?.image || '',
        quantity: item.quantity,
        size: item.size,
        cartItemId: item._id, // Store Convex ID for mutations
      }));
      
      dispatch({ type: 'SET_CART_ITEMS', payload: localItems });
    } else if (!isAuthenticated) {
      // Load from localStorage when not authenticated
      try {
        if (typeof window !== 'undefined') {
          const savedCart = localStorage.getItem('cart');
          if (savedCart) {
            const items = JSON.parse(savedCart);
            if (Array.isArray(items) && items.length > 0) {
              dispatch({ type: 'SET_CART_ITEMS', payload: items });
            }
          }
        }
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, [convexCartItems, isAuthenticated]);

  // Save to localStorage when not authenticated
  useEffect(() => {
    if (!isAuthenticated && typeof window !== 'undefined') {
      try {
        localStorage.setItem('cart', JSON.stringify(state.items));
      } catch (error) {
        console.error('Error saving cart to localStorage:', error);
      }
    }
  }, [state.items, isAuthenticated]);

  // Helper function to parse price string to number
  const parsePrice = (priceString) => {
    if (typeof priceString === 'number') return priceString;
    return parseFloat(priceString.replace('KSh ', '').replace(/,/g, '')) || 0;
  };

  // Calculate total items and total price
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.items.reduce((sum, item) => sum + (parsePrice(item.price) * item.quantity), 0);
  
  // Calculate shipping (free over KSh 5,000)
  const shippingCost = subtotal > 5000 ? 0 : 500;
  const totalPrice = subtotal + shippingCost;

  const addToCart = async (product) => {
    console.log('CartContext - addToCart called with:', product);
    
    if (isAuthenticated && user) {
      // Use Convex for authenticated users
      try {
        await addToCartMutation({
          userId: user.id,
          productId: product.id,
          quantity: 1,
          size: product.size || undefined,
        });
        console.log('Added to Convex cart successfully');
      } catch (error) {
        console.error('Error adding to Convex cart:', error);
        // Fallback to local state
        dispatch({ type: 'ADD_TO_CART', payload: product });
      }
    } else {
      // Use local state for non-authenticated users
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  const removeFromCart = async (productId) => {
    if (isAuthenticated && user) {
      // Find the cart item ID for Convex
      const cartItem = state.items.find(item => item.id === productId);
      if (cartItem && cartItem.cartItemId) {
        try {
          await removeFromCartMutation({ cartItemId: cartItem.cartItemId });
          console.log('Removed from Convex cart successfully');
        } catch (error) {
          console.error('Error removing from Convex cart:', error);
          // Fallback to local state
          dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
        }
      }
    } else {
      // Use local state for non-authenticated users
      dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (quantity <= 0) {
      await removeFromCart(productId);
      return;
    }

    if (isAuthenticated && user) {
      // Find the cart item ID for Convex
      const cartItem = state.items.find(item => item.id === productId);
      if (cartItem && cartItem.cartItemId) {
        try {
          await updateCartItemMutation({
            cartItemId: cartItem.cartItemId,
            quantity: quantity,
          });
          console.log('Updated Convex cart quantity successfully');
        } catch (error) {
          console.error('Error updating Convex cart quantity:', error);
          // Fallback to local state
          dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
        }
      }
    } else {
      // Use local state for non-authenticated users
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    }
  };

  const clearCart = async () => {
    if (isAuthenticated && user) {
      try {
        await clearCartMutation({ userId: user.id });
        console.log('Cleared Convex cart successfully');
      } catch (error) {
        console.error('Error clearing Convex cart:', error);
        // Fallback to local state
        dispatch({ type: 'CLEAR_CART' });
      }
    } else {
      // Use local state for non-authenticated users
      dispatch({ type: 'CLEAR_CART' });
    }
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const getCartItemCount = () => {
    return totalItems;
  };

  const getCartTotal = () => {
    return totalPrice;
  };

  const getSubtotal = () => {
    return subtotal;
  };

  const getShippingCost = () => {
    return shippingCost;
  };

  const isEligibleForFreeShipping = () => {
    return subtotal >= 5000;
  };

  const getAmountNeededForFreeShipping = () => {
    return Math.max(0, 5000 - subtotal);
  };

  const value = {
    items: state.items,
    isOpen: state.isOpen,
    totalItems,
    totalPrice,
    subtotal,
    shippingCost,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    getCartItemCount,
    getCartTotal,
    getSubtotal,
    getShippingCost,
    isEligibleForFreeShipping,
    getAmountNeededForFreeShipping,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
