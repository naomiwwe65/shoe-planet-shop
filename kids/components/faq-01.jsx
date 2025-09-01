"use client";

import React, { useState } from "react";
import { Button } from "@relume_io/relume-ui";
import { RxChevronDown } from "react-icons/rx";

export function Faq1() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What sizes are available for kids' shoes?",
      answer: "We offer kids' shoes in sizes 2-6, covering ages 2-8 years. Our size chart helps you find the perfect fit for your child. We recommend measuring your child's foot before ordering to ensure the best fit."
    },
    {
      question: "Are the shoes comfortable for all-day wear?",
      answer: "Yes! All our kids' shoes are designed with comfort in mind. They feature cushioned insoles, breathable materials, and flexible soles that support natural foot movement. Perfect for school, play, and daily activities."
    },
    {
      question: "How do I care for and clean kids' shoes?",
      answer: "Most of our kids' shoes are easy to clean. Canvas shoes can be machine washed on gentle cycle. Leather shoes should be wiped with a damp cloth and treated with leather conditioner. Always check the care label for specific instructions."
    },
    {
      question: "Do you offer free shipping in Kenya?",
      answer: "Yes! We offer free shipping on all orders over KSh 5,000 within Kenya. Orders under this amount have a flat rate of KSh 500. Delivery typically takes 2-3 business days to major cities and 3-5 days to other areas."
    },
    {
      question: "What is your return policy for kids' shoes?",
      answer: "We offer a 30-day return policy for all kids' shoes in original condition. If the shoes don't fit or your child doesn't like them, simply return them for a full refund or exchange. We also offer free size exchanges."
    },
    {
      question: "Are the shoes suitable for school uniforms?",
      answer: "Yes! We have a wide selection of school-appropriate shoes including black and brown options that meet most school uniform requirements. Our formal collection includes classic styles that are both comfortable and compliant."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="md:text-md">
            Everything you need to know about our kids' shoe collection
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-kicks-pearl bg-kicks-white"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-kicks-cream transition-colors"
                >
                  <h3 className="font-semibold text-kicks-black">
                    {faq.question}
                  </h3>
                  <RxChevronDown
                    className={`w-5 h-5 text-kicks-anthracite transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-kicks-anthracite leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-6 text-kicks-anthracite">
              Still have questions? Our customer service team is here to help!
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="primary" size="primary" title="Contact Us">
                Contact Us
              </Button>
              <Button variant="secondary" size="primary" title="Live Chat">
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
