import React, { useState } from 'react';

const Pagination = () => {
  // Define the list of Pakistani names
  const names = [
    'Ahmed', 'Ali', 'Bilal', 'Fatima', 'Sara', 'Zain', 'Omar', 'Ayesha', 
    'Hassan', 'Muneeb', 'Mahira', 'Imran', 'Asma', 'Nadia', 'Fahad', 'Kiran',
    'Mariam', 'Nashit', 'Sana', 'Hina', 'Junaid', 'Rehan', 'Arslan', 'Rania',
    'Tariq', 'Bushra', 'Noor', 'Usman', 'Adeel', 'Anum', 'Shoaib'
  ];

  const itemsPerPage = 5; // Display 5 names per page
  const totalPages = Math.ceil(names.length / itemsPerPage); // Calculate total pages

  // Set up state for current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = names.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container mx-auto p-4">
      {/* Display names */}
      <div className="grid grid-cols-5 gap-4 mb-4">
        {currentItems.map((name, index) => (
          <div key={index} className="text-center bg-gray-200 p-4 rounded-lg">
            {name}
          </div>
        ))}
      </div>

      {/* Page numbers */}
      <div className="flex justify-center space-x-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === i + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-black'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
