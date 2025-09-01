"use client";

import React from "react";

export function Layout12() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-kicks-cream">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-4xl leading-[1.2] font-bold text-kicks-black md:mb-6 md:text-5xl lg:text-6xl font-serif">
              Curated Collections for Every Style and Occasion
            </h2>
            <p className="mb-6 text-lg text-kicks-anthracite md:mb-8 md:text-xl leading-relaxed">
              Discover our carefully selected range of premium footwear that combines 
              contemporary trends with timeless elegance. From casual comfort to formal 
              sophistication, we have the perfect pair for every moment.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div className="p-6 bg-kicks-white shadow-premium">
                <div className="mb-3 md:mb-4">
                  <div className="w-12 h-12 bg-kicks-gold flex items-center justify-center">
                    <svg className="w-6 h-6 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h6 className="mb-3 text-lg leading-[1.4] font-bold text-kicks-black md:mb-4 md:text-xl">
                  Women's Collection
                </h6>
                <p className="text-kicks-anthracite">
                  Elegant designs that blend comfort with sophistication, 
                  perfect for the modern woman who values both style and substance.
                </p>
              </div>
              <div className="p-6 bg-kicks-white shadow-premium">
                <div className="mb-3 md:mb-4">
                  <div className="w-12 h-12 bg-kicks-gold flex items-center justify-center">
                    <svg className="w-6 h-6 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h6 className="mb-3 text-lg leading-[1.4] font-bold text-kicks-black md:mb-4 md:text-xl">
                  Men's Collection
                </h6>
                <p className="text-kicks-anthracite">
                  Sophisticated styles that combine classic design with modern 
                  innovation, crafted for the discerning gentleman.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <button className="btn-luxury px-8 py-4">
                Explore Collections
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              className="w-full rounded-none object-cover shadow-premium"
              alt="Premium footwear collections showcase"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
