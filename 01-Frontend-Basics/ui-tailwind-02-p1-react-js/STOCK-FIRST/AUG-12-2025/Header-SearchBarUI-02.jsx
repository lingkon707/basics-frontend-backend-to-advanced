export default function ModernHeader() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg cursor-pointer select-none">
            M
          </div>
          <span className="text-xl font-semibold text-gray-800 cursor-default">
            MyBrand
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Services</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Search & Profile */}
        <div className="flex items-center space-x-6">
          {/* Search */}
          <div className="hidden sm:flex items-center border border-gray-300 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition duration-150 bg-white">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-full focus:outline-none w-60"
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

          {/* Profile */}
          <button
            type="button"
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              className="w-9 h-9 rounded-full"
            />
            <svg
              className="w-4 h-4 text-gray-600"
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
        </div>
      </div>

      {/* Mobile Navigation (optional) */}
      <nav className="sm:hidden bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-around text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Services
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
