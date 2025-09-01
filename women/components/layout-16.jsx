"use client";

import React from "react";

export function Layout16() {
  const features = [
    {
      id: 1,
      icon: "🚚",
      title: "Free Shipping",
      description: "Free shipping on all orders over KSh 5,000"
    },
    {
      id: 2,
      icon: "🔄",
      title: "Easy Returns",
      description: "30-day hassle-free return policy"
    },
    {
      id: 3,
      icon: "✅",
      title: "Authentic Products",
      description: "100% genuine products with warranty"
    },
    {
      id: 4,
      icon: "🔒",
      title: "Secure Payment",
      description: "Safe and secure payment options"
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-20 bg-kicks-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kicks-black mb-4">
            Why Choose <span className="text-kicks-gold">Shoe Planet</span> Kenya
          </h2>
          <p className="text-lg text-kicks-anthracite max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience and premium quality footwear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center">
              <div className="w-16 h-16 bg-kicks-gold mx-auto mb-4 flex items-center justify-center text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-kicks-black mb-2">{feature.title}</h3>
              <p className="text-kicks-anthracite">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
