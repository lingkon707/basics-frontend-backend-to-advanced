import React, { useState } from "react";

// Updated example JSON data (no letters)
const data = {
  "2025-08-01": ["Abortion", "Affirmative Action", "Age", "Algorithms"],
  "2025-08-02": ["Health Care", "Healthcare Online"],
  "2025-08-03": ["Race & Ethnicity", "Religion & Government"],
};

const FilterList = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [letterFilter, setLetterFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Get all unique dates for dropdown options
  const availableDates = Object.keys(data);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    filterData(date, letterFilter);
  };

  const handleLetterChange = (e) => {
    const letter = e.target.value.toUpperCase();
    setLetterFilter(letter);
    filterData(selectedDate, letter);
  };

  const handleLetterButtonClick = (letter) => {
    setLetterFilter(letter);
    filterData(selectedDate, letter);
  };

  const handleAllLettersClick = () => {
    setLetterFilter(""); // Clear letter filter
    filterData(selectedDate, ""); // Show all letters
  };

  const filterData = (date, letter) => {
    let filtered = [];

    if (date && letter) {
      // Filter by both date and letter
      filtered = data[date].filter((item) =>
        item.toUpperCase().startsWith(letter)
      );
    } else if (date) {
      // Filter by date only
      filtered = data[date];
    } else if (letter) {
      // Filter by letter only (across all dates)
      availableDates.forEach((date) => {
        filtered = [
          ...filtered,
          ...data[date].filter((item) => item.toUpperCase().startsWith(letter)),
        ];
      });
    } else {
      // Show all topics across all dates if no letter or date filter
      availableDates.forEach((date) => {
        filtered = [...filtered, ...data[date]];
      });
    }

    setFilteredData(filtered);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row md:justify-between mb-6 space-y-4 md:space-y-0">
        {/* Buttons for All Letter and A-Z */}
        <div className="flex flex-wrap gap-2">
          <button
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none"
            onClick={handleAllLettersClick}
          >
            All
          </button>

          {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].map(
            (letter) => (
              <button
                key={letter}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 focus:outline-none"
                onClick={() => handleLetterButtonClick(letter)}
              >
                {letter}
              </button>
            )
          )}
        </div>

        {/* Input box for Letter Filter */}
        <input
          type="text"
          className="w-full md:w-64 border p-3 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter letter"
          value={letterFilter}
          onChange={handleLetterChange}
        />

        {/* Dropdown for Date Selection */}
        <select
          className="w-full md:w-48 border p-3 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
        >
          <option value="">Select Date</option>
          {availableDates.map((date, index) => (
            <option key={index} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>

      {/* Display Filtered Data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105"
            >
              <p className="text-lg font-medium text-gray-700">{item}</p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg">
            No data found
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterList;
