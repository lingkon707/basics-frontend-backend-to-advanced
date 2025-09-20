import React, { useState } from 'react';
import data from './Senteces.json';

export default function SentenceCard() {
  // Extract unique dates from the data and sort them in descending order (most recent first)
  const uniqueDates = [...new Set(data.map(item => item.Date))].sort((a, b) => new Date(b) - new Date(a));

  const [selectedDate, setSelectedDate] = useState('');
  const [sortOrder, setSortOrder] = useState('new-to-old'); // Default to 'New to Old'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Slice the data based on the current page
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            New
          </button>
          <button
            onClick={() => setSortOrder('old-to-new')}
            className="text-white px-4 py-2 rounded-md bg-red-600 hover:bg-red-700"
          >
            Old
          </button>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2 disabled:bg-gray-500"
        >
          Previous
        </button>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2 disabled:bg-gray-500"
        >
          Next
        </button>
      </div>
      <br />

      {/* Display filtered and sorted data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedData.map(({ id, General, Advance, Date, "mini-notes": miniNotes }) => (
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
