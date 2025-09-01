"use client";

import React from "react";

export function Layout1() {
  const testimonials = [
    {
      name: "Sarah Mwangi",
      role: "Fashion Blogger",
      content: "Shoe Planet Kenya has the best collection of authentic sneakers. The quality is unmatched and delivery is always on time!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Ochieng",
      role: "Fitness Enthusiast",
      content: "I've been buying my running shoes from Shoe Planet for 2 years now. Great prices and genuine products. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Grace Wanjiku",
      role: "Business Professional",
      content: "The customer service is exceptional. They helped me find the perfect formal shoes for my new job. Love this place!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-kicks-yellow" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <section className="px-[5%] py-16 md:py-20 bg-kicks-cream">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-kicks-black mb-4">
            What Our <span className="text-kicks-yellow">Customers</span> Say
          </h2>
          <p className="text-lg text-kicks-anthracite max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-kicks-anthracite mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-kicks-black">{testimonial.name}</h4>
                  <p className="text-sm text-kicks-anthracite">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-kicks-white px-6 py-3 rounded-full shadow-kicks">
            <span className="text-kicks-black font-semibold">Trusted by 10,000+ customers</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-kicks-yellow text-lg">★</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
