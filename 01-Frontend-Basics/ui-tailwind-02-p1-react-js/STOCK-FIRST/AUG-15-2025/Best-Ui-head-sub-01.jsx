import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Navigation Bar */}
        <div className="flex justify-around items-center bg-blue-600 p-4 rounded-2xl mt-8">
          <button className="text-white font-semibold hover:bg-blue-700 p-4 rounded-full">
            <i className="fas fa-home"></i> Dashboard
          </button>
          <button className="text-white font-semibold hover:bg-blue-700 p-4 rounded-full">
            <i className="fas fa-search"></i> Search
          </button>
          <button className="text-white font-semibold hover:bg-blue-700 p-4 rounded-full">
            <i className="fas fa-exchange-alt"></i> Transfer
          </button>
          <button className="text-white font-semibold hover:bg-blue-700 p-4 rounded-full">
            <i className="fas fa-user"></i> Account
          </button>
        </div>

        {/* Quick Actions Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full text-left text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200">
              View All Transactions
            </button>
            <button className="w-full text-left text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200">
              Link New Bank
            </button>
            <button className="w-full text-left text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200">
              Manage Notifications
            </button>
            <button className="w-full text-left text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200">
              Help & Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
