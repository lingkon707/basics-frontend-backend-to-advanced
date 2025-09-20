'use client';
import { useState } from 'react';

const navLinks = [
  'Home',
  'About Me',
  'Projects',
  'Skills',
  'Experience',
  'Education',
  'Testimonials',
  'Blog',
  'Contact',
  'Resume',
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-rgbdark bg-opacity-90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-white font-bold text-2xl tracking-wide cursor-pointer">
          RGB<span className="text-pink-500">Portfolio</span>
        </div>

        <nav className="hidden md:flex space-x-6 text-white font-semibold">
          {navLinks.map((label) => (
            <span
              key={label}
              className="hover:text-pink-500 transition-colors cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </span>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-rgbdark bg-opacity-95 py-4 space-y-3 text-center">
          {navLinks.map((label) => (
            <span
              key={label}
              className="block text-white text-lg font-semibold hover:text-pink-500 transition-colors cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </span>
          ))}
        </nav>
      )}
    </header>
  );
}
