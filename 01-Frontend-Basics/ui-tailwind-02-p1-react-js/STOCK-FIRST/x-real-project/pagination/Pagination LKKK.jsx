import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 3;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-6">
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
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${currentPage === 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
      >
        1
      </button>

      {/* Page Number 2 */}
      <button 
        onClick={() => handlePageChange(2)}
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${currentPage === 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
      >
        2
      </button>

      {/* Page Number 3 */}
      <button 
        onClick={() => handlePageChange(3)}
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${currentPage === 3 ? 'bg-orange-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
      >
        3
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
  );
};

export default Pagination;
