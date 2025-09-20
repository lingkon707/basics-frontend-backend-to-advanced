import { useState } from "react";

export default function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between gap-4 px-4 py-3 max-w-7xl mx-auto">
        
        {/* Hamburger Icon */}
        <button
          aria-label="Open menu"
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Search Input */}
        <div className="flex items-center flex-grow max-w-full sm:max-w-xl border border-gray-300 bg-white rounded-full shadow-sm focus-within:ring-2 focus-within:ring-blue-400 transition">
          <input
            type="text"
            placeholder="Search a word or phrase"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow px-4 py-2 bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm sm:text-base"
          />
          <button
            aria-label="Search"
            className="p-2 sm:p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
