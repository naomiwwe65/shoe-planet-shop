"use client";

import React from "react";
import { useCart } from "../context/CartContext";

export function CartIcon() {
  const { totalItems, toggleCart } = useCart();

  return (
    <button
      onClick={toggleCart}
      className="relative p-2 text-kicks-black hover:text-kicks-gold transition-colors"
      aria-label="Shopping Cart"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" 
        />
      </svg>
      
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-kicks-gold text-kicks-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  );
}
