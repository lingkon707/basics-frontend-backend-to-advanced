// app/page.js (Next.js 13+ App Router)
"use client";

import { useState } from "react";

// Sample JSON data
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

  // Convert object to array for easier filtering
  const quotesArray = Object.values(quotesData);

  // Filter quotes based on search keyword (from Keywords array)
  const filteredQuotes = quotesArray.filter((quote) =>
    quote.Keywords.some((keyword) =>
      keyword.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20 px-4">
      <h1 className="text-3xl font-bold mb-6">Search Quotes</h1>

      <input
        type="text"
        placeholder="Type keyword..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="mt-6 w-full max-w-md space-y-4">
        {search && filteredQuotes.length === 0 && (
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
