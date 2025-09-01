"use client";

import React from "react";

export function Layout240() {
  const categories = [
    {
      id: 1,
      name: "Athletic",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      count: "150+ Products"
    },
    {
      id: 2,
      name: "Casual",
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=300&fit=crop",
      count: "200+ Products"
    },
    {
      id: 3,
      name: "Formal",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop",
      count: "80+ Products"
    },
    {
      id: 4,
      name: "Lifestyle",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
      count: "120+ Products"
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-20 bg-kicks-cream">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kicks-black mb-4">
            Shop by <span className="text-kicks-gold">Category</span>
          </h2>
          <p className="text-lg text-kicks-anthracite max-w-2xl mx-auto">
            Explore our diverse collection of women's footwear across different categories. 
            Find the perfect style for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-kicks-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/women/categories" className="btn-secondary text-lg px-8 py-4">
            View All Categories
          </a>
        </div>
      </div>
    </section>
  );
}
