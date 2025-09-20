'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between gap-4">

        {/* Left: Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
          <span className="hidden md:inline-block text-xl font-bold text-gray-900">Meta Search</span>
        </div>

        {/* Center: SearchBar */}
        <div className="flex-1 max-w-md">
          <SearchBar />
        </div>

        {/* Right: Nav or Drawer Toggle */}
        <div className="flex items-center">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </nav>

          {/* Mobile Drawer Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden ml-2 p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer Content */}
          <aside
            className="fixed top-0 left-0 h-full w-72 bg-white shadow-2xl rounded-tr-3xl rounded-br-3xl p-8
            flex flex-col space-y-10 text-gray-800"
          >
            <button
              onClick={() => setDrawerOpen(false)}
              className="self-end mb-4 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Close menu"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col gap-8 text-2xl font-semibold">
              <Link
                href="/"
                className="py-3 px-6 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition"
                onClick={() => setDrawerOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-3 px-6 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition"
                onClick={() => setDrawerOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="py-3 px-6 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition"
                onClick={() => setDrawerOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
