"use client";

import { Wifi, Globe, Shield, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-tr from-gray-900 via-indigo-950 to-black text-white font-sans">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400">
          Connect Everywhere, Instantly
        </h1>
        <p className="text-gray-300 mb-8 text-lg md:text-xl max-w-2xl">
          Providing high-speed internet and reliable network solutions for homes, businesses, and government sectors. Fast, secure, and seamless connectivity everywhere.
        </p>
        <div className="flex gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-semibold transition">
            Get Started
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gray-850 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <Wifi className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
            <h3 className="font-bold text-xl mb-2">High-Speed Internet</h3>
            <p className="text-gray-300">
              Fiber-optic and broadband internet solutions for homes and offices.
            </p>
          </div>
          <div className="bg-gray-850 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <Globe className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
            <h3 className="font-bold text-xl mb-2">Global Connectivity</h3>
            <p className="text-gray-300">
              Enterprise-grade networking for businesses and content providers worldwide.
            </p>
          </div>
          <div className="bg-gray-850 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <Shield className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
            <h3 className="font-bold text-xl mb-2">Secure Network</h3>
            <p className="text-gray-300">
              Advanced security protocols to keep your data safe and private.
            </p>
          </div>
          <div className="bg-gray-850 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <Users className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
            <h3 className="font-bold text-xl mb-2">Customer Support</h3>
            <p className="text-gray-300">
              24/7 professional support to solve your network issues instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
          Our Coverage
        </h2>
        <p className="text-gray-300 text-center max-w-3xl mb-8">
          Our network reaches every corner of the country with high-speed connectivity and reliable infrastructure.
        </p>
        <div className="bg-gray-850 rounded-2xl h-64 md:h-96 shadow-inner border border-gray-700 flex items-center justify-center text-gray-500">
          {/* Placeholder for coverage map */}
          <span className="italic">Coverage Map / Infrastructure Visualization</span>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Basic", price: "$20/mo", features: ["50 Mbps Speed", "Unlimited Data", "24/7 Support"] },
            { title: "Pro", price: "$50/mo", features: ["200 Mbps Speed", "Unlimited Data", "Priority Support"] },
            { title: "Enterprise", price: "$100/mo", features: ["1 Gbps Speed", "Dedicated Network", "Personal Support"] },
          ].map((plan, idx) => (
            <div key={idx} className="bg-gray-850 rounded-2xl p-6 shadow-lg hover:shadow-xl transition text-center">
              <h3 className="font-bold text-2xl mb-4">{plan.title}</h3>
              <p className="text-indigo-400 font-semibold text-xl mb-4">{plan.price}</p>
              <ul className="mb-4 text-gray-300 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-semibold transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alice", text: "Amazing internet speed and reliable connection!" },
            { name: "Bob", text: "Great customer support and coverage everywhere." },
            { name: "Charlie", text: "Secure and fast network for my business." },
          ].map((t, i) => (
            <div key={i} className="bg-gray-850 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <p className="text-gray-300 mb-4">"{t.text}"</p>
              <span className="text-yellow-400 font-semibold">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto bg-gray-850 rounded-3xl p-8 shadow-inner border border-gray-700 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none resize-none"
          />
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-semibold transition">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400">
        © 2025 Your Network Operator. Developed by{" "}
        <a
          href="https://www.linkedin.com/in/lingkon101/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 font-semibold hover:underline"
        >
          Lingkon
        </a>
      </footer>
    </div>
  );
}
