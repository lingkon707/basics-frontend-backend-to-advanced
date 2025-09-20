// app/page.js
"use client";

import { useState } from "react";

const quotesData = {
  "2025-09-02": {
    Quotes: "The only limit to our realization of tomorrow is our doubts of today.",
    Author: "Franklin D. Roosevelt",
    Category: "Motivation",
    Keywords: ["limit", "realization", "doubt", "future", "motivation"],
  },
  "2025-09-03": {
    Quotes: "In the middle of every difficulty lies opportunity.",
    Author: "Albert Einstein",
    Category: "Inspiration",
    Keywords: ["difficulty", "opportunity", "challenge", "growth", "inspiration"],
  },
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const quotesArray = Object.values(quotesData);

  // Get all unique keywords
  const allKeywords = [
    ...new Set(quotesArray.flatMap((quote) => quote.Keywords)),
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Filter keywords for autocomplete suggestions
    if (value) {
      const matched = allKeywords.filter((keyword) =>
        keyword.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(matched);
    } else {
      setSuggestions([]);
    }
  };

  // Filter quotes based on search keyword
  const filteredQuotes = search
    ? quotesArray.filter((quote) =>
        quote.Keywords.some(
          (keyword) => keyword.toLowerCase() === search.toLowerCase()
        )
      )
    : quotesArray; // If no search, show all quotes

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20 px-4">
      <h1 className="text-3xl font-bold mb-6">Search Quotes</h1>

      <div className="w-full max-w-md relative">
        <input
          type="text"
          placeholder="Type keyword..."
          value={search}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Autocomplete suggestions */}
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg max-h-40 overflow-auto z-50">
            {suggestions.map((keyword, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setSearch(keyword);
                  setSuggestions([]);
                }}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {keyword}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 w-full max-w-md space-y-4">
        {filteredQuotes.length === 0 && (
          <p className="text-gray-500">No results found.</p>
        )}

        {filteredQuotes.map((quote, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <p className="text-gray-800">"{quote.Quotes}"</p>
            <p className="mt-2 text-sm text-gray-500">
              - {quote.Author} ({quote.Category})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
