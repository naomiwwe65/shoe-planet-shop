"use client";

import React, { Fragment } from "react";

export function ProductHeader5() {
  return (
    <header className="px-[5%] py-12 md:py-16 lg:py-20 bg-luxury-gradient">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-10 lg:grid-cols-[1.25fr_1fr] lg:gap-x-20">
          <Fragment>
            <div className="block lg:hidden">
              <img
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=600&fit=crop"
                alt="Women's Premium Footwear Collection"
                className="aspect-[5/4] size-full object-cover"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="first:lg:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=600&fit=crop"
                  alt="Women's Premium Footwear Collection"
                  className="aspect-[5/4] size-full object-cover"
                />
              </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop"
                  alt="Women's Elegant Shoes"
                  className="aspect-[5/4] size-full object-cover"
                />
              </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop"
                  alt="Women's Athletic Shoes"
                  className="aspect-[5/4] size-full object-cover"
                />
              </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=600&fit=crop"
                  alt="Women's Casual Shoes"
                  className="aspect-[5/4] size-full object-cover"
                />
              </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=600&fit=crop"
                  alt="Women's Formal Shoes"
                  className="aspect-[5/4] size-full object-cover"
                />
              </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop"
                  alt="Women's Lifestyle Shoes"
                  className="aspect-[5/4] size-full object-cover"
                />
              </div>
            </div>
          </Fragment>
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kicks-black mb-4">
                Women's <span className="text-kicks-gold">Premium</span> Collection
              </h1>
              <p className="text-lg text-kicks-anthracite mb-6">
                Discover our curated collection of premium footwear designed for the modern woman. 
                From elegant heels to comfortable sneakers, find your perfect match.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-kicks-gold"></div>
                <span className="text-kicks-anthracite">Premium Quality Materials</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-kicks-gold"></div>
                <span className="text-kicks-anthracite">Comfortable & Stylish</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-kicks-gold"></div>
                <span className="text-kicks-anthracite">Perfect for Every Occasion</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-luxury">
                Shop Collection
              </button>
              <button className="btn-outline">
                View New Arrivals
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
