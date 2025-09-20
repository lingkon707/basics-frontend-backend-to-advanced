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
    <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 min-h-screen p-10 flex justify-center items-center">
      <div className="w-full max-w-6xl p-6 bg-white rounded-3xl shadow-xl">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Pakistani Names Gallery
        </h1>

        {/* Name Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {currentItems.map((name, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-30 backdrop-blur-lg text-black p-6 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-center">{name}</h3>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-6 mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition duration-300 transform ${
                currentPage === i + 1
                  ? 'bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 text-white shadow-xl'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-600'
              } neumorphism-effect`}
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
