"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import { Button } from "@relume_io/relume-ui";

export function Cart() {
  const { items, isOpen, totalItems, totalPrice, removeFromCart, updateQuantity, toggleCart, clearCart } = useCart();

  if (!isOpen) return null;

  const calculateShipping = () => {
    return totalPrice > 5000 ? 0 : 500; // Free shipping over KSh 5,000
  };

  const calculateTotal = () => {
    const shipping = calculateShipping();
    return totalPrice + shipping;
  };

  const handleCheckout = () => {
    toggleCart(); // Close cart
    console.log('Navigating to checkout...');
    window.location.href = '/checkout'; // Navigate to checkout
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={toggleCart}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-kicks-white shadow-premium transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-kicks-pearl">
            <h2 className="text-2xl font-bold text-kicks-black">Shopping Cart</h2>
            <button
              onClick={toggleCart}
              className="text-kicks-anthracite hover:text-kicks-black transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-kicks-black mb-2">Your cart is empty</h3>
                <p className="text-kicks-anthracite mb-6">Add some products to get started!</p>
                <Button
                  onClick={toggleCart}
                  className="bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 bg-kicks-cream rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-kicks-black">{item.name}</h4>
                      <p className="text-sm text-kicks-anthracite">{item.color}</p>
                      <p className="text-kicks-gold font-bold">{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-kicks-gold text-kicks-white flex items-center justify-center hover:bg-kicks-anthracite transition-colors rounded"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-bold text-kicks-black">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-kicks-gold text-kicks-white flex items-center justify-center hover:bg-kicks-anthracite transition-colors rounded"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-kicks-anthracite hover:text-red-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-kicks-pearl p-6">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-kicks-anthracite">Subtotal:</span>
                  <span className="font-semibold text-kicks-black">KSh {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-kicks-anthracite">Shipping:</span>
                  <span className="font-semibold text-kicks-black">
                    {calculateShipping() === 0 ? "Free" : `KSh ${calculateShipping().toLocaleString()}`}
                  </span>
                </div>
                <div className="border-t border-kicks-pearl pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-kicks-black">Total:</span>
                    <span className="text-lg font-bold text-kicks-gold">KSh {calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite py-4"
                >
                  Proceed to Checkout
                </Button>
                <Button
                  onClick={clearCart}
                  variant="secondary"
                  className="w-full bg-kicks-pearl text-kicks-black hover:bg-kicks-anthracite py-4"
                >
                  Clear Cart
                </Button>
              </div>
              
              {calculateShipping() > 0 && (
                <div className="mt-3 p-3 bg-kicks-cream rounded-lg">
                  <p className="text-sm text-kicks-anthracite">
                    💡 Add KSh {(5000 - totalPrice).toLocaleString()} more for free shipping!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
