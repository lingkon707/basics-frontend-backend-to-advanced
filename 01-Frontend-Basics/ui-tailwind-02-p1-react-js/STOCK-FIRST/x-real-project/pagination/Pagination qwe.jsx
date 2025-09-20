import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const totalPages = 10; // Example: total number of pages
  const totalResults = 96; // Example: total results available

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleResultsChange = (e) => {
    setResultsPerPage(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Pagination */}
      <div className="flex items-center space-x-4 mt-6">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          <span className="text-lg">&lt;</span>
        </button>

        {/* Page Number 1 */}
        <button
          onClick={() => handlePageChange(1)}
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          1
        </button>

        {/* Page Number 2 */}
        <button
          onClick={() => handlePageChange(2)}
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${currentPage === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          2
        </button>

        {/* Page Number 3 */}
        <button
          onClick={() => handlePageChange(3)}
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${currentPage === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          3
        </button>

        {/* Ellipsis for more pages */}
        <button
          onClick={() => handlePageChange(totalPages)}
          className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-200 hover:bg-gray-300"
        >
          ...
        </button>

        {/* Page Number 10 */}
        <button
          onClick={() => handlePageChange(totalPages)}
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {totalPages}
        </button>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          <span className="text-lg">&gt;</span>
        </button>
      </div>

      {/* Results per page dropdown */}
      <div className="mt-4">
        <span>Results: {((currentPage - 1) * resultsPerPage) + 1} - {Math.min(currentPage * resultsPerPage, totalResults)} of {totalResults}</span>
        <select
          value={resultsPerPage}
          onChange={handleResultsChange}
          className="ml-4 p-2 bg-gray-200 border border-gray-300 rounded-md"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
