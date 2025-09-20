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
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen p-10">
      <div className="container mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-white mb-6">
          Fancy Pakistani Names
        </h1>

        {/* Name Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {currentItems.map((name, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-teal-500 to-green-500 text-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold">{name}</h3>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-4 mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-5 py-3 rounded-full text-lg font-semibold transition duration-300 transform ${
                currentPage === i + 1
                  ? 'bg-yellow-400 text-white shadow-lg hover:scale-110'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
