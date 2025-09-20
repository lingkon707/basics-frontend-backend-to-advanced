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
  "2025-09-04": {
    Quotes: "Education is the most powerful weapon which you can use to change the world.",
    Author: "Nelson Mandela",
    Category: "Education",
    Keywords: ["education", "knowledge", "power", "learning", "student"],
  },
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const dates = Object.keys(quotesData);

  // Collect all unique keywords for autocomplete
  const allKeywords = [
    ...new Set(dates.flatMap((date) => quotesData[date].Keywords)),
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value) {
      const matched = allKeywords.filter((keyword) =>
        keyword.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(matched);
    } else {
      setSuggestions([]);
    }
  };

  // Filter quotes for partial keyword match
  const filteredDates = search
    ? dates.filter((date) =>
        quotesData[date].Keywords.some((keyword) =>
          keyword.toLowerCase().includes(search.toLowerCase())
        )
      )
    : dates; // Show all if search empty

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      {/* Header */}
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">Student Quotes Hub</h1>
          <nav className="space-x-4">
            <a href="#quotes" className="text-gray-700 hover:text-blue-600">
              Quotes
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Empower Your Mind with Daily Motivation
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Explore quotes, learn from the wisdom of great minds, and get inspired for your
          studies and life.
        </p>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search quotes by keyword..."
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
      <section id="quotes" className="px-6 py-12 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Daily Quotes
        </h3>

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
              <p className="text-sm text-gray-500 mb-1">
                - {quotesData[date].Author}
              </p>
              <p className="text-xs text-gray-400">{date} | {quotesData[date].Category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="bg-gradient-to-r from-purple-200 to-blue-200 py-16 px-6"
      >
        <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Services for Students
        </h3>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
            <h4 className="font-bold text-xl mb-2">Daily Motivation</h4>
            <p className="text-gray-600">
              Get inspired every day with carefully selected motivational quotes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
            <h4 className="font-bold text-xl mb-2">Study Tips</h4>
            <p className="text-gray-600">
              Learn effective study techniques and productivity hacks for students.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
            <h4 className="font-bold text-xl mb-2">Career Guidance</h4>
            <p className="text-gray-600">
              Explore your potential career paths and get guidance to excel in life.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-md mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-500">
          &copy; 2025 Student Quotes Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
