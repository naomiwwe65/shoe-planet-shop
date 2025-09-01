"use client";

import React from "react";

export function Cta4() {
  return (
    <section className="px-[5%] py-16 md:py-20 bg-kicks-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kicks-white mb-6">
          Ready to <span className="text-kicks-gold">Elevate</span> Your Style?
        </h2>
        <p className="text-lg text-kicks-white mb-8 max-w-2xl mx-auto">
          Discover our premium collection of women's footwear and find your perfect match today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-luxury px-8 py-4">
            Shop Now
          </button>
          <button className="btn-outline px-8 py-4 border-kicks-white text-kicks-white hover:bg-kicks-white hover:text-kicks-black">
            View Collections
          </button>
        </div>
      </div>
    </section>
  );
}