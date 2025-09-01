"use client";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useCart } from "../../app/context/CartContext";
import { getProductsByCategory } from "../../app/data/products";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };
  const dotClassName = (index) => {
    return clsx("mx-[3px] size-2 rounded-full", {
      "bg-kicks-gold": current === index + 1,
      "bg-kicks-pearl": current !== index + 1,
    });
  };
  return { api, setApi, handleDotClick, dotClassName };
};

export function Product6() {
  const carouselState = useCarousel();
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState({});
  
  const menProducts = getProductsByCategory("men");

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    
    // Reset the added state after 2 seconds
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section
      id="products"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-kicks-cream"
    >
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4 text-kicks-gold">Men's Collection</p>
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl text-kicks-black">
              Premium Footwear
            </h1>
            <p className="md:text-lg text-kicks-anthracite">
              Discover our curated collection of men's shoes designed for style, comfort, and performance.
            </p>
          </div>
          <div className="hidden md:flex">
            <Button 
              variant="secondary" 
              size="primary" 
              title="View all"
              className="bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite"
            >
              View All Products
            </Button>
          </div>
        </div>
        
        <Carousel
          setApi={carouselState.setApi}
          opts={{ loop: true, align: "start" }}
        >
          <div className="relative pb-24">
            <CarouselContent className="ml-0">
              {menProducts.map((product) => (
                <CarouselItem key={product.id} className="basis-[95%] pr-6 pl-0 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-1/4">
                  <div className="mb-3 block aspect-[5/6] md:mb-4 relative group">
                    <img
                      src={product.image}
                      alt={`${product.name} - ${product.color}`}
                      className="size-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    {!product.inStock && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        Out of Stock
                      </div>
                    )}
                    {product.originalPrice && product.originalPrice !== product.price && (
                      <div className="absolute top-2 left-2 bg-kicks-gold text-kicks-white px-2 py-1 rounded text-xs font-semibold">
                        Sale
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-between md:text-md mb-2">
                    <div className="mr-4">
                      <h3 className="font-semibold text-kicks-black">{product.name}</h3>
                      <div className="text-sm text-kicks-anthracite">{product.color}</div>
                      <div className="text-xs text-kicks-gold mt-1">{product.subcategory}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-md font-semibold md:text-lg text-kicks-black">{product.price}</div>
                      {product.originalPrice && product.originalPrice !== product.price && (
                        <div className="text-sm text-kicks-anthracite line-through">{product.originalPrice}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="flex text-kicks-gold">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-kicks-pearl'}`} viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-kicks-anthracite ml-1">({product.reviews})</span>
                    </div>
                    <div className="text-xs text-kicks-anthracite">
                      Sizes: {product.sizes.join(", ")}
                    </div>
                  </div>
                  
                  <Button
                    className={`mt-3 w-full md:mt-4 transition-all duration-200 ${
                      addedItems[product.id] 
                        ? 'bg-green-500 text-white' 
                        : 'bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite'
                    }`}
                    variant="secondary"
                    size="sm"
                    title={addedItems[product.id] ? "Added to cart" : "Add to cart"}
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                  >
                    {addedItems[product.id] ? "✓ Added to Cart" : product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute bottom-0 flex w-full items-end justify-between">
              <div className="flex h-7 pt-[10px]">
                {menProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={carouselState.handleDotClick(index)}
                    className={carouselState.dotClassName(index)}
                  />
                ))}
              </div>
              <div className="flex gap-2 md:gap-4">
                <CarouselPrevious className="static size-12 -translate-y-0 bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite" />
                <CarouselNext className="static size-12 -translate-y-0 bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite" />
              </div>
            </div>
          </div>
        </Carousel>
        
        <div className="text-center mt-12">
          <p className="text-kicks-anthracite mb-4">Can't find what you're looking for?</p>
          <Button 
            variant="secondary" 
            size="primary"
            className="bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite"
          >
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
