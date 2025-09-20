import React, { useState } from "react";

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

export default function SearchBox() {
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = suggestionsData.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-md mx-auto mt-20">
      <input
        type="text"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)} // delay to allow click
      />
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-b-lg shadow-lg max-h-48 overflow-auto">
          {filteredSuggestions.map((item, idx) => (
            <li
              key={idx}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              onMouseDown={() => setInput(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
