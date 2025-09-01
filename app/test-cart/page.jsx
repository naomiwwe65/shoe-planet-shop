"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import { getProductsByCategory } from "../data/products";
import { Button } from "@relume_io/relume-ui";

export default function TestCartPage() {
  const { items, totalItems, subtotal, totalPrice, addToCart, clearCart } = useCart();
  const menProducts = getProductsByCategory("men");

  const handleAddTestItem = () => {
    if (menProducts.length > 0) {
      addToCart(menProducts[0]);
    }
  };

  return (
    <div className="min-h-screen bg-kicks-cream p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-kicks-black mb-8">Cart Test Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cart Status */}
          <div className="bg-kicks-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-kicks-black mb-4">Cart Status</h2>
            <div className="space-y-2">
              <p><strong>Total Items:</strong> {totalItems}</p>
              <p><strong>Cart Items:</strong> {items.length}</p>
              <p><strong>Subtotal:</strong> KSh {subtotal.toLocaleString()}</p>
              <p><strong>Total Price:</strong> KSh {totalPrice.toLocaleString()}</p>
            </div>
            
            <div className="mt-4 space-y-2">
              <Button
                onClick={handleAddTestItem}
                className="bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite"
              >
                Add Test Item
              </Button>
              <Button
                onClick={clearCart}
                variant="secondary"
                className="bg-kicks-pearl text-kicks-black hover:bg-kicks-anthracite"
              >
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="bg-kicks-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-kicks-black mb-4">Cart Items</h2>
            {items.length === 0 ? (
              <p className="text-kicks-anthracite">No items in cart</p>
            ) : (
              <div className="space-y-3">
                {items.map((item, index) => (
                  <div key={index} className="border border-kicks-pearl p-3 rounded">
                    <p><strong>Name:</strong> {item.name}</p>
                    <p><strong>Price:</strong> {item.price}</p>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    <p><strong>ID:</strong> {item.id}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Available Products */}
        <div className="mt-8 bg-kicks-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-kicks-black mb-4">Available Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {menProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="border border-kicks-pearl p-4 rounded">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <h3 className="font-bold text-kicks-black">{product.name}</h3>
                <p className="text-kicks-gold font-bold">{product.price}</p>
                <Button
                  onClick={() => addToCart(product)}
                  className="w-full mt-2 bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite"
                >
                  Add to Cart
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <Button
            onClick={() => window.location.href = '/checkout'}
            className="bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite"
          >
            Go to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
