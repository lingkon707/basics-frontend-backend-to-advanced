'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resume/CV', href: '/resume' }
   
  ];

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between gap-6">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img
            src="https://www.logoai.com/oss/icons/2021/12/02/SU8HhT2n6tL-p-_.png"
            alt="Lingkon Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="hidden md:inline-block text-xl font-extrabold text-gray-900">
            Lingkon
          </span>
        </div>

        {/* Center: SearchBar */}
        <div className="flex-1 max-w-md">
          <SearchBar />
        </div>

        {/* Right: Navigation + CTA */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm md:text-base font-medium uppercase tracking-wide relative">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="relative group text-gray-800 hover:text-yellow-500 transition"
              >
                {link.name}
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Contact Me Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm md:text-base font-semibold rounded-full shadow-md shadow-blue-300/50 transition-all hover:scale-105"
            >
              CONTACT ME
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {drawerOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute w-full top-full left-0 py-6 flex flex-col items-center space-y-6">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-gray-800 hover:text-yellow-500 text-lg font-medium transition"
              onClick={() => setDrawerOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md shadow-blue-300/50 transition-all hover:scale-105"
            onClick={() => setDrawerOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
