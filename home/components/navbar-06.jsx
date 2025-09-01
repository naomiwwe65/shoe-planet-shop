"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { useCart } from "../../app/context/CartContext";
import { useAuth } from "../../app/context/AuthContext";

export function Navbar6() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { totalItems, toggleCart } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    // Set initial mobile state
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-kicks-white shadow-premium border-b border-kicks-pearl"
          : "bg-kicks-white border-b border-kicks-pearl"
      }`}
    >
      <div className="px-[5%] py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-kicks-black">
              SHOE <span className="text-kicks-gold">PLANET</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="nav-link"
              >
                Home
              </a>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="nav-link flex items-center gap-1"
                >
                  Shop
                  <RxChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-kicks-white border border-kicks-pearl shadow-premium"
                    >
                      <a
                        href="/women"
                        className="block px-4 py-3 text-kicks-black hover:bg-kicks-champagne transition-colors"
                      >
                        Women
                      </a>
                      <a
                        href="/men"
                        className="block px-4 py-3 text-kicks-black hover:bg-kicks-champagne transition-colors"
                      >
                        Men
                      </a>
                      <a
                        href="/kids"
                        className="block px-4 py-3 text-kicks-black hover:bg-kicks-champagne transition-colors"
                      >
                        Kids
                      </a>
                      <a
                        href="/products"
                        className="block px-4 py-3 text-kicks-black hover:bg-kicks-champagne transition-colors"
                      >
                        All Products
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a
                href="/about"
                className="nav-link"
              >
                About
              </a>
              <a
                href="/contact"
                className="nav-link"
              >
                Contact
              </a>
            </div>
          )}

          {/* Right side - Search, Auth, and Cart */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center">
              <input
                type="text"
                placeholder="Search products..."
                className="px-4 py-2 border border-kicks-pearl bg-kicks-white text-kicks-black placeholder-kicks-anthracite focus:outline-none focus:border-kicks-gold transition-colors"
              />
            </div>

            {/* Authentication */}
            <div className="hidden md:flex items-center space-x-2">
              {isAuthenticated ? (
                <>
                  <span className="px-4 py-2 text-kicks-anthracite text-sm">
                    Welcome, {user?.name || user?.email}
                  </span>
                  <a
                    href="/profile"
                    className="px-4 py-2 text-kicks-black hover:text-kicks-gold transition-colors font-medium"
                  >
                    Profile
                  </a>
                  <button
                    onClick={logout}
                    className="px-4 py-2 text-kicks-black hover:text-kicks-gold transition-colors font-medium"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <a
                    href="/sign-in"
                    className="px-4 py-2 text-kicks-black hover:text-kicks-gold transition-colors font-medium"
                  >
                    Sign In
                  </a>
                  <a
                    href="/sign-up"
                    className="px-4 py-2 bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite transition-colors font-medium"
                  >
                    Sign Up
                  </a>
                </>
              )}
            </div>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className="relative flex items-center justify-center w-10 h-10 bg-kicks-gold text-kicks-black hover:bg-kicks-bronze transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-kicks-black text-kicks-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                onClick={toggleMenu}
                className="md:hidden flex items-center justify-center w-10 h-10 bg-kicks-gold text-kicks-black hover:bg-kicks-bronze transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 border-t border-kicks-pearl"
            >
              <div className="py-4 space-y-2">
                <a
                  href="/"
                  className="block px-4 py-2 text-kicks-black hover:bg-kicks-champagne transition-colors"
                >
                  Home
                </a>
                <a
                  href="/women"
                  className="block px-4 py-2 text-kicks-black hover:bg-kicks-champagne transition-colors"
                >
                  Women
                </a>
                <a
                  href="/men"
                  className="block px-4 py-2 text-kicks-black hover:bg-kicks-champagne transition-colors"
                >
                  Men
                </a>
                <a
                  href="/kids"
                  className="block px-4 py-2 text-kicks-black hover:bg-kicks-champagne transition-colors"
                >
                  Kids
                </a>
                <a
                  href="/products"
                  className="block px-4 py-2 text-kicks-black hover:bg-kicks-champagne transition-colors"
                >
                  All Products
                </a>
                <a
                  href="/about"
                  className="block px-4 py-2 text-kicks-black hover:bg-kicks-champagne transition-colors"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="block px-4 py-2 text-kicks-black hover:bg-kicks-champagne transition-colors"
                >
                  Contact
                </a>
                <div className="border-t border-kicks-pearl pt-2 mt-2">
                  {isAuthenticated ? (
                    <>
                      <div className="px-4 py-2 text-kicks-anthracite text-sm border-b border-kicks-pearl pb-2 mb-2">
                        Welcome, {user?.name || user?.email}
                      </div>
                      <a
                        href="/profile"
                        className="block px-4 py-2 text-kicks-black hover:bg-kicks-champagne transition-colors"
                      >
                        Profile
                      </a>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-kicks-black hover:bg-kicks-champagne transition-colors"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <a
                        href="/sign-in"
                        className="block px-4 py-2 text-kicks-black hover:bg-kicks-champagne transition-colors"
                      >
                        Sign In
                      </a>
                      <a
                        href="/sign-up"
                        className="block px-4 py-2 bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite transition-colors"
                      >
                        Sign Up
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
