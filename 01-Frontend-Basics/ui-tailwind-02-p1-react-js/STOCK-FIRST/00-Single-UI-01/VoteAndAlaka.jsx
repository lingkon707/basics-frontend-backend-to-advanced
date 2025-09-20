import React, { useState } from 'react';

const citizens = [
  {
    id: 1,
    name: 'Ravi Sharma',
    constituency: 'North District',
    age: 34,
    voterId: 'VOT123456',
    address: '123 Maple Road, Zone A',
  },
  {
    id: 2,
    name: 'Anita Gupta',
    constituency: 'East District',
    age: 29,
    voterId: 'VOT654321',
    address: '456 Oak Street, Zone B',
  },
  // Add more citizen records here...
];

const constituencies = ['All', 'North District', 'East District', 'South District', 'West District'];

const CitizenSearchCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConstituency, setSelectedConstituency] = useState('All');
  const [selectedCitizen, setSelectedCitizen] = useState(null);

  const filteredList = citizens.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.voterId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesConstituency =
      selectedConstituency === 'All' || c.constituency === selectedConstituency;
    return matchesSearch && matchesConstituency;
  });

  return (
    <div className="font-sans text-gray-800">
    

      {/* Search & Filter */}
      <section className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name or voter ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-4 py-2 w-full md:w-2/3"
            aria-label="Search citizens"
          />
          <select
            value={selectedConstituency}
            onChange={(e) => setSelectedConstituency(e.target.value)}
            className="border rounded px-4 py-2 w-full md:w-1/3"
            aria-label="Filter by constituency"
          >
            {constituencies.map((con) => (
              <option key={con}>{con}</option>
            ))}
          </select>
        </div>

        {/* Citizen Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredList.map((citizen) => (
            <div
              key={citizen.id}
              className="border rounded-lg hover:shadow-lg transition p-4 cursor-pointer"
              onClick={() => setSelectedCitizen(citizen)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedCitizen(citizen)}
            >
              <h3 className="text-xl font-semibold">{citizen.name}</h3>
              <p className="text-gray-600">Voter ID: {citizen.voterId}</p>
              <p className="text-gray-600">Constituency: {citizen.constituency}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Details */}
      {selectedCitizen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative shadow-lg">
            <button
              onClick={() => setSelectedCitizen(null)}
              className="absolute top-2 right-2 text-gray-700 text-xl hover:text-red-600"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedCitizen.name}</h2>
            <p>
              <strong>Voter ID:</strong> {selectedCitizen.voterId}
            </p>
            <p>
              <strong>Constituency:</strong> {selectedCitizen.constituency}
            </p>
            <p>
              <strong>Age:</strong> {selectedCitizen.age}
            </p>
            <p>
              <strong>Address:</strong> {selectedCitizen.address}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CitizenSearchCatalog;
