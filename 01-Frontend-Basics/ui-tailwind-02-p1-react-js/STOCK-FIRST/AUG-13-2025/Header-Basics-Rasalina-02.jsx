import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://wp.aqlova.com/rasalina/wp-content/themes/rasalina/assets/img/logo/logo.png"
            alt="Rasalina Logo"
            className="w-32 h-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wide relative">
          <div className="flex flex-col items-center">
            <a href="#" className="text-black hover:text-yellow-500">
              Home
            </a>
            {/* Active yellow triangle */}
            <span className="w-0 h-0 border-l-4 border-r-4 border-b-[6px] border-l-transparent border-r-transparent border-b-yellow-500 mt-1"></span>
          </div>
          <a href="#" className="hover:text-yellow-500">About</a>
          <a href="#" className="hover:text-yellow-500">Portfolio</a>
          <a href="#" className="hover:text-yellow-500">Services</a>
          <a href="#" className="hover:text-yellow-500">Blog</a>
          <a href="#" className="hover:text-yellow-500">Contact</a>
        </nav>

        {/* Contact Me Button */}
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm font-semibold rounded">
            CONTACT ME
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
