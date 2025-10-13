"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Coverage", href: "#coverage" },
    { name: "Infrastructure", href: "#infrastructure" },
    { name: "Plans", href: "#plans" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <div className="text-yellow-400 font-bold text-2xl md:text-3xl">NetLux</div>

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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-gray-300 hover:text-yellow-400"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-850 shadow-2xl transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <span className="text-yellow-400 font-bold text-xl">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-yellow-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-yellow-400 font-semibold transition"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl text-white font-semibold mt-4 transition"
          >
            Get Started
          </button>
        </nav>
      </div>

      {/* Overlay when Drawer Open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
