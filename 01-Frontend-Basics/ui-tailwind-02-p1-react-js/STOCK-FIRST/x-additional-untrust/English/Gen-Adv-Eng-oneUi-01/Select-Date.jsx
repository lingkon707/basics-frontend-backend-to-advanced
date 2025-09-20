"use client"
import React, { useState } from 'react';
import data from './Select.json';

export default function SentenceCard() {
  // Extract unique dates from the data
  const uniqueDates = [...new Set(data.map(item => item.Date))];

  const [selectedDate, setSelectedDate] = useState('');

  // Filter the data based on the selected date
  const filteredData = selectedDate
    ? data.filter(item => item.Date === selectedDate)
    : data;

  return (
    <div className="min-h-screen bg-gradient-to-br bg-black  p-10">
      {/* Date filter dropdown */}
      <div className="mb-6 bg-blue-900 p-5">
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

      {/* Display filtered data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map(({ id, General, Advance, Date, "mini-notes": miniNotes }) => (
          <div
            key={id}
            className="bg-white rounded-lg p-4 shadow-md"
          >
            <div className="text-xs text-gray-500 mb-3">
              <span className="font-mono">No: {id}</span>
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

