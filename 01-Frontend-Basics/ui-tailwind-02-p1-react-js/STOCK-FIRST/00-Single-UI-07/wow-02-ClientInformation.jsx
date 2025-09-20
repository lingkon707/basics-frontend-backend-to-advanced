import React from 'react';
import { FaFilter, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
// npm install react-icons


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
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 p-6">
      <div className="bg-white shadow-2xl rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Client Information</h2>

        {/* Filter and Action Buttons */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search by Name"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Search by Reference"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Search by Portfolio Value"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Action Button - Add Client */}
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition duration-300"
          >
            <FaPlus />
            <span>Add Client</span>
          </button>
        </div>

        {/* Client Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-sm font-semibold">Reference Number</th>
                <th className="px-6 py-3 text-sm font-semibold">Customer Since</th>
                <th className="px-6 py-3 text-sm font-semibold">Active Portfolio</th>
                <th className="px-6 py-3 text-sm font-semibold">Portfolio Value ($)</th>
                <th className="px-6 py-3 text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-gray-100 transition duration-300`}
                >
                  <td className="px-6 py-3 text-sm text-gray-800">{client.name}</td>
                  <td className="px-6 py-3 text-sm text-gray-800">{client.reference}</td>
                  <td className="px-6 py-3 text-sm text-gray-800">{client.customerSince}</td>
                  <td className="px-6 py-3 text-sm text-gray-800">{client.activePortfolio}</td>
                  <td className="px-6 py-3 text-sm text-gray-800">{client.portfolioValue}</td>
                  <td className="px-6 py-3 text-sm">
                    <div className="flex space-x-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FaEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
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
