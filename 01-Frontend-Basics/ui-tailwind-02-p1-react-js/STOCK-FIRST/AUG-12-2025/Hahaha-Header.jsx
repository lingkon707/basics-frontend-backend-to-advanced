import React, { useState, useRef, useEffect } from "react";

export default function PremiumHeader() {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function closeProfile(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", closeProfile);
    return () => document.removeEventListener("mousedown", closeProfile);
  }, []);

  return (
    <header className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo & Tagline */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-3 cursor-pointer select-none">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl w-14 h-14 flex items-center justify-center font-extrabold text-3xl shadow-xl transform hover:scale-110 transition-transform duration-300">
              P
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 leading-none">
                PixelWave
              </h1>
              <p className="text-sm text-gray-600 tracking-wide font-semibold -mt-1">
                Elevate your digital experience
              </p>
            </div>
          </div>
        </div>

        {/* Nav + Search + CTA */}
        <div className="flex items-center space-x-10">
          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8 text-gray-700 font-semibold tracking-wider">
            {[
              { name: "Home", icon: "M3 12h18M3 6h18M3 18h18" },
              { name: "Explore", icon: "M12 2l9 21H3L12 2z" },
              { name: "Projects", icon: "M4 4h16v16H4V4z" },
              { name: "Contact", icon: "M21 10v6a2 2 0 0 1-2 2h-6" },
            ].map(({ name, icon }) => (
              <a
                key={name}
                href="#"
                className="flex items-center space-x-2 group cursor-pointer relative text-gray-700 hover:text-indigo-600 transition"
              >
                <svg
                  className="w-5 h-5 group-hover:text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d={icon} />
                </svg>
                <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-indigo-600 after:scale-x-0 after:origin-left after:transition-transform group-hover:after:scale-x-100">
                  {name}
                </span>
              </a>
            ))}
          </nav>

          {/* Search with floating label */}
          <div className="relative w-72">
            <input
              id="search-input"
              type="text"
              placeholder=" "
              className="peer block w-full rounded-full border border-gray-300 bg-white py-2.5 px-4 text-gray-900 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            />
            <label
              htmlFor="search-input"
              className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-gray-700 peer-focus:text-sm cursor-text select-none"
            >
              Search PixelWave...
            </label>
          </div>

          {/* CTA Button */}
          <button className="hidden md:inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-600 transition">
            Get Started
          </button>

          {/* Profile with notification */}
          <div
            className="relative"
            ref={profileRef}
          >
            <button
              onClick={() => setProfileOpen((prev) => !prev)}
              className="flex items-center space-x-3 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={profileOpen}
              aria-label="User menu"
            >
              <img
                src="https://i.pravatar.cc/44"
                alt="User avatar"
                className="rounded-full w-11 h-11 ring-2 ring-white shadow-md"
              />
              <span className="hidden md:block text-gray-700 font-semibold select-none cursor-default">
                Jane Doe
              </span>
              <svg
                className={`w-5 h-5 text-gray-600 transition-transform ${
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

              {/* Notification Dot */}
              <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-red-500 animate-pulse" />
            </button>

            {/* Profile dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-2 text-gray-700 ring-1 ring-black ring-opacity-5 origin-top animate-fade-in">
                <a
                  href="#"
                  className="block px-5 py-2 hover:bg-indigo-50 transition rounded-lg"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-5 py-2 hover:bg-indigo-50 transition rounded-lg"
                >
                  Settings
                </a>
                <div className="border-t border-gray-200 my-1" />
                <a
                  href="#"
                  className="block px-5 py-2 hover:bg-red-50 text-red-600 font-semibold transition rounded-lg"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {opacity: 0; transform: translateY(-5px);}
          to {opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.15s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
