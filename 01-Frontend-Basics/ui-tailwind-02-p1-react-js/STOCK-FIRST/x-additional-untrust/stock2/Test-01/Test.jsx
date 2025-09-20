'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        {/* Left: Logo */}
        <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer select-none">
          <div className="bg-indigo-600 rounded-full p-2 shadow-md">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-10 h-10"
              loading="lazy"
            />
          </div>
          <span className="hidden md:inline-block text-gray-900 text-2xl font-extrabold tracking-wide">
            Meta Search
          </span>
        </div>

        {/* Center: SearchBar */}
        <div className="flex-1 max-w-xl">
          <SearchBar />
        </div>

        {/* Right: Nav or Drawer Toggle */}
        <div className="flex items-center gap-5">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 text-gray-700 font-semibold text-lg tracking-wide select-none">
            <Link href="/" className="hover:text-indigo-600 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-indigo-600 transition duration-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-indigo-600 transition duration-300">
              Contact
            </Link>
          </nav>

          {/* Mobile Drawer Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden p-3 rounded-full bg-indigo-600 hover:bg-indigo-500 shadow-md text-white transition duration-300 focus:outline-none"
            aria-label="Open menu"
            title="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer Content */}
          <aside
            className="fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900
            shadow-3xl rounded-tr-3xl rounded-br-3xl p-10 flex flex-col space-y-14 text-white"
          >
            <button
              onClick={() => setDrawerOpen(false)}
              className="self-end mb-4 p-2 rounded-full bg-pink-500 hover:bg-pink-400 shadow-xl transition duration-300 focus:outline-none"
              aria-label="Close menu"
              title="Close menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col gap-12 text-3xl font-bold tracking-wide select-none">
              <Link
                href="/"
                className="py-3 px-8 rounded-xl hover:bg-pink-500 hover:text-white transition duration-300"
                onClick={() => setDrawerOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-3 px-8 rounded-xl hover:bg-pink-500 hover:text-white transition duration-300"
                onClick={() => setDrawerOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="py-3 px-8 rounded-xl hover:bg-pink-500 hover:text-white transition duration-300"
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
