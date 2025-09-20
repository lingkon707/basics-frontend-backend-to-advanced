import React from 'react';

const SuggestionList = ({ suggestions, handleSuggestionClick }) => {
  return (
    <ul className="absolute mt-1 max-h-60 overflow-y-auto border border-gray-200 rounded-md shadow-lg z-10">
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-indigo-600 hover:text-white rounded-md transition duration-200"
          onClick={() => handleSuggestionClick(suggestion)}
        >
          /{suggestion}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionList;
