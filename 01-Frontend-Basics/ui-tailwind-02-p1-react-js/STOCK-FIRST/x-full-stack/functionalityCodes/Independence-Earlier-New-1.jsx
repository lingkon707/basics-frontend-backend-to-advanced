import React, { useState } from "react";

const countries = [
  { id: 1, name: "India", independence: new Date(1947, 7, 15) },
  { id: 2, name: "Pakistan", independence: new Date(1947, 7, 14) },
  { id: 3, name: "Bangladesh", independence: new Date(1971, 2, 26) },
  { id: 4, name: "Nepal", independence: new Date(1769, 0, 1) },
  { id: 5, name: "Sri Lanka", independence: new Date(1948, 1, 4) },
  { id: 6, name: "Bhutan", independence: new Date(1907, 11, 17) },
  { id: 7, name: "Afghanistan", independence: new Date(1919, 7, 19) },
  { id: 8, name: "China", independence: new Date(1949, 9, 1) },
  { id: 9, name: "Japan", independence: new Date(1952, 3, 28) },
  { id: 10, name: "Thailand", independence: new Date(1238, 0, 1) },
  { id: 11, name: "Malaysia", independence: new Date(1957, 7, 31) },
  { id: 12, name: "Indonesia", independence: new Date(1945, 7, 17) },
  { id: 13, name: "South Korea", independence: new Date(1945, 7, 15) },
];

export default function IndependenceList() {
  const [view, setView] = useState("earlier"); // 'earlier' or 'new'

  const sortedCountries = [...countries].sort((a, b) => {
    if (view === "earlier") {
      return a.independence - b.independence;
    } else {
      return b.independence - a.independence;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col items-center p-6">
      <h1 className="text-xl font-semibold mb-6 text-white text-center max-w-sm">
        Countries by Independence Date
      </h1>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setView("earlier")}
          className={`px-4 py-2 rounded-md font-semibold shadow-md transition ${
            view === "earlier"
              ? "bg-green-600 text-white"
              : "bg-white text-green-600 hover:bg-green-100"
          }`}
        >
          Earlier &rarr;
        </button>
        <button
          onClick={() => setView("new")}
          className={`px-4 py-2 rounded-md font-semibold shadow-md transition ${
            view === "new"
              ? "bg-red-600 text-white"
              : "bg-white text-red-600 hover:bg-red-100"
          }`}
        >
          New &larr;
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-4">
        <ol className="list-decimal list-inside space-y-1 text-gray-800 text-sm">
          {sortedCountries.map((c, index) => (
            <li key={c.id} className="flex justify-between">
              <span>
                <span className="font-semibold">{index + 1}.</span> {c.name}
              </span>
              <span className="text-gray-600">
                {c.independence.getFullYear()}/
                {c.independence.getMonth() + 1}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
