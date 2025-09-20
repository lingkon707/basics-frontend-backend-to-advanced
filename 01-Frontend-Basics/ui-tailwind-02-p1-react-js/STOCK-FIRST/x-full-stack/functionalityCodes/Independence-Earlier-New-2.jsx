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
    return view === "earlier"
      ? a.independence - b.independence
      : b.independence - a.independence;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex flex-col items-center p-6">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center max-w-lg">
        Countries by Independence Date
      </h1>

      <div className="flex space-x-6 mb-8">
        <button
          onClick={() => setView("earlier")}
          className={`px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform ${
            view === "earlier"
              ? "bg-green-500 text-white scale-105 shadow-green-400"
              : "bg-white text-green-600 hover:bg-green-100"
          }`}
          aria-pressed={view === "earlier"}
          aria-label="Show countries from earliest to latest independence"
          type="button"
        >
          Earlier &rarr;
        </button>

        <button
          onClick={() => setView("new")}
          className={`px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform ${
            view === "new"
              ? "bg-red-500 text-white scale-105 shadow-red-400"
              : "bg-white text-red-600 hover:bg-red-100"
          }`}
          aria-pressed={view === "new"}
          aria-label="Show countries from latest to earliest independence"
          type="button"
        >
          New &larr;
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 overflow-auto max-h-[400px]">
        <ol className="list-decimal list-inside space-y-2 text-gray-900 text-base md:text-lg">
          {sortedCountries.map((c, index) => (
            <li
              key={c.id}
              className="flex justify-between items-center p-2 rounded-md hover:bg-blue-50 cursor-default"
            >
              <span className="font-semibold">{index + 1}. {c.name}</span>
              <span className="text-gray-600">
                {c.independence.getFullYear()}/
                {(c.independence.getMonth() + 1).toString().padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
