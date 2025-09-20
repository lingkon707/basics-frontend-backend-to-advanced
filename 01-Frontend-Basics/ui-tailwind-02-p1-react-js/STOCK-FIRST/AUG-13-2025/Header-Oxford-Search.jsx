import { useState } from "react";

export default function HeaderSearch() {
  const [language, setLanguage] = useState("English");

  return (
    <header className="w-full bg-gradient-to-r bg-green-800 py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center">
        {/* Language Selector */}
        <div className="relative inline-block">
          <button
            type="button"
            className="bg-yellow-300 text-black px-4 py-2 rounded-l-md flex items-center justify-between w-40"
            onClick={() => alert("Language dropdown clicked")}
          >
            <span>{language}</span>
            <svg
              className="ml-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Oxford Advanced Learner's Dictionary"
          className="flex-grow mx-4 px-4 py-2 rounded-none outline-none text-white"
        />

        {/* Keyboard Icon */}
        <button
          type="button"
          aria-label="Keyboard input"
          className="p-2 text-white hover:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18M5 10v4M19 10v4M9 10v4M15 10v4" />
          </svg>
        </button>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-white text-blue-700 px-4 py-2 rounded-r-md"
          aria-label="Search"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
