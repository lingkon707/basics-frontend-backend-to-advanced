"use client";

import { useState } from "react";
import quotesData from "./quotes.json"; // Direct import

export default function Home() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const dates = Object.keys(quotesData);

  // Collect all keywords for autocomplete
  const allKeywords = [
    ...new Set(dates.flatMap((date) => quotesData[date].Keywords)),
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Autocomplete
    if (value) {
      const matched = allKeywords.filter((keyword) =>
        keyword.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(matched);
    } else {
      setSuggestions([]);
    }
  };

  // Partial match filter
  const filteredDates = search
    ? dates.filter((date) =>
        quotesData[date].Keywords.some((keyword) =>
          keyword.toLowerCase().includes(search.toLowerCase())
        )
      )
    : dates;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
    
      

      {/* Hero / Search */}
      <section className="pt-32 pb-16 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Empower Your Mind with Daily Motivation
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Search quotes by keywords and get inspired every day!
        </p>

        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Type keyword..."
            value={search}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
          />

          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg max-h-40 overflow-auto z-50 shadow-lg">
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
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="px-6 py-5 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center">Daily Quotes</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDates.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">
              No quotes found for "{search}".
            </p>
          )}

          {filteredDates.map((date) => (
            <div
              key={date}
              className={`bg-white p-6 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl border-2 ${
                search &&
                quotesData[date].Keywords.some((keyword) =>
                  keyword.toLowerCase().includes(search.toLowerCase())
                )
                  ? "border-blue-400"
                  : "border-gray-200"
              }`}
            >
              <p className="text-gray-800 text-lg mb-2">"{quotesData[date].Quotes}"</p>
              <p className="text-sm text-gray-500 mb-1">- {quotesData[date].Author}</p>
              <p className="text-xs text-gray-400">{date} | {quotesData[date].Category}</p>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
}
