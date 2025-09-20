import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center space-x-3 p-4">
      {/* Hamburger Icon */}
      <button className="text-gray-800">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Search Input */}
      <div className="flex items-center w-full max-w-md rounded-full border border-gray-400 shadow-sm overflow-hidden">
        <input
          type="text"
          placeholder="Search a word or phrase"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-4 py-2 outline-none text-gray-700 placeholder-gray-500"
        />
        <button className="bg-blue-100 px-4 py-2 rounded-full">
          <svg
            className="w-5 h-5 text-gray-800"
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
  );
}
