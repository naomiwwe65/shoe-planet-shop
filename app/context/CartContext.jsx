"use client";

import React, { createContext, useContext, useReducer, useEffect } from 'react';

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

  // Save cart to localStorage
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.items));
        console.log('Cart saved to localStorage:', state.items);
      }
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [state.items]);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const savedCart = localStorage.getItem('cart');
        console.log('Loading cart from localStorage:', savedCart);
        if (savedCart) {
          const items = JSON.parse(savedCart);
          if (Array.isArray(items) && items.length > 0) {
            console.log('Restoring cart items:', items);
            dispatch({ type: 'SET_CART_ITEMS', payload: items });
          }
        }
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cart');
      }
    }
  }, []);

  const addToCart = (product) => {
    console.log('CartContext - addToCart called with:', product);
    console.log('CartContext - Current state before adding:', state.items);
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
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
