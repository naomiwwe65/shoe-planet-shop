"use client";

import React, { Fragment } from "react";

export function ProductHeader6() {
  return (
    <header className="px-[5%] py-12 md:py-16 lg:py-20 bg-luxury-gradient">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-10 lg:grid-cols-[1fr_1.25fr] lg:gap-x-20">
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kicks-black mb-4">
                Kids' <span className="text-kicks-gold">Adventure</span> Collection
              </h1>
              <p className="text-lg text-kicks-anthracite mb-6">
                From first steps to playground champions, our kids' collection grows with your little ones. 
                Each pair is crafted for comfort, durability, and the endless energy of childhood.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-kicks-gold"></div>
                <span className="text-kicks-anthracite">Comfortable & Durable Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-kicks-gold"></div>
                <span className="text-kicks-anthracite">Perfect for Active Play</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-kicks-gold"></div>
                <span className="text-kicks-anthracite">School & Weekend Ready</span>
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
          
          <Fragment>
            <div className="block lg:hidden">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop"
                alt="Kids' Adventure Footwear Collection"
                className="aspect-[5/4] size-full object-cover"
          />
        </div>
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="first:lg:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop"
                  alt="Kids' Adventure Footwear Collection"
                  className="aspect-[5/4] size-full object-cover"
            />
          </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop"
                  alt="Kids' Athletic Shoes"
                  className="aspect-[5/4] size-full object-cover"
            />
          </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&h=600&fit=crop"
                  alt="Kids' Casual Shoes"
                  className="aspect-[5/4] size-full object-cover"
            />
          </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=600&fit=crop"
                  alt="Kids' School Shoes"
                  className="aspect-[5/4] size-full object-cover"
            />
          </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop"
                  alt="Kids' Outdoor Shoes"
                  className="aspect-[5/4] size-full object-cover"
                />
        </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop"
                  alt="Kids' Running Shoes"
                  className="aspect-[5/4] size-full object-cover"
                />
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    </header>
  );
}
