"use client";
import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Custom Fitness Coaching",
    description:
      "Personalized workout plans crafted by experts, tailored to your goals.",
    icon: "🏋️‍♂️",
  },
  {
    id: 2,
    title: "Holistic Nutrition",
    description:
      "Guidance on whole foods, balanced meals, and mindful eating habits.",
    icon: "🥑",
  },
  {
    id: 3,
    title: "Mind & Body Balance",
    description:
      "Stress relief, meditation, and breathing techniques for wellness.",
    icon: "🧘‍♂️",
  },
];

export default function VibrantWellness() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 font-['Poppins',sans-serif] text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 fixed top-0 w-full bg-white shadow-md z-50">
        <h1 className="text-3xl font-bold text-deepRed-700">VibrantWellness</h1>

        <nav className="hidden md:flex space-x-10 text-deepRed-700 font-semibold">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="hover:text-deepRed-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-deepRed-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col mt-20 space-y-8 px-6 text-deepRed-700 font-semibold text-lg">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              onClick={() => setMenuOpen(false)}
              className="hover:text-deepRed-500"
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-20 px-8 flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto gap-12"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-extrabold mb-6 text-deepRed-700 leading-tight">
            Empower Your Wellness Journey
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
            Discover a holistic approach combining fitness, nutrition, and mindfulness for a vibrant life.
          </p>
          <a
            href="#services"
            className="inline-block bg-deepRed-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-deepRed-600 transition"
          >
            Learn More
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Wellness woman"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20 px-8 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-14 text-deepRed-800">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-14 max-w-5xl mx-auto">
          {services.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="flex flex-col items-center p-8 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer"
            >
              <div className="text-6xl mb-5">{icon}</div>
              <h4 className="text-2xl font-semibold mb-3 text-deepRed-700">{title}</h4>
              <p className="text-gray-700 text-center">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 max-w-5xl mx-auto bg-gray-100 rounded-3xl text-center">
        <h3 className="text-4xl font-bold mb-6 text-deepRed-700">Why Choose VibrantWellness?</h3>
        <p className="text-gray-800 max-w-3xl mx-auto text-lg leading-relaxed">
          Because your health deserves a fresh perspective — combining modern science with compassionate care. We guide you every step of the way to live a balanced, joyful, and thriving life.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold text-deepRed-700 text-center mb-12">Contact Us</h3>
        <form className="flex flex-col space-y-8">
          <input
            type="text"
            placeholder="Your Name"
            className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-deepRed-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-deepRed-600"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-deepRed-600"
          />
          <button
            type="submit"
            className="bg-deepRed-700 text-white py-4 rounded-xl font-semibold hover:bg-deepRed-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-deepRed-900 text-white py-6 text-center font-light tracking-wide">
        &copy; {new Date().getFullYear()} VibrantWellness. All rights reserved.
      </footer>

      {/* Custom Colors */}
      <style>{`
        .text-deepRed-700 { color: #8B0000; }
        .text-deepRed-800 { color: #660000; }
        .text-deepRed-900 { color: #4B0000; }
        .bg-deepRed-700 { background-color: #8B0000; }
        .bg-deepRed-600 { background-color: #A50000; }
        .bg-deepRed-900 { background-color: #4B0000; }
        .hover\\:bg-deepRed-600:hover { background-color: #A50000; }
        .focus\\:ring-deepRed-600:focus { ring-color: #A50000; }
      `}</style>
    </div>
  );
}
