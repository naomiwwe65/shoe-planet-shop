"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header5() {
  return (
    <section id="relume" className="relative px-[5%] bg-gradient-dark">
      <div className="relative z-10 container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold text-kicks-white md:mb-6 md:text-7xl lg:text-8xl text-shadow">
              Step Into 
              <span className="text-kicks-yellow"> Style</span>
            </h1>
            <p className="text-kicks-white text-lg md:text-xl mb-8 leading-relaxed">
              Discover Kenya's premier destination for premium footwear. From trendy sneakers to elegant formal wear, we've got the perfect pair for every occasion and every member of your family.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <button className="btn-primary text-lg px-8 py-4">
                Shop Collection
              </button>
              <button className="btn-outline text-lg px-8 py-4 border-kicks-white text-kicks-white hover:bg-kicks-white hover:text-kicks-black">
                View New Arrivals
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-8 text-kicks-white">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-kicks-yellow rounded-full"></div>
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-kicks-yellow rounded-full"></div>
                <span className="text-sm">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-kicks-yellow rounded-full"></div>
                <span className="text-sm">Authentic Products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-kicks-black via-kicks-anthracite to-kicks-black opacity-90"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </section>
  );
}
