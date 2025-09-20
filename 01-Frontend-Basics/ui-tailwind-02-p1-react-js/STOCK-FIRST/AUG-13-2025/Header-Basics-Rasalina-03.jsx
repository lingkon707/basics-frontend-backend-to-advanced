import React from "react";

const navItems = ["Home", "About", "Portfolio", "Services", "Blog", "Contact"];

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="https://wp.aqlova.com/rasalina/wp-content/themes/rasalina/assets/img/logo/logo.png"
            alt="Rasalina Logo"
            className="w-36 h-auto object-contain"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wide">
          {navItems.map((item, index) => (
            <div
              key={item}
              className="flex flex-col items-center group transition duration-300"
            >
              <a
                href="#"
                className={`hover:text-yellow-500 ${
                  item === "Home" ? "text-black" : "text-gray-800"
                } transition duration-200`}
              >
                {item}
              </a>
              {/* Triangle for active item */}
              {item === "Home" && (
                <span className="w-0 h-0 border-l-4 border-r-4 border-b-[6px] border-l-transparent border-r-transparent border-b-yellow-500 mt-1 opacity-100 transition-opacity duration-300" />
              )}
            </div>
          ))}
        </nav>

        {/* Contact Me Button */}
        <div className="ml-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm font-semibold rounded-md shadow-sm transition duration-200">
            CONTACT ME
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
