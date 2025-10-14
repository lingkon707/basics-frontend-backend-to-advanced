'use client';

import React from "react";
import { FaTruck, FaBus, FaShip, FaPlane } from "react-icons/fa";

// Sample data for features, testimonials, and pricing
const features = [
  { icon: <FaTruck className="text-blue-500 w-10 h-10" />, title: "Road Transport", description: "Reliable and fast road freight solutions for your business." },
  { icon: <FaShip className="text-blue-500 w-10 h-10" />, title: "Sea Freight", description: "Efficient shipping services across global sea routes." },
  { icon: <FaPlane className="text-blue-500 w-10 h-10" />, title: "Air Freight", description: "Quick air transportation for urgent shipments." },
  { icon: <FaBus className="text-blue-500 w-10 h-10" />, title: "Passenger Transport", description: "Safe and comfortable bus services for city and intercity travel." },
];

const testimonials = [
  { name: "John Doe", role: "Logistics Manager", feedback: "This transportation service exceeded our expectations in speed and reliability." },
  { name: "Jane Smith", role: "CEO, Supply Co.", feedback: "Professional and efficient, highly recommend for freight solutions." },
  { name: "Michael Brown", role: "Travel Planner", feedback: "Comfortable and on-time passenger services, great experience overall." },
];

const pricingPlans = [
  { name: "Basic", price: "$99/month", features: ["Road Transport", "Customer Support", "Basic Tracking"] },
  { name: "Standard", price: "$199/month", features: ["Road & Sea Transport", "24/7 Support", "Advanced Tracking"] },
  { name: "Premium", price: "$299/month", features: ["All Transport Modes", "Dedicated Support", "Full Tracking & Analytics"] },
];

export default function TransportationUI() {
  return (
    <div className="font-sans text-gray-800">
      
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-blue-600">TranspoTech</div>
          <nav className="space-x-6 hidden md:flex">
            <a href="#features" className="hover:text-blue-500 transition">Features</a>
            <a href="#testimonials" className="hover:text-blue-500 transition">Testimonials</a>
            <a href="#pricing" className="hover:text-blue-500 transition">Pricing</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition md:block hidden">Get Started</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Efficient Transportation Solutions</h1>
            <p className="text-gray-600 text-lg">Streamline your logistics and travel with our reliable, fast, and secure transportation services.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">Get Started</button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="https://images.unsplash.com/photo-1562072541-6c1cb82e22f2?auto=format&fit=crop&w=800&q=60" alt="Transportation" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-blue-50 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-700 mb-4">"{t.feedback}"</p>
              <h4 className="font-semibold text-lg">{t.name}</h4>
              <p className="text-gray-500 text-sm">{t.role}</p>
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
        <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Transportation?</h2>
        <p className="mb-8">Join hundreds of satisfied clients and streamline your logistics today.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-100 transition">Get Started</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">TranspoTech</h3>
            <p>Reliable transportation services across road, sea, and air.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-gray-500 text-sm">&copy; 2025 TranspoTech. All rights reserved.</p>
      </footer>

    </div>
  );
}
