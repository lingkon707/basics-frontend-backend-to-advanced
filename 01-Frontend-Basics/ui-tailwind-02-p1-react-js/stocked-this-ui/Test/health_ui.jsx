'use client';

import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center p-6">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
          Unlock Your Health Naturally with Our All-Natural Nutritional Supplement!
        </h1>
        <p className="text-lg md:text-xl text-green-800 mb-8">
          Our premium nutritional supplement boosts your energy, strengthens immunity, 
          and supports overall well-being—all with 100% all-natural ingredients. No fillers, 
          no artificial additives, just pure health in every capsule.
        </p>
      </section>

      {/* 6 W's Framework */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mt-12">
        {/* Who */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Who</h2>
          <p className="text-green-800">
            Perfect for health-conscious individuals, fitness enthusiasts, and anyone 
            looking to naturally enhance their wellness.
          </p>
        </div>

        {/* What */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">What</h2>
          <p className="text-green-800">
            A daily nutritional supplement made from 100% natural ingredients that supports 
            immunity, energy, and vitality.
          </p>
        </div>

        {/* When */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">When</h2>
          <p className="text-green-800">
            Take once daily in the morning or before meals to maximize absorption and 
            start feeling energized within weeks.
          </p>
        </div>

        {/* Where */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Where</h2>
          <p className="text-green-800">
            Available online, delivered straight to your door. Enjoy convenience while 
            staying committed to your health.
          </p>
        </div>

        {/* Why */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Why</h2>
          <p className="text-green-800">
            Because your body deserves the best nutrition without chemicals. Our 
            supplement empowers you to live a healthier, more vibrant life.
          </p>
        </div>

        {/* Wow / How */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">How</h2>
          <p className="text-green-800">
            Made with organic herbs, vitamins, and minerals, crafted under strict quality 
            standards. Just one capsule a day delivers nature’s power to your body.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center">
        <button className="bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-800 transition">
          Get Your Supplement Now
        </button>
      </section>
    </div>
  );
}
