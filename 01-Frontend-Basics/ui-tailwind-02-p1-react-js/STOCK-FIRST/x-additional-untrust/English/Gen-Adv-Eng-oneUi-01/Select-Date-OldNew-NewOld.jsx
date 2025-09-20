import React, { useState } from 'react';
import data from './Select.json';

export default function SentenceCard() {
  // Extract unique dates from the data and sort them in descending order (most recent first)
  const uniqueDates = [...new Set(data.map(item => item.Date))].sort((a, b) => new Date(b) - new Date(a));

  const [selectedDate, setSelectedDate] = useState('');
  const [sortOrder, setSortOrder] = useState('new-to-old'); // Default to 'New to Old'

  // Sort the data based on selected order
  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === 'new-to-old') {
      return b.id - a.id; // New to Old (larger ID first)
    } else {
      return a.id - b.id; // Old to New (smaller ID first)
    }
  });

  // Filter the data based on the selected date (if any)
  const filteredData = selectedDate
    ? sortedData.filter(item => item.Date === selectedDate)
    : sortedData;

  return (
    <div className="min-h-screen bg-gradient-to-br bg-black p-10">
      {/* Sorting buttons */}
      <div className="mb-6 bg-blue-700 p-5 flex items-center justify-between">
        <div>
          <label htmlFor="dateFilter" className="text-white font-semibold">
            Select a Date:
          </label>
          <select
            id="dateFilter"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
            className="ml-2 p-2 rounded-md bg-white text-gray-700"
          >
            <option value="">All Dates</option>
            {uniqueDates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        {/* Sorting Buttons */}
        <div>
          <button
            onClick={() => setSortOrder('new-to-old')}
            className="text-white px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 mr-2"
          >
            New to Old
          </button>
          <button
            onClick={() => setSortOrder('old-to-new')}
            className="text-white px-4 py-2 rounded-md bg-red-600 hover:bg-red-700"
          >
            Old to New
          </button>
        </div>
      </div>

      {/* Display filtered and sorted data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map(({ id, General, Advance, Date, "mini-notes": miniNotes }) => (
          <div
            key={id}
            className="bg-white rounded-lg p-4 shadow-md"
          >
            <div className="text-xs text-gray-500 mb-3">
              <span className="font-mono">Sentence: {id}</span>
            </div>

            <div className="mb-3">
              <p className="text-base font-semibold text-gray-800">
                <span className="text-blue-600">General:</span> {General}
              </p>
            </div>

            <div className="mb-3">
              <p className="text-base font-semibold text-gray-800">
                <span className="text-green-600">Advance:</span> {Advance}
              </p>
            </div>

            <div className="mb-3">
              <p className="text-sm text-gray-600">
                {/* <span className="font-medium text-yellow-500">Mini Notes:</span> {miniNotes} */}
              </p>
            </div>

            <div className="text-xs text-gray-400">
              {/* <span>Date: {Date}</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
