"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";

const Star = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const isFullStar = i < fullStars;
        const isHalfStar = hasHalfStar && i === fullStars;

        return (
          <div key={i} className="text-kicks-gold">
            {isFullStar ? (
              <BiSolidStar />
            ) : isHalfStar ? (
              <BiSolidStarHalf />
            ) : (
              <BiStar />
            )}
          </div>
        );
      })}
    </div>
  );
};

export function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('ProductCard - Button clicked! Product:', product);
    addToCart(product);
  };

  return (
    <div className="product-card group">
      <a href={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={`${product.name} - ${product.color} ${product.category} Shoes`}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.originalPrice && (
            <div className="absolute top-2 left-2 bg-kicks-gold text-kicks-black px-2 py-1 text-xs font-bold">
              SALE
            </div>
          )}
          <div className="absolute top-2 right-2">
            <button
              onClick={handleAddToCart}
              className="bg-kicks-gold text-kicks-black p-2 hover:bg-kicks-bronze transition-colors rounded"
              title="Add to cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Star rating={product.rating} />
            <span className="text-sm text-kicks-anthracite">({product.rating})</span>
            <span className="text-sm text-kicks-anthracite">•</span>
            <span className="text-sm text-kicks-anthracite">{product.reviews} reviews</span>
          </div>
          
          <h3 className="product-title mb-1">{product.name}</h3>
          <p className="text-sm text-kicks-anthracite mb-2">{product.color}</p>
          
          <div className="flex items-center gap-2">
            <span className="product-price">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-kicks-anthracite line-through">{product.originalPrice}</span>
            )}
          </div>
          
          <p className="text-sm text-kicks-anthracite mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>
      </a>
    </div>
  );
}
