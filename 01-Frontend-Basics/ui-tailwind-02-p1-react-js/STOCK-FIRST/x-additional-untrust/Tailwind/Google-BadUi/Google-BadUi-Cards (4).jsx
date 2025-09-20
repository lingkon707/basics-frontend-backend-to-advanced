import React from 'react';

const cardData = [
  {
    name: 'A23 Digital',
    location: 'Brazil',
    certifications: ['Search', 'Display', 'Shopping', 'Apps'],
  },
  {
    name: 'A&A Group',
    location: 'United States',
    certifications: ['Search', 'Display', 'Video', 'Shopping', 'Apps'],
  },
  {
    name: 'AAMP Agency',
    location: 'United States',
    certifications: ['Search', 'Display'],
  },
  {
    name: 'ABCW',
    location: 'Mexico',
    certifications: ['Search', 'Video', 'Apps'],
  },
];

function Card({ name, location, certifications }) {
  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 flex items-center mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 11l-7-7-7 7"
            />
          </svg>
          {location}
        </p>
        <div className="mt-3">
          <button
            onClick={() => alert('More info on Certifications')}
            className="text-blue-600 text-sm font-semibold hover:text-blue-800 focus:outline-none"
          >
            Certifications
          </button>
          <div className="flex flex-wrap mt-2">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 text-xs font-semibold py-1 px-2 rounded-full mr-2 mt-2"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white text-center py-2 mt-auto">
        PREMIER 2025
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-screen-xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              location={card.location}
              certifications={card.certifications}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
