// app/Header.tsx or components/Header.tsx
"use client";

import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-gray-200 transition">
          MyWebsite
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8 text-lg font-medium">
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-200 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-200 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-200 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
