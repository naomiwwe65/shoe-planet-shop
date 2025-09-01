"use client";

import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer1() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
    setEmail('');
  };

  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 bg-kicks-black text-kicks-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col">
            <a href="/" className="mb-5 md:mb-6">
              <div className="text-2xl font-bold text-kicks-white">
                SHOE <span className="text-kicks-gold">PLANET</span>
              </div>
            </a>
            <p className="mb-5 text-kicks-pearl md:mb-6">
              Your premier destination for authentic, premium footwear in Kenya. 
              Discover the perfect blend of style, comfort, and quality.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={handleSubmit}
              >
                <input
                  id="email"
                  type="email"
                  placeholder="Your email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-3 border border-kicks-charcoal bg-kicks-black text-kicks-white placeholder-kicks-slate focus:outline-none focus:border-kicks-gold transition-colors"
                />
                <button type="submit" className="btn-luxury px-6 py-3 text-sm">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-kicks-slate">
                By subscribing, you consent to our <a href="/privacy" className="text-kicks-gold hover:text-kicks-bronze underline">Privacy Policy</a> and agree to receive updates.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-kicks-white md:mb-4">Shop</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="/women" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>Women's Collection</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/men" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>Men's Collection</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/kids" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>Kids' Collection</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/products" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>All Products</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/new-arrivals" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>New Arrivals</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-kicks-white md:mb-4">Support</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="/contact" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>Contact Us</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/shipping" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>Shipping Info</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/returns" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>Returns Policy</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/size-guide" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>Size Guide</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/faq" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>FAQ</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-kicks-white md:mb-4">Company</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="/about" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>About Us</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/careers" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>Careers</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/privacy" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/terms" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>Terms of Service</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/blog" className="flex items-center gap-3 text-kicks-pearl hover:text-kicks-gold transition-colors">
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-kicks-charcoal pt-8 md:flex-row md:gap-6 md:pt-12">
          <p className="text-sm text-kicks-slate">
            © 2024 Shoe Planet Kenya. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" className="text-kicks-pearl hover:text-kicks-gold transition-colors">
              <BiLogoFacebookCircle className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" className="text-kicks-pearl hover:text-kicks-gold transition-colors">
              <BiLogoInstagram className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" className="text-kicks-pearl hover:text-kicks-gold transition-colors">
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" className="text-kicks-pearl hover:text-kicks-gold transition-colors">
              <BiLogoYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
