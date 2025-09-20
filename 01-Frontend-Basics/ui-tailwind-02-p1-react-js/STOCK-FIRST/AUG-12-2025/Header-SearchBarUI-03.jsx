import React, { useState, useRef, useEffect } from "react";

export default function UpgradedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-11 h-11 flex items-center justify-center font-extrabold text-xl select-none cursor-pointer shadow-lg">
            M
          </div>
          <span className="text-2xl font-bold text-gray-900 cursor-default select-none">
            MyBrand
          </span>
        </div>

        {/* Center: Navigation (md+) */}
        <nav className="hidden md:flex space-x-10 text-gray-700 font-semibold tracking-wide">
          <a
            href="#"
            className="relative group px-2 py-1 hover:text-blue-600 transition"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a
            href="#"
            className="relative group px-2 py-1 hover:text-blue-600 transition"
          >
            About
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a
            href="#"
            className="relative group px-2 py-1 hover:text-blue-600 transition"
          >
            Services
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a
            href="#"
            className="relative group px-2 py-1 hover:text-blue-600 transition"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </nav>

        {/* Right side: Search + Profile + Mobile Hamburger */}
        <div className="flex items-center space-x-6">
          {/* Search (sm+) */}
          <div className="hidden sm:flex items-center border border-gray-300 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition duration-200 bg-white">
            <input
              type="text"
              placeholder="Search..."
              className="px-5 py-2 rounded-full focus:outline-none w-64"
              aria-label="Search"
            />
            <button
              aria-label="Search"
              className="pr-4 text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          {/* Profile dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen((prev) => !prev)}
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
              aria-haspopup="true"
              aria-expanded={profileOpen}
              aria-label="User menu"
            >
              <img
                src="https://i.pravatar.cc/40"
                alt="Profile"
                className="w-10 h-10 rounded-full shadow-md"
              />
              <svg
                className={`w-4 h-4 text-gray-600 transition-transform ${
                  profileOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown menu */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 text-gray-700 ring-1 ring-black ring-opacity-5 origin-top animate-fade-in">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-100 transition"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-100 transition"
                >
                  Settings
                </a>
                <div className="border-t border-gray-200 my-1" />
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-red-100 text-red-600 font-semibold transition"
                >
                  Logout
                </a>
              </div>
            )}
          </div>

          {/* Mobile menu button (sm only) */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-700 transition-opacity duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200 shadow-inner">
          <div className="px-6 py-4 flex flex-col space-y-3 text-gray-700 font-semibold tracking-wide">
            <a
              href="#"
              className="hover:text-blue-600 transition px-3 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition px-3 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition px-3 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition px-3 py-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </nav>
      )}

      <style>
        {`
          @keyframes fade-in {
            from {opacity: 0; transform: translateY(-5px);}
            to {opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.2s ease-out forwards;
          }
        `}
      </style>
    </header>
  );
}
