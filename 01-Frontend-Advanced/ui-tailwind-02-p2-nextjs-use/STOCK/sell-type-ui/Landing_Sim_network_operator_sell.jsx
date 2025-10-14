"use client";

import { Wifi, Globe, Shield, Users, MapPin, Phone, Mail } from "lucide-react";

export default function NetworkOperatorLanding() {
  return (
    <div className="bg-gradient-to-tr from-gray-900 via-indigo-950 to-black text-white font-sans">

      {/* Header */}
      <header className="w-full fixed top-0 left-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
          <div className="text-yellow-400 font-bold text-2xl md:text-3xl">NetLux</div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-gray-300 hover:text-yellow-400 font-semibold">Home</a>
            <a href="#services" className="text-gray-300 hover:text-yellow-400 font-semibold">Services</a>
            <a href="#coverage" className="text-gray-300 hover:text-yellow-400 font-semibold">Coverage</a>
            <a href="#infrastructure" className="text-gray-300 hover:text-yellow-400 font-semibold">Infrastructure</a>
            <a href="#plans" className="text-gray-300 hover:text-yellow-400 font-semibold">Plans</a>
            <a href="#testimonials" className="text-gray-300 hover:text-yellow-400 font-semibold">Testimonials</a>
            <a href="#contact" className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl text-white font-semibold transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 pt-28">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400">
          Connect Everywhere, Instantly
        </h1>
        <p className="text-gray-300 mb-8 text-lg md:text-xl max-w-2xl">
          Providing high-speed internet, secure networks, and reliable connectivity for homes, businesses, and governments worldwide.
        </p>
        <div className="flex gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-semibold transition">Get Started</button>
          <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold transition">Learn More</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gray-850 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <Wifi className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
            <h3 className="font-bold text-xl mb-2">High-Speed Internet</h3>
            <p className="text-gray-300">Fiber-optic & broadband for homes and offices.</p>
          </div>
          <div className="bg-gray-850 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <Globe className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
            <h3 className="font-bold text-xl mb-2">Global Connectivity</h3>
            <p className="text-gray-300">Enterprise-grade networks worldwide.</p>
          </div>
          <div className="bg-gray-850 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <Shield className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
            <h3 className="font-bold text-xl mb-2">Secure Network</h3>
            <p className="text-gray-300">Advanced security & privacy protocols.</p>
          </div>
          <div className="bg-gray-850 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <Users className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
            <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
            <p className="text-gray-300">Professional assistance anytime.</p>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">Our Coverage</h2>
        <p className="text-gray-300 text-center max-w-3xl mb-8">
          Our network spans every region, providing seamless internet access and mobile communication to homes and businesses.
        </p>
        <div className="bg-gray-850 rounded-2xl h-64 md:h-96 shadow-inner border border-gray-700 flex items-center justify-center text-gray-500">
          <span className="italic">Coverage Map / Network Visualization</span>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-20 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">Network Infrastructure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-850 rounded-2xl p-6 shadow-lg hover:shadow-xl transition text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
            <h3 className="font-bold text-xl mb-2">Global Backbone</h3>
            <p className="text-gray-300">Robust internet backbone supporting global data traffic.</p>
          </div>
          <div className="bg-gray-850 rounded-2xl p-6 shadow-lg hover:shadow-xl transition text-center">
            <Wifi className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
            <h3 className="font-bold text-xl mb-2">Wireless Towers</h3>
            <p className="text-gray-300">Modern cell towers ensuring strong mobile signal everywhere.</p>
          </div>
          <div className="bg-gray-850 rounded-2xl p-6 shadow-lg hover:shadow-xl transition text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
            <h3 className="font-bold text-xl mb-2">Data Security</h3>
            <p className="text-gray-300">State-of-the-art security for all users and corporate clients.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Basic", price: "$20/mo", features: ["50 Mbps", "Unlimited Data", "24/7 Support"] },
            { title: "Pro", price: "$50/mo", features: ["200 Mbps", "Unlimited Data", "Priority Support"] },
            { title: "Enterprise", price: "$100/mo", features: ["1 Gbps", "Dedicated Network", "Personal Support"] },
          ].map((plan, idx) => (
            <div key={idx} className="bg-gray-850 rounded-2xl p-6 shadow-lg hover:shadow-xl transition text-center">
              <h3 className="font-bold text-2xl mb-4">{plan.title}</h3>
              <p className="text-indigo-400 font-semibold text-xl mb-4">{plan.price}</p>
              <ul className="mb-4 text-gray-300 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-semibold transition">Choose Plan</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alice", text: "Reliable coverage and amazing speeds!" },
            { name: "Bob", text: "Excellent support and network security." },
            { name: "Charlie", text: "Best internet for my business operations." },
          ].map((t, i) => (
            <div key={i} className="bg-gray-850 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <p className="text-gray-300 mb-4">"{t.text}"</p>
              <span className="text-yellow-400 font-semibold">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">Contact Us</h2>
        <div className="max-w-2xl mx-auto bg-gray-850 rounded-3xl p-8 shadow-inner border border-gray-700 space-y-4">
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-indigo-400" />
            <span className="text-gray-300">Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-indigo-400" />
            <span className="text-gray-300">+880 1700 000000</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-indigo-400" />
            <span className="text-gray-300">support@netlux.com</span>
          </div>
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none" />
          <textarea placeholder="Your Message" className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none resize-none" />
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-semibold transition">Send Message</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400">
        © 2025 NetLux. Developed by{" "}
        <a href="https://www.linkedin.com/in/lingkon101/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-semibold hover:underline">
          Lingkon
        </a>
      </footer>
    </div>
  );
}
