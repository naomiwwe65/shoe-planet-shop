"use client";

import React, { useState } from "react";

export function Cta7() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-luxury-gradient">
      <div className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="mb-3 text-4xl leading-[1.2] font-bold text-kicks-black md:mb-4 md:text-5xl lg:text-6xl font-serif">
              Stay Updated with Shoe Planet Kenya
            </h2>
            <p className="text-lg text-kicks-anthracite md:text-xl">
              Subscribe to our newsletter for exclusive offers, new arrivals, and style tips.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 border border-kicks-pearl bg-kicks-white text-kicks-black placeholder-kicks-anthracite focus:outline-none focus:border-kicks-gold transition-colors"
              />
              <button type="submit" className="btn-luxury px-8 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-sm text-kicks-anthracite">
              By subscribing, you agree to our <a href="/privacy" className="text-kicks-gold hover:text-kicks-bronze underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          <button className="btn-outline px-8 py-4">
            Follow on Instagram
          </button>
          <button className="btn-luxury px-8 py-4">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
