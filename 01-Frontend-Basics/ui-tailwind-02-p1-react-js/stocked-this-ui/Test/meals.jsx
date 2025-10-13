'use client';

import React from 'react';

export default function QuickMealzLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white flex flex-col items-center p-6">
      
      {/* Hero Section */}
      <section className="text-center max-w-3xl mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6">
          Delicious Meals in Minutes—No Stress, No Hassle!
        </h1>
        <p className="text-lg md:text-xl text-yellow-800 mb-8">
          QuickMealz delivers pre-portioned, ready-to-cook meal kits straight to your door, 
          so busy parents can enjoy healthy, home-cooked meals without spending hours in the kitchen. 
          Save time, reduce stress, and make dinner a joy again.
        </p>
        <button className="bg-yellow-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-800 transition">
          Get Started Today
        </button>
      </section>

      {/* Value Proposition - 6 W's style */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mt-12">
        {/* Who */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-2">Who</h2>
          <p className="text-yellow-900">
            Perfect for busy parents, working professionals, and anyone who wants 
            nutritious meals without the hassle.
          </p>
        </div>

        {/* What */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-2">What</h2>
          <p className="text-yellow-900">
            Time-saving meal kits with pre-portioned ingredients, easy-to-follow recipes, 
            and ready-to-cook options that serve the whole family.
          </p>
        </div>

        {/* When */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-2">When</h2>
          <p className="text-yellow-900">
            Receive fresh meal kits weekly or choose flexible delivery options that fit 
            your busy schedule.
          </p>
        </div>

        {/* Where */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-2">Where</h2>
          <p className="text-yellow-900">
            Delivered directly to your home—no supermarket trips, no last-minute stress.
          </p>
        </div>

        {/* Why */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-2">Why</h2>
          <p className="text-yellow-900">
            Because your family deserves healthy, delicious meals even on the busiest days. 
            Spend less time cooking and more time enjoying life together.
          </p>
        </div>

        {/* How */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-2">How</h2>
          <p className="text-yellow-900">
            Select your meals online, receive your kit with all ingredients pre-measured, 
            and cook in under 30 minutes using our easy instructions.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-12 max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6">What Parents Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl shadow">
            <p className="text-yellow-900 mb-4">
              "QuickMealz has changed our weeknights! My kids love the meals, and I finally 
              get evenings back." 
            </p>
            <p className="font-semibold text-yellow-700">— Sarah M., Mom of 2</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <p className="text-yellow-900 mb-4">
              "Healthy dinners without the grocery stress? Yes please! Highly recommend QuickMealz." 
            </p>
            <p className="font-semibold text-yellow-700">— David L., Busy Dad</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center">
        <button className="bg-yellow-700 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-yellow-800 transition">
          Start Your Free Trial Now
        </button>
      </section>
    </div>
  );
}
