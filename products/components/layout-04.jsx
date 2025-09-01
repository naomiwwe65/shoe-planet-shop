"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-kicks-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-kicks-gold md:mb-4">WHY CHOOSE US</p>
            <h2 className="mb-5 text-5xl font-bold text-kicks-black md:mb-6 md:text-7xl lg:text-8xl font-serif">
              Premium Quality, Unmatched Service
            </h2>
            <p className="mb-6 text-lg text-kicks-anthracite md:mb-8 md:text-xl leading-relaxed">
              At Shoe Planet Kenya, we're committed to delivering exceptional footwear 
              that combines style, comfort, and durability. Our curated collection 
              represents the finest brands and latest trends in footwear fashion.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div className="p-4 bg-kicks-cream">
                <h6 className="mb-3 text-lg leading-[1.4] font-bold text-kicks-black md:mb-4 md:text-xl">
                  Authentic Products
                </h6>
                <p className="text-kicks-anthracite">
                  Every product is sourced directly from authorized distributors, 
                  ensuring 100% authenticity and quality assurance.
                </p>
              </div>
              <div className="p-4 bg-kicks-cream">
                <h6 className="mb-3 text-lg leading-[1.4] font-bold text-kicks-black md:mb-4 md:text-xl">
                  Free Shipping
                </h6>
                <p className="text-kicks-anthracite">
                  Enjoy complimentary shipping on all orders across Kenya, 
                  with fast and reliable delivery to your doorstep.
                </p>
              </div>
              <div className="p-4 bg-kicks-cream">
                <h6 className="mb-3 text-lg leading-[1.4] font-bold text-kicks-black md:mb-4 md:text-xl">
                  30-Day Returns
                </h6>
                <p className="text-kicks-anthracite">
                  Shop with confidence knowing you can return any item within 
                  30 days for a full refund or exchange.
                </p>
              </div>
              <div className="p-4 bg-kicks-cream">
                <h6 className="mb-3 text-lg leading-[1.4] font-bold text-kicks-black md:mb-4 md:text-xl">
                  Expert Support
                </h6>
                <p className="text-kicks-anthracite">
                  Our knowledgeable team is here to help you find the perfect 
                  fit and style for any occasion.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <button className="btn-luxury px-8 py-4">
                Shop Now
              </button>
              <button className="flex items-center gap-2 text-kicks-gold hover:text-kicks-bronze transition-colors font-semibold">
                Learn More
                <RxChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              className="w-full rounded-none object-cover shadow-premium"
              alt="Premium footwear collection showcase"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
