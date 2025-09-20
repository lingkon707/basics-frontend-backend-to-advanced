import React from 'react';

const SuggestionList = ({ suggestions, handleSuggestionClick }) => {
  return (
    <ul className="absolute mt-1 w-auto max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg z-10">
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          className="px-6 py-4 text-lg text-gray-800 cursor-pointer hover:bg-indigo-600 hover:text-white rounded-md transition duration-300 ease-in-out"
          onClick={() => handleSuggestionClick(suggestion)}
        >
          /{suggestion}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionList;
