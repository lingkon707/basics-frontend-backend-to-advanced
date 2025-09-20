import React from 'react';

const transactions = [
  { name: 'Spotify Premium', amount: '-$9.99', time: '2 hours ago', category: 'Music streaming' },
  { name: 'Freelance Payment', amount: '+$1,250.00', time: '5 hours ago', category: 'Design work' },
  { name: 'Coffee Shop', amount: '-$5.50', time: '8 hours ago', category: 'Daily caffeine fix' },
  { name: 'Fiverr Payment', amount: '+$1,500.00', time: '1 day ago', category: 'Freelance' },
  { name: 'Netflix Subscription', amount: '-$12.99', time: '3 days ago', category: 'Entertainment' },
];

const Dashboard = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-green-600 min-h-screen p-10">
      <div className="container mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="flex items-center justify-between p-6 bg-green-600 text-white">
          <div>
            <p className="text-xl font-bold">Welcome back</p>
            <h1 className="text-3xl font-semibold">Eleanor Pinas</h1>
          </div>
          <div className="flex items-center">
            <div className="text-center">
              <p className="text-xl font-bold">Available Balance</p>
              <h2 className="text-4xl font-extrabold">$80,000.00</h2>
            </div>
            <div className="ml-6 p-4 rounded-full bg-white text-green-600 shadow-md">
              <p className="font-semibold">VISA</p>
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-5 gap-6 p-6 bg-gray-100 rounded-lg">
          <div className="flex flex-col items-center bg-green-500 text-white p-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-200">
            <button className="mb-4 p-3 bg-green-600 rounded-full hover:bg-green-700 transition duration-200">Send</button>
            <button className="mb-4 p-3 bg-green-600 rounded-full hover:bg-green-700 transition duration-200">Receive</button>
            <button className="mb-4 p-3 bg-green-600 rounded-full hover:bg-green-700 transition duration-200">Top Up</button>
            <button className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition duration-200">Swap</button>
          </div>

          {/* Account Info Section */}
          <div className="col-span-3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Transactions</h2>
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
            <button className="text-green-500 mt-4 font-semibold hover:underline transition duration-200 ease-in-out">View All</button>
          </div>

          {/* Right Section - Quick Links & Notifications */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Links</h2>
            <div className="space-y-3">
              <button className="w-full text-left text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200">Transaction History</button>
              <button className="w-full text-left text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200">Add Card</button>
              <button className="w-full text-left text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200">Settings</button>
              <button className="w-full text-left text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200">Support</button>
            </div>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="flex justify-around bg-green-600 p-4 rounded-lg mt-6">
          <button className="text-white font-semibold hover:bg-green-700 p-3 rounded-lg">
            <i className="fas fa-home"></i> Home
          </button>
          <button className="text-white font-semibold hover:bg-green-700 p-3 rounded-lg">
            <i className="fas fa-search"></i> Scan
          </button>
          <button className="text-white font-semibold hover:bg-green-700 p-3 rounded-lg">
            <i className="fas fa-exchange-alt"></i> Swap
          </button>
          <button className="text-white font-semibold hover:bg-green-700 p-3 rounded-lg">
            <i className="fas fa-user"></i> Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
