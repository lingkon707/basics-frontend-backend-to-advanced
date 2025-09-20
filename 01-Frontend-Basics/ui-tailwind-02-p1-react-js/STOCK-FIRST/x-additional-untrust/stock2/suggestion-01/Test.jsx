import { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import SuggestionList component (client-side only)
const SuggestionList = dynamic(() => import('./SuggestionList'), { ssr: false });

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // All possible routes for suggestions
  const allRoutes = ['product', 'contact', 'blog', 'pricing', 'faq', 'docs'];

  // Handle the input change event and filter the allRoutes array based on the input value
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // If the input has a value, filter allRoutes to show suggestions, otherwise clear suggestions
    if (value) {
      setSuggestions(
        allRoutes.filter(route => route.includes(value.toLowerCase()))
      );
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <Head>
        <title>Simple Input Box</title>
      </Head>

      <header className="bg-white border-b border-gray-200 px-6 py-4 w-full md:w-1/3">
        <div className="text-xl font-semibold text-indigo-600 mb-4">
          Untitled UI
        </div>

        <input
          type="text"
          className="border border-gray-300 p-2 text-sm rounded-lg w-full focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Search..."
          value={inputValue}
          onChange={handleInputChange}
        />

        {/* Passing suggestions to dynamically loaded SuggestionList component */}
        {suggestions.length > 0 && (
          <SuggestionList
            suggestions={suggestions}
            handleSuggestionClick={(suggestion) => {
              window.location.href = `/${suggestion}`;
              setInputValue('');
              setSuggestions([]); // Clear suggestions after navigating
            }}
          />
        )}
      </header>
    </div>
  );
}
