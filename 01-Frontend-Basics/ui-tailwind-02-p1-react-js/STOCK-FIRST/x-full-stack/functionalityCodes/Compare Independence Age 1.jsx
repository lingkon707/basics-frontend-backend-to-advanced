import React, { useState } from "react";

const countries = [
  { id: 1, name: "India", independence: new Date(1947, 7, 15) }, // Aug 15, 1947
  { id: 2, name: "Pakistan", independence: new Date(1947, 7, 14) }, // Aug 14, 1947
  { id: 3, name: "Bangladesh", independence: new Date(1971, 2, 26) }, // Mar 26, 1971
  { id: 4, name: "Nepal", independence: new Date(1769, 0, 1) }, // Jan 1, 1769
  { id: 5, name: "Sri Lanka", independence: new Date(1948, 1, 4) }, // Feb 4, 1948
  { id: 6, name: "Bhutan", independence: new Date(1907, 11, 17) }, // Dec 17, 1907
  { id: 7, name: "Afghanistan", independence: new Date(1919, 7, 19) }, // Aug 19, 1919
  { id: 8, name: "China", independence: new Date(1949, 9, 1) }, // Oct 1, 1949
  { id: 9, name: "Japan", independence: new Date(1952, 3, 28) }, // Apr 28, 1952
  { id: 10, name: "Thailand", independence: new Date(1238, 0, 1) }, // Jan 1, 1238
  { id: 11, name: "Malaysia", independence: new Date(1957, 7, 31) }, // Aug 31, 1957
  { id: 12, name: "Indonesia", independence: new Date(1945, 7, 17) }, // Aug 17, 1945
  { id: 13, name: "South Korea", independence: new Date(1945, 7, 15) }, // Aug 15, 1945
];

export default function CountryIndependenceCompare() {
  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState(null);

  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((x) => x !== id));
      setResult(null);
    } else {
      if (selected.length < 2) {
        setSelected([...selected, id]);
        setResult(null);
      }
    }
  };

  const calculateYearsSince = (date) => {
    const diffMs = Date.now() - date.getTime();
    return diffMs / (1000 * 60 * 60 * 24 * 365.25);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (selected.length !== 2) {
      setResult({ error: "Please select exactly two countries to compare." });
      return;
    }

    const chosen = countries.filter((c) => selected.includes(c.id));
    chosen.sort((a, b) => a.independence - b.independence);

    const older = chosen[0];
    const newer = chosen[1];

    const olderAge = calculateYearsSince(older.independence);
    const newerAge = calculateYearsSince(newer.independence);
    const diff = Math.abs(olderAge - newerAge);

    setResult({
      older,
      newer,
      diff: diff.toFixed(2),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8 text-white text-center max-w-lg">
        Select Exactly 2 Countries to Compare Independence Age
      </h1>

      <form
        onSubmit={onSubmit}
        className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {countries.map(({ id, name, independence }) => {
            const isSelected = selected.includes(id);
            return (
              <label
                key={id}
                className={`flex items-center space-x-3 cursor-pointer rounded p-3 border transition
                  ${
                    isSelected
                      ? "border-blue-600 bg-blue-50 font-semibold text-blue-900"
                      : "border-gray-300 hover:bg-gray-100"
                  }
                  ${!isSelected && selected.length >= 2 ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleSelect(id)}
                  disabled={!isSelected && selected.length >= 2}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                />
                <span className="flex-1">
                  {name} - {independence.getFullYear()} / {independence.getMonth() + 1}
                </span>
              </label>
            );
          })}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition"
        >
          Compare Independence Age
        </button>

        {/* Result Section */}
        {result && (
          <div
            className={`mt-8 p-6 rounded-lg max-w-3xl mx-auto ${
              result.error ? "bg-red-100 text-red-700" : "bg-white shadow-md"
            }`}
          >
            {result.error ? (
              <p className="text-center font-semibold">{result.error}</p>
            ) : (
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-center">
                <div
                  className="flex-1 p-4 rounded-lg border-2 border-green-600 bg-green-100 font-bold text-green-900 relative"
                  aria-label="Older Country"
                >
                  <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full select-none">
                    Earlier
                  </span>
                  <h2 className="text-xl mb-1">{result.older.name}</h2>
                  <p>
                    Independence:{" "}
                    <span className="font-semibold">
                      {result.older.independence.getFullYear()} /{" "}
                      {result.older.independence.getMonth() + 1}
                    </span>
                  </p>
                </div>

                <div
                  className="flex-1 p-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-600"
                  aria-label="Newer Country"
                >
                  <h2 className="text-lg mb-1">{result.newer.name}</h2>
                  <p>
                    Independence:{" "}
                    <span>
                      {result.newer.independence.getFullYear()} /{" "}
                      {result.newer.independence.getMonth() + 1}
                    </span>
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-2xl font-extrabold text-blue-800">
                    {result.diff} years
                  </p>
                  <p className="text-gray-700 mt-1 text-sm">
                    Age difference between independence years
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
