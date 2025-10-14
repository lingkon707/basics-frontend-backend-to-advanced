'use client';

import React from "react";
import { FaBook, FaShippingFast, FaGift, FaHeadset } from "react-icons/fa";

// Sample data for features, testimonials, and pricing
const features = [
  { icon: <FaBook className="text-blue-600 w-10 h-10" />, title: "Vast Collection", description: "Thousands of books across all genres and categories." },
  { icon: <FaShippingFast className="text-blue-600 w-10 h-10" />, title: "Fast Delivery", description: "Get your favorite books delivered to your doorstep quickly." },
  { icon: <FaGift className="text-blue-600 w-10 h-10" />, title: "Gift Options", description: "Perfectly packaged books for gifting your loved ones." },
  { icon: <FaHeadset className="text-blue-600 w-10 h-10" />, title: "Customer Support", description: "24/7 support to help you with your orders and queries." },
];

const testimonials = [
  { name: "Alice Johnson", feedback: "Amazing selection and fast shipping! My go-to bookstore online.", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Mark Williams", feedback: "Great experience and friendly customer service. Highly recommend!", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sophia Brown", feedback: "The gift wrapping options made my present extra special. Love it!", img: "https://randomuser.me/api/portraits/women/68.jpg" },
];

const pricingPlans = [
  { name: "Basic", price: "$9.99/month", features: ["Access to 1,000+ Books", "Standard Delivery", "Email Support"] },
  { name: "Standard", price: "$19.99/month", features: ["Access to 5,000+ Books", "Fast Delivery", "Priority Support"] },
  { name: "Premium", price: "$29.99/month", features: ["Unlimited Books", "Express Delivery", "24/7 Dedicated Support"] },
];

export default function BookSellerLandingPage() {
  return (
    <div className="font-sans text-gray-800">
      
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-blue-600">BookHaven</div>
          <nav className="space-x-6 hidden md:flex">
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
            <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition hidden md:block">Shop Now</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Discover Your Next Favorite Book</h1>
            <p className="text-gray-600 text-lg">Explore thousands of books, enjoy fast delivery, and experience seamless online shopping at BookHaven.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">Shop Now</button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60" alt="Books" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose BookHaven?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2 text-center">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-blue-50 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-700 mb-4">"{t.feedback}"</p>
              <h4 className="font-semibold text-lg">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i} className="text-gray-600">{f}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Choose Plan</button>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 py-20 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore Books?</h2>
        <p className="mb-8">Join thousands of book lovers and start your reading journey today.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-100 transition">Shop Now</button>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">About BookHaven</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          BookHaven was founded with a mission to bring the joy of reading to everyone. We curate an extensive collection of books, provide fast and reliable delivery, and offer excellent customer service to make your book buying experience seamless and enjoyable.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">BookHaven</h3>
            <p>Your trusted online bookstore for all genres and needs.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-gray-500 text-sm">&copy; 2025 BookHaven. All rights reserved.</p>
      </footer>

    </div>
  );
}
