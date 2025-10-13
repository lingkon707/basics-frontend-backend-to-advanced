'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "What exactly is QuickMealz?",
    answer:
      "QuickMealz delivers pre-portioned, ready-to-cook meal kits straight to your door. Enjoy healthy, home-cooked meals in under 30 minutes—no stress, no shopping, no mess.",
  },
  {
    question: "Are the ingredients fresh and natural?",
    answer:
      "Absolutely! We source fresh, high-quality ingredients, and our meals are made with wholesome, natural foods—no artificial additives or preservatives.",
  },
  {
    question: "How much time will this really save me?",
    answer:
      "Our meal kits cut down prep time by up to 50%! Less chopping, less planning, and more time to spend with your family.",
  },
  {
    question: "Can I customize my meals?",
    answer:
      "Yes! Choose from a variety of weekly menus and swap ingredients based on your preferences or dietary needs.",
  },
  {
    question: "What if I have a busy schedule or travel often?",
    answer:
      "No problem! You can skip weeks, reschedule deliveries, or pause your subscription anytime. Flexibility is built-in.",
  },
  {
    question: "Is this suitable for kids and picky eaters?",
    answer:
      "Definitely! Our meals are family-friendly, balanced, and tasty enough to satisfy even the pickiest little diners.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up, pick your meals, and we’ll deliver the kits straight to your door. Cooking delicious meals has never been easier!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-lg transition"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2 flex justify-between items-center">
              {faq.question}
              <span className="text-gray-500">{openIndex === index ? "-" : "+"}</span>
            </h3>
            {openIndex === index && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
