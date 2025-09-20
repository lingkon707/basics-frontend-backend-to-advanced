'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import content from '@/app/content.json';
import { slugify } from '@/app/utils/slugify';
import Button from './Button';

export default function AllPersonSection() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(content.persons || []);

  // Auto-search when search changes
  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleSearch = () => {
    const trimmedSearch = search.trim();
    if (trimmedSearch === '') {
      setFilteredPersons(content.persons || []);
      return;
    }
    const filtered = content.persons.filter((person) =>
      person.RoomNumber.toString().includes(trimmedSearch)
    );
    setFilteredPersons(filtered);
  };

  const handleClear = () => {
    setSearch('');
    setFilteredPersons(content.persons || []);
  };

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">
        All Persons
      </h2>

      {/* Search input + buttons */}
      <div className="flex justify-center mb-8 gap-2">
        <input
          type="text"
          placeholder="Search by Room Number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-indigo-600 w-48"
        />
        <Button onClick={handleSearch}>Search</Button>
        {search && (
          <Button onClick={handleClear} className="bg-gray-400 hover:bg-gray-500">
            Clear
          </Button>
        )}
      </div>

      {/* Person list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPersons.map((person, idx) => (
          <div
            key={idx}
            className="flex items-center h-[40px] w-full bg-white rounded shadow px-3"
            style={{ borderBottom: '1px solid #ddd' }}
          >
            <img
              src={person.Photo}
              alt={person.Name}
              className="w-8 h-8 rounded-full object-cover mr-3"
            />

            <div
              className="flex-1 text-indigo-900 font-medium truncate"
              title={person.Name}
            >
              {person.Name}
            </div>

            <div className="w-20 text-center text-gray-700 font-semibold">
              {person.RoomNumber}
            </div>

            <Button
              onClick={() => router.push(`/person/${slugify(person.Name)}`)}
              className="ml-4"
            >
              Details
            </Button>
          </div>
        ))}

        {filteredPersons.length === 0 && (
          <p className="col-span-full text-center text-gray-500 mt-10">
            No persons found for Room Number "{search}"
          </p>
        )}
      </div>
    </div>
  );
}
