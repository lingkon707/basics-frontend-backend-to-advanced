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
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        {/* Buttons for All Letter and A-Z */}
        <div className="mb-4">
          <button
            className="bg-gray-500 text-white py-2 px-4 m-1 rounded"
            onClick={handleAllLettersClick}
          >
            All
          </button>

          {[
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
          ].map((letter) => (
            <button
              key={letter}
              className=""
              onClick={() => handleLetterButtonClick(letter)}
            >
              {/* {letter} */}
            </button>
          ))}
        </div>

        {/* Input box for Letter Filter */}
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Enter letter"
          value={letterFilter}
          onChange={handleLetterChange}
        />

        {/* Dropdown for Date Selection */}
        <select
          className="border p-2 rounded"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-lg">
              {item}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No data found
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterList;
