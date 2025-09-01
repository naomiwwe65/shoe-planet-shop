"use client";

import React from "react";
import { useCart } from "../../app/context/CartContext";

export function Product2() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Nike Air Max 270",
      category: "Running",
      color: "White/Black",
      price: "KSh 12,500",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Adidas Ultraboost 22",
      category: "Athletic",
      color: "Core Black",
      price: "KSh 15,800",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "New"
    },
    {
      id: 3,
      name: "Converse Chuck Taylor",
      category: "Casual",
      color: "Classic White",
      price: "KSh 8,900",
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Popular"
    },
    {
      id: 4,
      name: "Vans Old Skool",
      category: "Skate",
      color: "Black/White",
      price: "KSh 7,200",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Trending"
    },
    {
      id: 5,
      name: "New Balance 574",
      category: "Lifestyle",
      color: "Grey",
      price: "KSh 9,500",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Classic"
    },
    {
      id: 6,
      name: "Puma RS-X",
      category: "Retro",
      color: "White/Blue",
      price: "KSh 11,200",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Limited"
    },
    {
      id: 7,
      name: "Reebok Classic",
      category: "Retro",
      color: "White",
      price: "KSh 6,800",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Iconic"
    },
    {
      id: 8,
      name: "ASICS Gel-Kayano",
      category: "Running",
      color: "Blue/White",
      price: "KSh 13,500",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Premium"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-kicks-cream">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold text-kicks-gold md:mb-4">FEATURED</p>
            <h2 className="mb-3 text-5xl font-bold text-kicks-black md:mb-4 md:text-7xl lg:text-8xl font-serif">
              Premium Collection
            </h2>
            <p className="text-lg text-kicks-anthracite md:text-xl">
              Discover our curated selection of premium footwear from world-renowned brands.
            </p>
          </div>
          <div className="hidden md:flex">
            <button className="btn-outline px-8 py-4">
              View All Products
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-start gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative mb-3 block aspect-[5/6] md:mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.badge && (
                  <div className="absolute top-2 left-2 bg-kicks-gold text-kicks-black text-xs font-bold px-2 py-1">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="flex justify-between md:text-md mb-3">
                <div className="mr-4">
                  <h3 className="font-bold text-kicks-black">{product.name}</h3>
                  <div className="text-sm text-kicks-anthracite">{product.category}</div>
                  <div className="text-sm text-kicks-slate">{product.color}</div>
                </div>
                <div className="text-lg font-bold text-kicks-gold md:text-xl">{product.price}</div>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full btn-luxury py-3 text-sm font-semibold transition-all duration-300 hover:bg-kicks-bronze"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
