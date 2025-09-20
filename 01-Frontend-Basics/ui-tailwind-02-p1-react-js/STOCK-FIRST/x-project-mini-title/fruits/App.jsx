import React, { useState } from "react";
import data from "./data";

export default function App() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");

  const filteredData = data.map((country) => ({
    ...country,
    fruits: country.fruits.filter(
      (fruit) =>
        fruit.name.toLowerCase().includes(search.toLowerCase()) &&
        (filterType === "" || fruit.type === filterType)
    ),
  }));

  const fruitTypes = ["", "Pome", "Tropical", "Berry", "Citrus"];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Fruit Prices by Country</h1>

      {/* Search and Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search fruit..."
          className="px-3 py-2 border border-gray-300 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {fruitTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-3 py-1 rounded border ${
              filterType === type
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {type || "All"}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((country) => (
          <div key={country.country} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{country.country}</h2>
            {country.fruits.length === 0 ? (
              <p className="text-gray-500">No matching fruits.</p>
            ) : (
              <ul>
                {country.fruits.map((fruit, index) => (
                  <li key={index} className="mb-1">
                    <span className="font-medium">{fruit.name}</span> -{" "}
                    <span className="italic text-sm text-gray-600">
                      {fruit.type}
                    </span>{" "}
                    (${fruit.price})
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
