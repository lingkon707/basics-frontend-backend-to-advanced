"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Coverage", href: "#coverage" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <div className="text-yellow-400 font-bold text-2xl md:text-3xl">
          NetLux
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-yellow-400 transition font-semibold"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl text-white font-semibold transition">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 hover:text-yellow-400"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-850 border-t border-gray-700">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-yellow-400 font-semibold transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl text-white font-semibold transition">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
