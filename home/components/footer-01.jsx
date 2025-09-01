"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer1() {
  const formState = useForm();
  return (
    <footer id="relume" className="footer-bg px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col">
            <a href="/" className="mb-5 md:mb-6">
              <div className="text-2xl font-bold text-kicks-white">
                <span className="text-kicks-yellow">SHOE</span> PLANET
              </div>
            </a>
            <p className="mb-5 md:mb-6 text-kicks-white">
              Kenya's premier destination for premium footwear. Discover the perfect pair for every occasion with our curated collection of authentic, stylish shoes for the whole family.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                  className="bg-kicks-white text-kicks-black border-kicks-anthracite"
                />
                <Button 
                  title="Subscribe" 
                  variant="secondary" 
                  size="sm"
                  className="bg-kicks-yellow text-kicks-black hover:bg-yellow-400"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-300">
                By subscribing, you consent to our Privacy Policy and agree to receive updates about new arrivals and exclusive offers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-kicks-white">Shop</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="/women" className="footer-link flex items-center gap-3">
                    <span>Women's Collection</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/men" className="footer-link flex items-center gap-3">
                    <span>Men's Collection</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/kids" className="footer-link flex items-center gap-3">
                    <span>Kids' Collection</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/products?category=new-arrivals" className="footer-link flex items-center gap-3">
                    <span>New Arrivals</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/products?category=sale" className="footer-link flex items-center gap-3">
                    <span>Sale Items</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-kicks-white">Support</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="/contact" className="footer-link flex items-center gap-3">
                    <span>Contact Us</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/shipping" className="footer-link flex items-center gap-3">
                    <span>Shipping Info</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/returns" className="footer-link flex items-center gap-3">
                    <span>Returns & Exchanges</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/size-guide" className="footer-link flex items-center gap-3">
                    <span>Size Guide</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/faq" className="footer-link flex items-center gap-3">
                    <span>FAQ</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-kicks-white">Company</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="/about" className="footer-link flex items-center gap-3">
                    <span>About Us</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/careers" className="footer-link flex items-center gap-3">
                    <span>Careers</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/privacy" className="footer-link flex items-center gap-3">
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/terms" className="footer-link flex items-center gap-3">
                    <span>Terms of Service</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/blog" className="footer-link flex items-center gap-3">
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-kicks-anthracite pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-300">
              © 2024 Shoe Planet Kenya. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-kicks-white hover:text-kicks-yellow transition-colors">
                <BiLogoFacebookCircle className="w-6 h-6" />
              </a>
              <a href="#" className="text-kicks-white hover:text-kicks-yellow transition-colors">
                <BiLogoInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-kicks-white hover:text-kicks-yellow transition-colors">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-kicks-white hover:text-kicks-yellow transition-colors">
                <BiLogoYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
