"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { getProductsByCategory } from "../../app/data/products";
import { ProductCard } from "../../app/components/ProductCard";

export function Product7() {
  const kidsProducts = getProductsByCategory("kids");

  return (
    <section id="products" className="px-[5%] py-16 md:py-24 lg:py-28 bg-kicks-cream">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4 text-kicks-gold">Kids Collection</p>
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl text-kicks-black">
              Fun & Comfortable
            </h1>
            <p className="md:text-lg text-kicks-anthracite">
              Explore our vibrant collection of kids' shoes designed for comfort, style, and endless adventures!
            </p>
          </div>
          <div className="hidden md:flex">
            <Button 
              variant="secondary" 
              size="primary" 
              title="View all"
              className="bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite"
            >
              View All Products
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 justify-items-start gap-x-5 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          {kidsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-kicks-anthracite mb-4">Looking for a specific size or style?</p>
          <Button 
            variant="secondary" 
            size="sm"
            className="bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite"
          >
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
