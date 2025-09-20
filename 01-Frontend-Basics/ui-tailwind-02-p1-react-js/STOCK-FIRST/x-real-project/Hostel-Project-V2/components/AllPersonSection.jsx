'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import content from '@/app/content.json';
import { slugify } from '@/app/utils/slugify';
import { X, Search } from 'lucide-react'; // For icons

export default function AllPersonSection() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(content.persons || []);

  // Auto-search when typing
  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleSearch = () => {
    const trimmed = search.trim();
    if (!trimmed) {
      setFilteredPersons(content.persons || []);
      return;
    }
    setFilteredPersons(
      content.persons.filter((p) =>
        p.RoomNumber.toString().includes(trimmed)
      )
    );
  };

  const handleClear = () => {
    setSearch('');
    setFilteredPersons(content.persons || []);
  };

  return (
    <div className="px-4 sm:px-8 py-10 max-w-4xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-indigo-900 mb-10">
        🏠  Hostel Member Bio
      </h2>

      {/* Search bar */}
      <div className="relative flex items-center mb-12 w-full max-w-lg mx-auto">
        <Search className="absolute left-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search by Room Number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-full pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
        />
        {search && (
          <button
            onClick={handleClear}
            className="absolute right-3 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Person cards */}
      <div className="flex flex-col gap-6">
        {filteredPersons.map((person, idx) => (
          <div
            key={idx}
            className="flex items-center p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => router.push(`/person/${slugify(person.Name)}`)}
          >
            {/* Photo */}
            <img
              src={person.Photo}
              alt={person.Name}
              className="w-20 h-20 rounded-full object-cover border-4 border-indigo-200 shadow-sm"
            />

            {/* Info */}
            <div className="ml-6 flex-1">
              <h3 className="text-xl font-bold text-indigo-900">{person.Name}</h3>
              <p className="text-gray-600 text-sm">Room: {person.RoomNumber}</p>
              {person.District && (
                <p className="text-gray-500 text-sm">District: {person.District}</p>
              )}
            </div>

            {/* Details Button */}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
              Details →
            </button>
          </div>
        ))}

        {/* No results */}
        {filteredPersons.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No persons found for Room Number "{search}"
          </p>
        )}
      </div>
    </div>
  );
}
