"use client";

import React from "react";

export function Layout209() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-kicks-white">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              className="w-full rounded-none object-cover shadow-premium"
              alt="Exclusive footwear collection showcase"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="mb-5 text-4xl leading-[1.2] font-bold text-kicks-black md:mb-6 md:text-5xl lg:text-6xl font-serif">
              Exclusive Collection for Every Style
            </h3>
            <p className="mb-5 text-lg text-kicks-anthracite md:mb-6 md:text-xl leading-relaxed">
              Experience our carefully curated selection of premium footwear that 
              combines exceptional craftsmanship with contemporary design. From 
              casual comfort to formal elegance, we offer styles for every occasion.
            </p>
            <div className="grid grid-cols-1 gap-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <div className="w-6 h-6 bg-kicks-gold flex items-center justify-center">
                    <svg className="w-4 h-4 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-kicks-anthracite">Comprehensive size range from UK 3 to UK 12 for perfect fit.</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <div className="w-6 h-6 bg-kicks-gold flex items-center justify-center">
                    <svg className="w-4 h-4 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-kicks-anthracite">Premium materials including genuine leather and breathable fabrics.</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <div className="w-6 h-6 bg-kicks-gold flex items-center justify-center">
                    <svg className="w-4 h-4 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-kicks-anthracite">Expert fitting guidance and personalized style recommendations.</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <div className="w-6 h-6 bg-kicks-gold flex items-center justify-center">
                    <svg className="w-4 h-4 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-kicks-anthracite">Secure payment options and fast nationwide delivery.</p>
              </div>
            </div>
            <div className="mt-8">
              <button className="btn-luxury px-8 py-4">
                Shop Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
