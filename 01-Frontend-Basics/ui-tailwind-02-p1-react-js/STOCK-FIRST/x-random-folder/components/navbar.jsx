"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // Add more pages like /projects, /contact, etc.
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center py-4">
        <Link href="/" className="text-3xl font-extrabold text-blue-600 tracking-tight">
          Lingkon
        </Link>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <Link href={path} className="hover:text-blue-600 hover:underline transition">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={toggleMenu}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white border-t border-gray-200">
          <ul className="space-y-4 font-medium text-gray-700">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  href={path}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-blue-600 hover:underline"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
