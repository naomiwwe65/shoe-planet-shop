import React from "react";
import { Navbar6 } from "../../home/components/navbar-06";
import { Footer1 } from "../../home/components/footer-01";

export default function AboutPage() {
  return (
    <div>
      <Navbar6 />
      
      {/* Hero Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-kicks-gold to-kicks-bronze">
        <div className="container">
          <div className="text-center text-kicks-black">
            <h1 className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl">
              About Shoe Planet Kenya
            </h1>
            <p className="mx-auto max-w-3xl text-xl md:text-2xl">
              Your trusted destination for premium footwear in Kenya, serving families with quality, style, and exceptional service since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Our Story
              </h2>
              <p className="mb-6 text-lg text-kicks-anthracite leading-relaxed">
                Founded in 2018, Shoe Planet Kenya began with a simple mission: to provide Kenyan families with access to high-quality, stylish footwear at fair prices. What started as a small family business has grown into one of Kenya's most trusted footwear retailers.
              </p>
              <p className="mb-6 text-lg text-kicks-anthracite leading-relaxed">
                We understand that shoes are more than just accessories – they're essential for daily life, work, and special occasions. That's why we carefully curate our collection to include everything from comfortable everyday shoes to premium formal wear.
              </p>
              <p className="text-lg text-kicks-anthracite leading-relaxed">
                Today, we serve customers across Kenya with our commitment to quality, authenticity, and exceptional customer service remaining at the heart of everything we do.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Shoe Planet Kenya Store"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-kicks-cream">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-kicks-anthracite">
              The principles that guide everything we do at Shoe Planet Kenya
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-kicks-white rounded-lg">
              <div className="w-16 h-16 bg-kicks-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-kicks-anthracite">
                Every pair of shoes in our collection meets our high standards for quality, comfort, and durability.
              </p>
            </div>
            
            <div className="text-center p-6 bg-kicks-white rounded-lg">
              <div className="w-16 h-16 bg-kicks-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-kicks-anthracite">
                Your satisfaction is our priority. We're here to help you find the perfect shoes for every occasion.
              </p>
            </div>
            
            <div className="text-center p-6 bg-kicks-white rounded-lg">
              <div className="w-16 h-16 bg-kicks-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-kicks-anthracite">
                We continuously update our collection with the latest trends and technologies in footwear.
              </p>
            </div>
            
            <div className="text-center p-6 bg-kicks-white rounded-lg">
              <div className="w-16 h-16 bg-kicks-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-kicks-anthracite">
                We're proud to be part of the Kenyan community and support local initiatives and charities.
              </p>
            </div>
            
            <div className="text-center p-6 bg-kicks-white rounded-lg">
              <div className="w-16 h-16 bg-kicks-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-kicks-anthracite">
                Fast delivery, secure payments, and reliable customer service you can count on.
              </p>
            </div>
            
            <div className="text-center p-6 bg-kicks-white rounded-lg">
              <div className="w-16 h-16 bg-kicks-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-kicks-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-kicks-anthracite">
                We're passionate about shoes and helping our customers find their perfect fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-kicks-anthracite">
              The dedicated professionals behind Shoe Planet Kenya
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Team Member"
                className="w-48 h-48 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Sarah Mwangi</h3>
              <p className="text-kicks-gold font-semibold mb-2">Founder & CEO</p>
              <p className="text-kicks-anthracite">
                With over 15 years in retail, Sarah leads our mission to provide quality footwear to Kenyan families.
              </p>
            </div>
            
            <div className="text-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Team Member"
                className="w-48 h-48 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold mb-2">David Ochieng</h3>
              <p className="text-kicks-gold font-semibold mb-2">Head of Operations</p>
              <p className="text-kicks-anthracite">
                David ensures smooth operations and maintains our high standards for customer service.
              </p>
            </div>
            
            <div className="text-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Team Member"
                className="w-48 h-48 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Grace Wanjiku</h3>
              <p className="text-kicks-gold font-semibold mb-2">Customer Experience Manager</p>
              <p className="text-kicks-anthracite">
                Grace leads our customer service team, ensuring every customer has an exceptional experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-kicks-black text-kicks-white">
        <div className="container text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg mb-8">
            Have questions about our products or services? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-luxury">
              Contact Us
            </a>
            <a href="/products" className="btn-outline">
              Browse Products
            </a>
          </div>
        </div>
      </section>

      <Footer1 />
    </div>
  );
}
