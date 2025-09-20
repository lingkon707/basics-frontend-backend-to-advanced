import React, { useState, useRef, useEffect } from "react";

const suggestionsData = [
  "JavaScript",
  "Python",
  "React",
  "Tailwind CSS",
  "Node.js",
  "HTML",
  "CSS",
  "C++",
  "Java",
  "TypeScript",
  "Ruby",
  "Swift",
];

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (input.trim() === "") {
      setFilteredSuggestions([]);
      return;
    }
    const filtered = suggestionsData.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  }, [input]);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSelectSuggestion = (value) => {
    setInput(value);
    setShowSuggestions(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative max-w-lg mx-auto mt-20"
    >
      <div className="flex items-center border border-gray-300 rounded-full shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition duration-150">
        <input
          type="text"
          className="flex-grow px-5 py-3 rounded-full focus:outline-none"
          placeholder="Search programming languages or frameworks..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
        />
        <button
          type="submit"
          className="pr-5 text-blue-600 hover:text-blue-800 focus:outline-none"
          aria-label="Search"
        >
          <svg
            className="w-6 h-6"
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
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-b-lg shadow-lg max-h-60 overflow-y-auto mt-1 z-20">
          {filteredSuggestions.map((item, idx) => (
            <li
              key={idx}
              onClick={() => onSelectSuggestion(item)}
              className="px-5 py-3 cursor-pointer hover:bg-blue-100 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {showSuggestions && input && filteredSuggestions.length === 0 && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-b-lg shadow-lg mt-1 px-5 py-3 text-gray-500 z-20">
          No results found.
        </div>
      )}
    </div>
  );
}
