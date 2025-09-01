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
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");
  
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
    setError("");
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    
    // Simulate newsletter subscription
    console.log({ email });
    setIsSubscribed(true);
    setEmail("");
    setError("");
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };
  
  return {
    email,
    isSubscribed,
    error,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer1() {
  const formState = useForm();
  
  return (
    <footer id="footer" className="px-[5%] py-12 md:py-18 lg:py-20 bg-kicks-anthracite text-kicks-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col">
            <a href="/" className="mb-5 md:mb-6">
              <div className="text-2xl font-bold text-kicks-gold">
                Shoe Planet Kenya
              </div>
            </a>
            <p className="mb-5 md:mb-6 text-kicks-champagne">
              Your premier destination for quality footwear in Kenya. Subscribe to our newsletter for the latest updates on products and promotions.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email here"
                    value={formState.email}
                    onChange={formState.handleSetEmail}
                    className="bg-kicks-white text-kicks-black"
                  />
                  {formState.error && (
                    <p className="text-red-400 text-xs mt-1">{formState.error}</p>
                  )}
                </div>
                <Button 
                  title="Join" 
                  variant="secondary" 
                  size="sm"
                  className="bg-kicks-gold text-kicks-white hover:bg-kicks-champagne"
                >
                  {formState.isSubscribed ? "Subscribed!" : "Join"}
                </Button>
              </form>
              {formState.isSubscribed && (
                <p className="text-green-400 text-xs mb-2">Thank you for subscribing!</p>
              )}
              <p className="text-xs text-kicks-champagne">
                By subscribing, you consent to our Privacy Policy and agree to receive updates.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-kicks-gold">Quick Links</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="/women" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <span>Shop Women</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/men" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <span>Shop Men</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/kids" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <span>Shop Kids</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/products" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <span>New Arrivals</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/products" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <span>Best Sellers</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-kicks-gold">Customer Service</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="/contact" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <span>Contact Us</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/about" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <span>About Us</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/shipping" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <span>Shipping Info</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/faq" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <span>FAQs</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/returns" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <span>Returns Policy</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-kicks-gold">Stay Connected</h2>
              <ul className="flex flex-col items-start">
                <li className="py-2 text-sm">
                  <a href="https://facebook.com/shoeplanetkenya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <BiLogoFacebookCircle className="size-6" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="https://instagram.com/shoeplanetkenya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <BiLogoInstagram className="size-6" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="https://twitter.com/shoeplanetkenya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <FaXTwitter className="size-6 p-0.5" />
                    <span>X (Twitter)</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="https://linkedin.com/company/shoeplanetkenya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <BiLogoLinkedinSquare className="size-6" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="https://youtube.com/@shoeplanetkenya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-kicks-gold transition-colors">
                    <BiLogoYoutube className="size-6" />
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-kicks-pearl" />
        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-6 md:mt-0 text-kicks-champagne">© 2024 Shoe Planet Kenya. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="/privacy" className="hover:text-kicks-gold transition-colors">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="/terms" className="hover:text-kicks-gold transition-colors">Terms of Service</a>
            </li>
            <li className="underline">
              <a href="/cookies" className="hover:text-kicks-gold transition-colors">Cookies Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
