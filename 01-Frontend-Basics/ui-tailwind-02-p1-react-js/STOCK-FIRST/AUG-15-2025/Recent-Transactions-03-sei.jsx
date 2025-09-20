import React from 'react';

const transactions = [
  { name: 'Spotify Premium', amount: '-$9.99', time: '2 hours ago', category: 'Music' },
  { name: 'Freelance Payment', amount: '+$1,250.00', time: '5 hours ago', category: 'Work' },
  { name: 'Coffee Shop', amount: '-$5.50', time: '8 hours ago', category: 'Food' },
  { name: 'Fiverr Payment', amount: '+$1,500.00', time: '1 day ago', category: 'Freelance' },
  { name: 'Netflix Subscription', amount: '-$12.99', time: '3 days ago', category: 'Entertainment' },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="flex justify-between items-center p-6 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-t-3xl">
          <div>
            <p className="text-xl font-medium">Welcome back</p>
            <h1 className="text-3xl font-semibold">Eleanor Pinas</h1>
          </div>
          <div className="flex items-center">
            <div className="text-center mr-6">
              <p className="text-lg font-medium">Available Balance</p>
              <h2 className="text-4xl font-bold">$80,000.00</h2>
            </div>
            <div className="bg-white text-green-600 p-4 rounded-full shadow-md">
              <p className="font-semibold">VISA</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-6">
          {/* Action Buttons */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <button className="mb-4 p-4 w-full bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200">
              Send
            </button>
            <button className="mb-4 p-4 w-full bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200">
              Receive
            </button>
            <button className="mb-4 p-4 w-full bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200">
              Top Up
            </button>
            <button className="p-4 w-full bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200">
              Swap
            </button>
          </div>

          {/* Recent Transactions Section */}
          <div className="col-span-3 bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
            <div className="space-y-4">
              {transactions.map((transaction, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b">
                  <div>
                    <p className="font-medium">{transaction.name}</p>
                    <p className="text-sm text-gray-500">{transaction.category} - {transaction.time}</p>
                  </div>
                  <p className={`font-semibold ${transaction.amount[0] === '-' ? 'text-red-500' : 'text-green-500'}`}>
                    {transaction.amount}
                  </p>
                </div>
              ))}
            </div>
            <button className="mt-4 text-green-600 font-semibold hover:underline transition duration-200 ease-in-out">
              View All
            </button>
          </div>
        </div>

        {/* Quick Links & Notifications Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Links</h2>
          <div className="space-y-4">
            <button className="w-full text-left text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200">
              Transaction History
            </button>
            <button className="w-full text-left text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200">
              Add Card
            </button>
            <button className="w-full text-left text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200">
              Settings
            </button>
            <button className="w-full text-left text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200">
              Support
            </button>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="flex justify-around items-center bg-green-600 p-4 rounded-2xl mt-8">
          <button className="text-white font-semibold hover:bg-green-700 p-4 rounded-full">
            <i className="fas fa-home"></i> Home
          </button>
          <button className="text-white font-semibold hover:bg-green-700 p-4 rounded-full">
            <i className="fas fa-search"></i> Scan
          </button>
          <button className="text-white font-semibold hover:bg-green-700 p-4 rounded-full">
            <i className="fas fa-exchange-alt"></i> Swap
          </button>
          <button className="text-white font-semibold hover:bg-green-700 p-4 rounded-full">
            <i className="fas fa-user"></i> Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
