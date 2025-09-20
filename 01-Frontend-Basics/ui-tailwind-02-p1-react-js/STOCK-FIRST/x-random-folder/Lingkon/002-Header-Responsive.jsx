"use client";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-lg py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-700">Lingkon</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#portfolio" className="hover:text-blue-600">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none text-2xl"
          onClick={toggleMenu}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="md:hidden px-4 pt-4 pb-6 space-y-4 font-medium text-gray-700 bg-white shadow-md rounded-b-lg">
          <li><a href="#about" onClick={toggleMenu} className="block hover:text-blue-600">About</a></li>
          <li><a href="#skills" onClick={toggleMenu} className="block hover:text-blue-600">Skills</a></li>
          <li><a href="#experience" onClick={toggleMenu} className="block hover:text-blue-600">Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="block hover:text-blue-600">Projects</a></li>
          <li><a href="#portfolio" onClick={toggleMenu} className="block hover:text-blue-600">Portfolio</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="block hover:text-blue-600">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
