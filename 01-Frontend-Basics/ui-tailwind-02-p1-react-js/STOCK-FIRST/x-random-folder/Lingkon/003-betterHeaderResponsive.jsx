"use client";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">Lingkon</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-blue-600 hover:underline transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen py-4 px-4" : "max-h-0"
        } bg-white border-t border-gray-200`}
      >
        <ul className="space-y-4 font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-600 hover:underline transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
