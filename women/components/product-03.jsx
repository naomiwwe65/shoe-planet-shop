"use client";

import React, { useState } from "react";
import { useCart } from "../../app/context/CartContext";
import { getProductsByCategory } from "../../app/data/products";
import { Button } from "@relume_io/relume-ui";

export function Product3() {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState({});
  
  const womenProducts = getProductsByCategory("women");

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    
    // Reset the added state after 2 seconds
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section id="products" className="px-[5%] py-16 md:py-24 lg:py-28 bg-kicks-cream">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="font-semibold text-kicks-gold">Women's Collection</p>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl text-kicks-black">
              Elegant Footwear
            </h1>
            <p className="mt-5 text-base md:mt-6 md:text-lg text-kicks-anthracite">
              Discover our curated collection of women's shoes designed for style, comfort, and elegance.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 justify-items-start gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16 lg:grid-cols-3">
          {womenProducts.map((product) => (
            <div key={product.id} className="text-center font-semibold md:text-md group">
              <div className="mb-3 aspect-[5/6] md:mb-4 relative">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.color}`}
                  className="size-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    Out of Stock
                  </div>
                )}
                {product.originalPrice && product.originalPrice !== product.price && (
                  <div className="absolute top-2 left-2 bg-kicks-gold text-kicks-white px-2 py-1 rounded text-xs font-semibold">
                    Sale
                  </div>
                )}
              </div>
              
              <div className="mb-2">
                <h3 className="text-kicks-black">{product.name}</h3>
                <div className="text-sm font-normal text-kicks-anthracite">{product.color}</div>
                <div className="text-xs text-kicks-gold mt-1">{product.subcategory}</div>
              </div>
              
              <div className="mb-3">
                <div className="text-md md:text-lg text-kicks-black font-bold">{product.price}</div>
                {product.originalPrice && product.originalPrice !== product.price && (
                  <div className="text-sm text-kicks-anthracite line-through">{product.originalPrice}</div>
                )}
              </div>
              
              <div className="flex items-center justify-center mb-3">
                <div className="flex text-kicks-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-kicks-pearl'}`} viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-kicks-anthracite ml-1">({product.reviews})</span>
              </div>
              
              <div className="text-xs text-kicks-anthracite mb-3">
                Sizes: {product.sizes.join(", ")}
              </div>
              
              <Button
                className={`w-full transition-all duration-200 ${
                  addedItems[product.id] 
                    ? 'bg-green-500 text-white' 
                    : 'bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite'
                }`}
                variant="secondary"
                size="sm"
                title={addedItems[product.id] ? "Added to cart" : "Add to cart"}
                onClick={() => handleAddToCart(product)}
                disabled={!product.inStock}
              >
                {addedItems[product.id] ? "✓ Added to Cart" : product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center md:mt-14 lg:mt-16">
          <Button 
            variant="secondary" 
            size="primary" 
            title="View all"
            className="bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite"
          >
            View All Products
          </Button>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-kicks-anthracite mb-4">Need help finding the perfect fit?</p>
          <Button 
            variant="secondary" 
            size="sm"
            className="bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite"
          >
            Size Guide
          </Button>
        </div>
      </div>
    </section>
  );
}
