"use client";

import React from "react";

export function Cta13() {
  return (
    <section className="px-[5%] py-16 md:py-20 lg:py-24 bg-gradient-kicks">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kicks-black mb-6">
            Join the <span className="text-kicks-white">Shoe Planet</span> Family
          </h2>
          <p className="text-lg md:text-xl text-kicks-black mb-8 max-w-2xl mx-auto">
            Get exclusive access to new arrivals, special offers, and insider updates. 
            Be the first to know about limited editions and member-only discounts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-kicks-black text-kicks-black placeholder-kicks-anthracite focus:outline-none focus:border-kicks-yellow"
              />
              <button className="btn-secondary px-8 py-3 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-kicks-black">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-kicks-black rounded-full"></div>
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-kicks-black rounded-full"></div>
              <span className="text-sm font-medium">Exclusive Offers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-kicks-black rounded-full"></div>
              <span className="text-sm font-medium">Early Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
