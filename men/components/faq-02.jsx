"use client";

import React, { useState } from "react";

export function Faq2() {
  const [openItem, setOpenItem] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What sizes are available for men's shoes?",
      answer: "We offer men's shoes in sizes 6-13 (US sizing). Our shoes come in half sizes for the perfect fit. If you're unsure about your size, we recommend measuring your foot or checking our size guide."
    },
    {
      id: 2,
      question: "Do you offer free shipping?",
      answer: "Yes! We offer free shipping on all orders over KSh 5,000. For orders below this amount, shipping costs KSh 500. Delivery typically takes 2-5 business days within Kenya."
    },
    {
      id: 3,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unworn shoes in their original packaging. Simply contact our customer service team to initiate a return. We'll provide a prepaid return label for your convenience."
    },
    {
      id: 4,
      question: "Are your shoes authentic?",
      answer: "Absolutely! All our shoes are 100% authentic and sourced directly from authorized manufacturers. We never sell counterfeit or replica products. Each pair comes with a certificate of authenticity."
    },
    {
      id: 5,
      question: "Do you have a physical store?",
      answer: "Currently, we operate as an online store to provide the best prices and convenience to our customers. However, we're planning to open physical stores in major cities across Kenya soon."
    }
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="px-[5%] py-16 md:py-20 bg-kicks-cream">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kicks-black mb-4">
            Frequently Asked <span className="text-kicks-gold">Questions</span>
          </h2>
          <p className="text-lg text-kicks-anthracite max-w-2xl mx-auto">
            Find answers to common questions about our men's footwear collection and shopping experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="mb-4 border-b border-kicks-pearl">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left py-6 px-4 bg-kicks-white hover:bg-kicks-champagne transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-kicks-black">{faq.question}</h3>
                  <span className="text-kicks-gold text-xl">
                    {openItem === faq.id ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openItem === faq.id && (
                <div className="px-4 pb-6 bg-kicks-white">
                  <p className="text-kicks-anthracite">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-kicks-anthracite mb-4">Still have questions?</p>
          <button className="btn-secondary px-8 py-4">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  );
}
