import React, { useState } from "react";

const footballers = [
  { id: 1, name: "Lionel Messi", birth: new Date(1987, 5, 24) }, // June 24, 1987
  { id: 2, name: "Cristiano Ronaldo", birth: new Date(1985, 1, 5) }, // Feb 5, 1985
  { id: 3, name: "Neymar Jr.", birth: new Date(1992, 1, 5) }, // Feb 5, 1992
  { id: 4, name: "Kylian Mbappé", birth: new Date(1998, 11, 20) }, // Dec 20, 1998
  { id: 5, name: "Robert Lewandowski", birth: new Date(1988, 7, 21) }, // Aug 21, 1988
];

export default function FootballerAgeCompare() {
  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState("");

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const calculateAge = (birthDate) => {
    const diffMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(diffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (selected.length < 2) {
      setResult("Please select at least two footballers to compare.");
      return;
    }
    const chosen = footballers.filter((f) => selected.includes(f.id));
    chosen.sort((a, b) => a.birth - b.birth); // older first

    const oldest = chosen[0];
    const youngest = chosen[chosen.length - 1];

    setResult(
      `Oldest: ${oldest.name} (${calculateAge(oldest.birth)} years), ` +
      `Youngest: ${youngest.name} (${calculateAge(youngest.birth)} years).`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Select Footballers to Compare Age
        </h1>

        <form onSubmit={onSubmit} className="space-y-4">
          {footballers.map(({ id, name, birth }) => (
            <label
              key={id}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(id)}
                onChange={() => toggleSelect(id)}
                className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
              />
              <span className="flex-1 text-gray-900 font-semibold">
                {name} - {birth.getFullYear()} / {birth.getMonth() + 1}
              </span>
            </label>
          ))}

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-700 transition"
          >
            Compare Age
          </button>
        </form>

        {result && (
          <p className="mt-6 text-center text-gray-900 font-medium">{result}</p>
        )}
      </div>
    </div>
  );
}
