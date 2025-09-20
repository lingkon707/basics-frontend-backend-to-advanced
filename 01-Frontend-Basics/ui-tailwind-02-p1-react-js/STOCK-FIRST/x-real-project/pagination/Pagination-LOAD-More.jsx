import React, { useState, useEffect } from 'react';

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
  const [currentItems, setCurrentItems] = useState(names.slice(0, itemsPerPage));
  const [isLastPage, setIsLastPage] = useState(false); // Flag to check if the last page is reached

  // Scroll handler for infinite scroll
  const handleScroll = () => {
    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
    if (bottom && !isLastPage) {
      loadMoreItems();
    }
  };

  // Load more items when scrolling reaches the bottom
  const loadMoreItems = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
      setCurrentPage(nextPage);
      const nextItems = names.slice(nextPage * itemsPerPage - itemsPerPage, nextPage * itemsPerPage);
      setCurrentItems((prevItems) => [...prevItems, ...nextItems]);
    } else {
      setIsLastPage(true);
    }
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, isLastPage]);

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 min-h-screen p-10 flex justify-center items-center">
      <div className="w-full max-w-6xl p-6 bg-white rounded-3xl shadow-xl flex flex-col justify-between h-full">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Pakistani Names Gallery
        </h1>

        {/* Name Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-auto">
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
        {!isLastPage && (
          <div className="flex justify-center space-x-6 mt-8">
            <button
              onClick={loadMoreItems}
              className="px-6 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 text-white shadow-xl transition duration-300 hover:scale-110"
            >
              Load More
            </button>
          </div>
        )}

        {/* Show "No More Items" message when last page is reached */}
        {isLastPage && (
          <div className="flex justify-center mt-8">
            <span className="text-white text-lg font-semibold">You've reached the end!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
