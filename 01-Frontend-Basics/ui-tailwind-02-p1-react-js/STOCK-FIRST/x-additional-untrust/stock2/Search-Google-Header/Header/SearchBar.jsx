'use client';

import { useState } from 'react';
import { searchData } from './data';
import Link from 'next/link';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const filtered = searchData.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />
      <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-sm">
        🔍
      </span>

      {query && (
        <ul className="absolute w-full bg-white border border-t-0 shadow-lg rounded-b-lg z-10 max-h-72 overflow-y-auto mt-1">
          {filtered.length > 0 ? (
            filtered.map(item => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  {item.icon ? (
                    <img src={item.icon} alt={item.title} className="w-5 h-5" />
                  ) : (
                    <span className="text-gray-500">🔍</span>
                  )}
                  <div>
                    <div className="font-medium">{item.title}</div>
                    {item.subtitle && (
                      <div className="text-gray-500 text-xs">{item.subtitle}</div>
                    )}
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500 text-sm">No results found.</li>
          )}
        </ul>
      )}
    </div>
  );
}
