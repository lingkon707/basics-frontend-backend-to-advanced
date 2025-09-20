'use client';

import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-gray-800">Lingkon</span>
        </div>

        {/* Navbar */}
        <nav className="flex gap-6 text-gray-600 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* SearchBar */}
        <div className="w-full lg:w-96">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
