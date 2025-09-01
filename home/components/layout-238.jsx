"use client";

import React from "react";
import { useCart } from "../../app/context/CartContext";

export function Layout238() {
  const { addToCart } = useCart();

  const featuredProducts = [
    {
      id: 1,
      name: "Nike Air Max 270",
      category: "Athletic",
      price: "KSh 15,500",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      badge: "Best Seller",
      rating: 4.8
    },
    {
      id: 2,
      name: "Adidas Ultraboost 22",
      category: "Running",
      price: "KSh 18,800",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
      badge: "New Arrival",
      rating: 4.9
    },
    {
      id: 3,
      name: "Converse Chuck Taylor",
      category: "Casual",
      price: "KSh 8,900",
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop",
      badge: "Popular",
      rating: 4.6
    },
    {
      id: 4,
      name: "Vans Old Skool",
      category: "Skate",
      price: "KSh 11,800",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop",
      badge: "Classic",
      rating: 4.8
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-kicks-gold" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section className="px-[5%] py-16 md:py-20 bg-kicks-beige">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kicks-black mb-4">
            Featured <span className="text-kicks-gold">Collections</span>
          </h2>
          <p className="text-lg text-kicks-anthracite max-w-2xl mx-auto">
            Discover our most popular footwear, handpicked for style, comfort, and quality. 
            From athletic performance to casual comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card group">
              {/* Product Image */}
              <div className="relative overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-kicks-gold text-kicks-black text-xs font-bold px-3 py-1">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <button className="w-10 h-10 bg-kicks-white rounded-none flex items-center justify-center shadow-premium hover:bg-kicks-gold transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-sm text-kicks-anthracite mb-2">{product.category}</p>
                <h3 className="product-title mb-2">{product.name}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(product.rating)}
                  <span className="text-sm text-kicks-anthracite">({product.rating})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="product-price">{product.price}</span>
                  <button 
                    className="btn-primary text-sm px-4 py-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/products" className="btn-secondary text-lg px-8 py-4">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
