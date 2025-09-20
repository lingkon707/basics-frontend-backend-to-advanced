import { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import SuggestionList component (client-side only)
const SuggestionList = dynamic(() => import('./SuggestionList'), { ssr: false });

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const allRoutes = ['product', 'contact', 'blog', 'pricing', 'faq', 'docs'];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      setSuggestions(
        allRoutes.filter(route => route.includes(value.toLowerCase()))
      );
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Clean UI</title>
      </Head>

      {/* Header Section */}
      <header className="bg-white shadow-lg py-4 px-6">
        <div className="flex justify-between items-center container mx-auto">
          <div className="text-2xl font-bold text-indigo-600">
            MyWebsite
          </div>
          <nav className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Products</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Blog</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Docs</a>
          </nav>
        </div>
      </header>

      {/* Search Bar Section */}
      <div className="mt-12 w-full md:w-1/2 mx-auto">
        <input
          type="text"
          className="border border-gray-300 p-3 text-sm rounded-lg w-full focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Search..."
          value={inputValue}
          onChange={handleInputChange}
        />

        {/* Suggestion List Below the Input */}
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
      </div>
    </div>
  );
}
