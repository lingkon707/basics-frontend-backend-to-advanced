import React, { useState, useEffect } from "react";

// Updated example JSON data (no letters)
const data = {
  "2025-08-01": ["Abortion", "Affirmative Action", "Cow", "Algorithms"],
  "2025-08-02": ["Health Care", "Healthcare Online"],
  "2025-08-03": ["Race & Ethnicity", "Religion & Government"],
};

const FilterList = () => {
  // Set the default selected date to "all"
  const [selectedDate, setSelectedDate] = useState("all");
  const [letterFilter, setLetterFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Get all unique dates for dropdown options
  const availableDates = Object.keys(data);

  // Effect to apply filtering when selectedDate or letterFilter changes
  useEffect(() => {
    filterData(selectedDate, letterFilter);
  }, [selectedDate, letterFilter]);

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the selected date and filter data
  };

  const handleLetterChange = (e) => {
    const letter = e.target.value.toUpperCase(); // Normalize the input to uppercase
    setLetterFilter(letter);
  };

  const handleAllLettersClick = () => {
    setLetterFilter(""); // Clear letter filter
    filterData(selectedDate, ""); // Show all letters
  };

  const handleClearAll = () => {
    setSelectedDate("all"); // Reset to all dates
    setLetterFilter(""); // Clear letter filter
    filterData("all", ""); // Show all data
  };

  const filterData = (date, letter) => {
    let filtered = [];

    if (date === "all") {
      // If "All Dates" is selected, show data from all dates
      availableDates.forEach((date) => {
        filtered = [
          ...filtered,
          ...data[date].filter((item) => item.toUpperCase().startsWith(letter)),
        ];
      });
    } else if (date && letter) {
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
    }

    setFilteredData(filtered);
  };

  return (
    <div className="bg-sky-800 min-h-screen">
      <div className="container px-4 py-3 min-h-screen">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Flexbox to align the controls */}
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-2 md:space-y-0">
            

            {/* Date Selection Dropdown */}
            <div className="flex-1">
              <select
                className="w-full md:w-64 px-4 text-white bg-blue-900 py-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={selectedDate}
                onChange={(e) => handleDateChange(e.target.value)}
              >
                <option value="all">All Dates</option> {/* Default is "All Dates" */}
                {availableDates.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            {/* Input for Letter Filter */}
            <div className="flex-1">
              <input
                type="text"
                className="w-full md:w-64 px-4 py-3 text-black bg-white rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Filter by letter"
                value={letterFilter}
                onChange={handleLetterChange}
              />
            </div>

            {/* Clear All Button */}
            <div className="flex-1">
              <button
                onClick={handleClearAll}
                className="w-full md:w-64 px-4 py-3 text-white text-2xl bg-red-900 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Clear All
              </button>
            </div>
            
          </div>

          {/* Display Filtered Data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <p className="text-lg font-semibold text-gray-700">{item}</p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-white text-2xl">
                No data found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
