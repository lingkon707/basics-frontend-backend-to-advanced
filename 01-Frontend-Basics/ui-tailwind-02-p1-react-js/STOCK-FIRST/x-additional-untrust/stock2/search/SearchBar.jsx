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
    <div className="w-full max-w-xl mx-auto mt-20 relative">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search"
        className="w-full pl-12 pr-4 py-3 text-lg border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
        🔍
      </span>

      {query && (
        <ul className="absolute w-full bg-white border border-t-0 border-gray-200 shadow-lg rounded-b-xl max-h-80 overflow-y-auto z-10">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  {item.icon ? (
                    <img src={item.icon} alt={item.title} className="w-6 h-6" />
                  ) : (
                    <span className="text-gray-500">🔍</span>
                  )}
                  <div className="text-sm">
                    <div className="font-medium">{item.title}</div>
                    {item.subtitle && (
                      <div className="text-gray-500 text-xs">{item.subtitle}</div>
                    )}
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li className="px-4 py-3 text-gray-500">No results found.</li>
          )}
        </ul>
      )}
    </div>
  );
}
