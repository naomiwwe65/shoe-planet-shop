"use client";

import React from "react";

export function Testimonial17() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mwangi",
      role: "Fashion Blogger",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The quality of these shoes is incredible! I've never felt more comfortable and stylish. Shoe Planet Kenya has become my go-to for all my footwear needs."
    },
    {
      id: 2,
      name: "Grace Ochieng",
      role: "Business Professional",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Perfect for both work and casual wear. The premium materials and attention to detail make these shoes worth every penny. Highly recommended!"
    },
    {
      id: 3,
      name: "Linda Wanjiku",
      role: "Fitness Enthusiast",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "As someone who's always on the go, I need shoes that can keep up. These athletic shoes provide the perfect balance of comfort and performance."
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-kicks-gold" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <section className="px-[5%] py-16 md:py-20 bg-kicks-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kicks-black mb-4">
            What Our <span className="text-kicks-gold">Customers</span> Say
          </h2>
          <p className="text-lg text-kicks-anthracite max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied customers about their experience with Shoe Planet Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-kicks-cream p-8 rounded-none shadow-premium">
              <div className="flex items-center gap-2 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-kicks-anthracite mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-kicks-black">{testimonial.name}</h4>
                  <p className="text-sm text-kicks-anthracite">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-kicks-gold text-kicks-black px-6 py-3 inline-block">
            <span className="font-bold">Trusted by 10,000+ customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
