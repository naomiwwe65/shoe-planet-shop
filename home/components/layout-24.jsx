"use client";

import React from "react";

export function Layout24() {
  const features = [
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "Free delivery on all orders over KSh 5,000"
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      description: "30-day hassle-free returns & exchanges"
    },
    {
      icon: "✅",
      title: "Authentic Products",
      description: "100% genuine products with warranty"
    },
    {
      icon: "💳",
      title: "Secure Payment",
      description: "Multiple secure payment options"
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-20 bg-kicks-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-kicks-black mb-4">
            Why Choose <span className="text-kicks-yellow">Shoe Planet Kenya</span>
          </h2>
          <p className="text-lg text-kicks-anthracite max-w-2xl mx-auto">
            We're committed to providing the best shopping experience with quality products and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-kicks-yellow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-kicks-black mb-2">
                {feature.title}
              </h3>
              <p className="text-kicks-anthracite">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
