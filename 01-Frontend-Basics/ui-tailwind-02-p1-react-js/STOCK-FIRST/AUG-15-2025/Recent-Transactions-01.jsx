import React from 'react';

const transactions = [
  { name: 'Spotify Premium', amount: '-$9.99', time: '2 hours ago' },
  { name: 'Freelance Payment', amount: '+$1,250.00', time: '5 hours ago' },
  { name: 'Coffee Shop', amount: '-$5.50', time: '8 hours ago' },
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
        <div className="grid grid-cols-4 gap-6 p-6 bg-gray-100 rounded-lg">
          <div className="flex flex-col items-center bg-green-500 text-white p-4 rounded-lg shadow-lg">
            <button className="mb-4 p-3 bg-green-600 rounded-full">Send</button>
            <button className="mb-4 p-3 bg-green-600 rounded-full">Receive</button>
            <button className="mb-4 p-3 bg-green-600 rounded-full">Top Up</button>
            <button className="p-3 bg-green-600 rounded-full">Swap</button>
          </div>

          {/* Recent Transactions Section */}
          <div className="col-span-3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Transactions</h2>
            {transactions.map((transaction, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b">
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-gray-500">{transaction.time}</p>
                </div>
                <p className={`font-semibold ${transaction.amount[0] === '-' ? 'text-red-500' : 'text-green-500'}`}>
                  {transaction.amount}
                </p>
              </div>
            ))}
            <button className="text-green-500 mt-4 font-semibold hover:underline">View All</button>
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
