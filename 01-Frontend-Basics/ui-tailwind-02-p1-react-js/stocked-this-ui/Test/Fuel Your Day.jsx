'use client';

import React from 'react';

export default function LandingPage() {
  const headlines = [
    "Fuel Your Day, The Natural Way!",
    "Healthy Living Made Simple—No Compromises.",
    "From Pantry to Plate in Minutes—Stay Energized, Stay Healthy.",
    "All-Natural Nutrition, Designed for Your Busy Life.",
    "Quick, Clean, and Full of Life—Your Daily Health Boost.",
    "The Smart Way to Stay Healthy Without the Hassle.",
    "Wellness You Can Taste, Energy You Can Feel.",
    "No Prep, No Stress, Just Pure Nutrition.",
    "Your Shortcut to a Healthier, Happier Day.",
    "Goodbye Fast Food, Hello Quick & Natural Fuel."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center p-6">
      
      {/* Hero Section */}
      <section className="text-center max-w-4xl mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
          {headlines[0]}
        </h1>
        <p className="text-lg md:text-xl text-green-800 mb-8">
          Our all-natural nutritional supplement boosts your energy, strengthens immunity, 
          and supports overall well-being. No fillers, no artificial additives—just pure health.
        </p>
        <button className="bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-800 transition">
          Get Started Now
        </button>
      </section>

      {/* Rotating Headlines / Taglines */}
      <section className="mt-12 max-w-3xl w-full text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Why People Love Our Supplement</h2>
        <ul className="space-y-4 text-green-900 text-lg">
          {headlines.map((headline, index) => (
            <li key={index} className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              {headline}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center">
        <button className="bg-green-700 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-green-800 transition">
          Try It Today
        </button>
      </section>
    </div>
  );
}
