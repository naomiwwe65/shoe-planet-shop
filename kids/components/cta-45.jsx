"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta45() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-kicks-gold">
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-start gap-6 p-8 md:grid-cols-[1fr_max-content] md:items-center md:justify-between md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:p-12 bg-kicks-white border border-kicks-pearl rounded-lg shadow-lg">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <h3 className="mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl text-kicks-black">
                Join the Shoe Planet Family!
              </h3>
              <p className="md:text-lg text-kicks-anthracite">
                Get exclusive access to new arrivals, special discounts, and parenting tips for raising happy, active kids!
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-4 md:w-auto md:justify-end">
            <Button 
              title="Subscribe Now" 
              className="bg-kicks-gold text-kicks-white hover:bg-kicks-bronze"
            >
              Subscribe Now
            </Button>
            <Button 
              title="Follow Us" 
              variant="secondary"
              className="border-kicks-gold text-kicks-gold hover:bg-kicks-gold hover:text-kicks-white"
            >
              Follow Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
