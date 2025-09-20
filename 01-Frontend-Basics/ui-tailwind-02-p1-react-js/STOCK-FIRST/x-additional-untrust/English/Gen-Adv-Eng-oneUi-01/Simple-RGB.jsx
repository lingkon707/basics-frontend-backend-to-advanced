// File: src/components/SentenceCard.jsx
import React from 'react';
import data from './Simple.json'; // Import JSON directly

export default function SentenceCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-black p-10 text-white">
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map(({ id, General, Advance }) => (
          <div
            key={id}
            className="relative bg-gradient-to-tr from-indigo-500 to-purple-700 rounded-3xl p-8 shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute top-4 right-4 text-sm text-white/60 font-mono">
              No: {id}
            </div>

            <p className="text-lg font-light text-white/90 mb-2">
              <span className="font-semibold text-pink-300">General:</span> {General}
            </p>

            <p className="text-lg font-light text-white/90">
              <span className="font-semibold text-teal-300">Advance:</span> {Advance}
            </p>

            
          </div>
        ))}
      </div>
    </div>
  );
}
