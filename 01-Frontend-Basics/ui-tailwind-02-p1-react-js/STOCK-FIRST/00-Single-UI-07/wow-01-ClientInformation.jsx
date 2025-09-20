import React from 'react';

const ClientInformation = () => {
  const clients = [
    {
      name: 'Brandon Stanley',
      reference: 'XXXX00900',
      customerSince: '04/09/1997',
      activePortfolio: 20,
      portfolioValue: '20,00,000',
    },
    {
      name: 'Victoria Porter',
      reference: 'XXXX00900',
      customerSince: '17/10/1964',
      activePortfolio: 20,
      portfolioValue: '20,00,000',
    },
    {
      name: 'Roy Porter',
      reference: 'XXXX00900',
      customerSince: '27/11/2002',
      activePortfolio: 20,
      portfolioValue: '20,00,000',
    },
    {
      name: 'Fionna Carrol',
      reference: 'XXXX00900',
      customerSince: '05/07/2000',
      activePortfolio: 20,
      portfolioValue: '20,00,000',
    },
    {
      name: 'Natasha Clark',
      reference: 'XXXX00900',
      customerSince: '08/05/1961',
      activePortfolio: 20,
      portfolioValue: '20,00,000',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-blue-50 p-6">
      <div className="bg-white shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Client Information</h2>

        {/* Filter Inputs */}
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search by Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Search by Reference Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Search by Portfolio Value"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Client Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2 text-sm font-semibold text-gray-700">Name</th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-700">Reference Number</th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-700">Customer Since</th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-700">Number of Active Portfolio</th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-700">Portfolio Value ($)</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="px-4 py-3 text-sm text-gray-800">{client.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{client.reference}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{client.customerSince}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{client.activePortfolio}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{client.portfolioValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientInformation;
