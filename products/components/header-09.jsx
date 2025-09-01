"use client";

import React from "react";

export function Header9() {
  return (
    <section className="relative flex h-screen min-h-screen flex-col bg-luxury-gradient">
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80"
            alt="Premium footwear collection showcase"
            className="absolute inset-0 size-full object-cover opacity-20"
          />
        </div>
      </div>
      <div className="px-[5%]">
        <div className="relative z-10 container">
          <div className="grid grid-rows-1 items-start gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <div>
              <h1 className="text-6xl font-bold text-kicks-black md:text-9xl lg:text-10xl font-serif">
                Discover Premium Footwear
              </h1>
              <p className="mt-4 text-xl text-kicks-anthracite md:text-2xl">
                Curated collections for every style and occasion
              </p>
            </div>
            <div>
              <p className="text-lg text-kicks-anthracite md:text-xl leading-relaxed">
                From timeless classics to contemporary trends, our premium footwear 
                collection combines exceptional craftsmanship with cutting-edge design. 
                Each pair tells a story of style, comfort, and sophistication.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
                <button className="btn-luxury px-8 py-4 text-lg">
                  Explore Collections
                </button>
                <button className="btn-outline px-8 py-4 text-lg">
                  View New Arrivals
                </button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-kicks-anthracite">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-kicks-gold"></div>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-kicks-gold"></div>
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-kicks-gold"></div>
                  <span>Authentic Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
