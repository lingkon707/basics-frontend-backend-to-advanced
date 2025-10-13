'use client';

import React from 'react';

export default function CTAs() {
  const buttons = [
    {
      text: "Start Your Free Trial",
      description: "Try our meal kits today and see how much time you save every week.",
      bgColor: "bg-yellow-600",
      hoverColor: "hover:bg-yellow-700",
    },
    {
      text: "Boost Your Health Now",
      description: "Get your all-natural nutritional supplement and feel the difference.",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
    },
    {
      text: "Order Your First Kit",
      description: "Select your meals and enjoy fresh, pre-portioned ingredients at home.",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      text: "Learn How It Works",
      description: "Discover how QuickMealz saves you time and stress in the kitchen.",
      bgColor: "bg-purple-600",
      hoverColor: "hover:bg-purple-700",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Take Action & Make Life Easier
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {buttons.map((btn, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{btn.text}</h3>
            <p className="text-gray-700 mb-6">{btn.description}</p>
            <button
              className={`${btn.bgColor} ${btn.hoverColor} text-white px-6 py-3 rounded-full font-semibold transition`}
            >
              {btn.text}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
