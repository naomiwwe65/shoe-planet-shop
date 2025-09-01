"use client";

import React from "react";

export function Cta39() {
  return (
    <section className="px-[5%] py-16 md:py-20 bg-luxury-gradient">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kicks-white mb-6">
          Join the <span className="text-kicks-gold">Shoe Planet</span> Family
        </h2>
        <p className="text-lg text-kicks-white mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and style tips.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 bg-kicks-white text-kicks-black border-none focus:outline-none focus:ring-2 focus:ring-kicks-gold"
          />
          <button className="btn-luxury px-8 py-4">
            Subscribe Now
          </button>
        </div>
        
        <p className="text-sm text-kicks-white mt-4 opacity-80">
          Get 10% off your first order when you subscribe!
        </p>
      </div>
    </section>
  );
}
