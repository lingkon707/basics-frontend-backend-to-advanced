import React, { useState } from 'react';

const transactions = [
  { name: 'YouTube Premium', amount: '-$11.99', time: '1 hour ago', category: 'Subscription' },
  { name: 'Upwork Payout', amount: '+$980.00', time: '3 hours ago', category: 'Freelance' },
  { name: 'Burger House', amount: '-$14.25', time: '6 hours ago', category: 'Food' },
  { name: 'PayPal Transfer', amount: '+$2,100.00', time: '2 days ago', category: 'Business' },
  { name: 'Amazon Purchase', amount: '-$45.60', time: '4 days ago', category: 'Shopping' },
];

const Dashboard = () => {
  const [showQuickActions, setShowQuickActions] = useState(false);

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
          {/* Clickable Header */}
          <div
            className="w-full cursor-pointer flex justify-between items-center bg-gradient-to-r bg-green-600 text-white font-semibold text-lg px-5 py-4 rounded-xl shadow-lg hover:bg-green-100 active:scale-95 transition-all duration-200"
            onClick={() => setShowQuickActions(!showQuickActions)}
          >
            <h2 className="text-2xl font-semibold text-gray-800">Quick Actions - Click Here</h2>


            <i
              className={`fas fa-chevron-${showQuickActions ? 'up' : 'down'} text-gray-500`}
            ></i>
          </div>

          {/* Sub-section appears only if clicked */}
          {showQuickActions && (
            <div className="space-y-4 mt-4">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
