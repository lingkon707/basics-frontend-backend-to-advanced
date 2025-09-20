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
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Head>
        <title>Premium UI</title>
      </Head>

      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-6 px-8">
        <div className="flex justify-between items-center container mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold text-white tracking-wide">
            <span className="text-indigo-200">My</span>Company
          </div>

          {/* Navigation */}
          <nav className="space-x-8 text-white font-medium">
            <a href="#" className="hover:text-indigo-200 transition">Features</a>
            <a href="#" className="hover:text-indigo-200 transition">Products</a>
            <a href="#" className="hover:text-indigo-200 transition">Blog</a>
            <a href="#" className="hover:text-indigo-200 transition">Pricing</a>
            <a href="#" className="hover:text-indigo-200 transition">Docs</a>
          </nav>
        </div>
      </header>

      {/* Search Bar Section */}
      <div className="mt-12 w-full md:w-1/2 mx-auto">
        <input
          type="text"
          className="border border-gray-300 p-4 text-lg rounded-lg w-full focus:ring-4 focus:ring-indigo-500 transition duration-300"
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
