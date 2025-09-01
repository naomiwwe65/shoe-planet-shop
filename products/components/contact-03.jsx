"use client";

import React, { useState } from "react";

export function Contact3() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-kicks-cream">
      <div className="container">
        <div className="mb-8 w-full max-w-lg md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold text-kicks-gold md:mb-4">CONTACT US</p>
          <h2 className="mb-5 text-5xl font-bold text-kicks-black md:mb-6 md:text-7xl lg:text-8xl font-serif">
            Get in Touch
          </h2>
          <p className="text-lg text-kicks-anthracite md:text-xl">
            Have questions about our products or need assistance? Our team is here to help.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid w-full max-w-md grid-cols-1 gap-6">
          <div className="grid w-full items-center">
            <label htmlFor="name" className="mb-2 text-sm font-semibold text-kicks-black">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-kicks-pearl bg-kicks-white text-kicks-black placeholder-kicks-anthracite focus:outline-none focus:border-kicks-gold transition-colors"
              placeholder="Enter your full name"
            />
          </div>
          <div className="grid w-full items-center">
            <label htmlFor="email" className="mb-2 text-sm font-semibold text-kicks-black">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-kicks-pearl bg-kicks-white text-kicks-black placeholder-kicks-anthracite focus:outline-none focus:border-kicks-gold transition-colors"
              placeholder="Enter your email address"
            />
          </div>
          <div className="grid w-full items-center">
            <label htmlFor="message" className="mb-2 text-sm font-semibold text-kicks-black">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us how we can help you..."
              className="min-h-[11.25rem] px-4 py-3 border border-kicks-pearl bg-kicks-white text-kicks-black placeholder-kicks-anthracite focus:outline-none focus:border-kicks-gold transition-colors resize-vertical"
            />
          </div>
          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <input
              type="checkbox"
              id="terms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
              className="w-4 h-4 text-kicks-gold bg-kicks-white border-kicks-pearl focus:ring-kicks-gold"
            />
            <label htmlFor="terms" className="cursor-pointer text-kicks-anthracite">
              I accept the <a href="/terms" className="text-kicks-gold hover:text-kicks-bronze underline">Terms of Service</a> and <a href="/privacy" className="text-kicks-gold hover:text-kicks-bronze underline">Privacy Policy</a> *
            </label>
          </div>
          <div>
            <button type="submit" className="w-full btn-luxury py-4 text-lg font-semibold">
              Send Message
            </button>
          </div>
        </form>
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="w-12 h-12 bg-kicks-gold mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-kicks-black mb-2">Phone Support</h3>
            <p className="text-kicks-anthracite">+254 700 000 000</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-kicks-gold mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-kicks-black mb-2">Email Support</h3>
            <p className="text-kicks-anthracite">info@shoeplanetkenya.com</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-kicks-gold mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-kicks-black mb-2">Visit Us</h3>
            <p className="text-kicks-anthracite">Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </section>
  );
}
