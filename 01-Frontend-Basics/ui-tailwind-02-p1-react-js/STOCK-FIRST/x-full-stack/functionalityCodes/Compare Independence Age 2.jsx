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
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col items-center p-4">
      <h1 className="text-xl font-semibold mb-6 text-white text-center max-w-sm">
        Select Exactly 2 Countries to Compare Independence Age
      </h1>

      <form
        onSubmit={onSubmit}
        className="bg-white rounded-lg shadow-md max-w-lg w-full p-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          {countries.map(({ id, name, independence }) => {
            const isSelected = selected.includes(id);
            return (
              <label
                key={id}
                className={`flex items-center space-x-2 cursor-pointer rounded px-2 py-1 border text-sm transition
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
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                />
                <span className="flex-1">
                  {name} - {independence.getFullYear()}/{independence.getMonth() + 1}
                </span>
              </label>
            );
          })}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-700 text-white rounded-md font-semibold shadow hover:bg-blue-800 transition text-sm"
        >
          Compare Independence Age
        </button>

        {/* Result Buttons */}
        {result && !result.error && (
          <div className="mt-6 flex justify-center gap-4">
            <button
              className="px-3 py-1 bg-green-600 text-white rounded-md text-sm font-semibold shadow hover:bg-green-700 transition flex items-center gap-2"
              title={`Older country: ${result.older.name}`}
            >
              <span className="font-mono">{result.older.id}.</span> Earlier: {result.older.name}
            </button>

            <button
              className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md text-sm font-semibold shadow hover:bg-gray-400 transition flex items-center gap-2"
              title={`Newer country: ${result.newer.name}`}
            >
              <span className="font-mono">{result.newer.id}.</span> Newer: {result.newer.name}
            </button>
          </div>
        )}

        {/* Error */}
        {result && result.error && (
          <p className="mt-6 text-center text-red-600 font-semibold text-sm">
            {result.error}
          </p>
        )}

        {/* Age Difference Text */}
        {result && !result.error && (
          <p className="mt-3 text-center text-gray-900 font-medium text-sm">
            Age difference: <span className="font-bold">{result.diff} years</span>
          </p>
        )}
      </form>
    </div>
  );
}
