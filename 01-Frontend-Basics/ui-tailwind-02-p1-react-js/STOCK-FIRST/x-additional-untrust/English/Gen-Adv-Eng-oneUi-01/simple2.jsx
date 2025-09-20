import React from 'react';
import data from './Simple.json'; // Import JSON directly

export default function SentenceCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(({ id, General, Advance }) => (
          <div
            key={id}
            className="bg-white rounded-lg p-4 shadow-md"
          >
            <div className="text-xs text-gray-500 mb-3">
              <span className="font-mono">No: {id}</span>
            </div>

            <div className="mb-3">
              <p className="text-base font-semibold text-gray-800">
                <span className="text-blue-600">General:</span> {General}
              </p>
            </div>

            <div>
              <p className="text-base font-semibold text-gray-800">
                <span className="text-green-600">Advance:</span> {Advance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
