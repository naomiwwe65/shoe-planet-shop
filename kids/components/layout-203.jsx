"use client";

import React from "react";

export function Layout203() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-kicks-cream">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=700&fit=crop"
              className="w-full rounded-lg object-cover shadow-lg"
              alt="Premium kids sneakers collection displayed elegantly"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl text-kicks-black">
              Where Every Step is an Adventure
            </h3>
            <p className="mb-6 md:mb-8 md:text-lg text-kicks-anthracite">
              From first steps to playground champions, our kids' collection grows with your little ones. 
              Each pair is crafted for comfort, durability, and the endless energy of childhood.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div className="bg-kicks-white p-6 rounded-lg shadow-sm border border-kicks-pearl">
                <div className="mb-3 md:mb-4">
                  <div className="w-12 h-12 bg-kicks-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-kicks-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h6 className="mb-3 text-lg leading-[1.4] font-bold md:mb-4 md:text-xl text-kicks-black">
                  School Ready
                </h6>
                <p className="text-kicks-anthracite">
                  Durable, comfortable, and stylish shoes that keep your kids confident and ready to learn every day.
                </p>
              </div>
              <div className="bg-kicks-white p-6 rounded-lg shadow-sm border border-kicks-pearl">
                <div className="mb-3 md:mb-4">
                  <div className="w-12 h-12 bg-kicks-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-kicks-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h6 className="mb-3 text-lg leading-[1.4] font-bold md:mb-4 md:text-xl text-kicks-black">
                  Playtime Champions
                </h6>
                <p className="text-kicks-anthracite">
                  Lightweight and flexible shoes designed for active play, sports, and endless adventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
