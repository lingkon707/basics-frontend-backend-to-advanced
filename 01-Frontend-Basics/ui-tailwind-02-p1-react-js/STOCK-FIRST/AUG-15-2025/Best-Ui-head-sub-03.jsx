import React, { useState } from 'react';



const Dashboard = () => {
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [openSub, setOpenSub] = useState(null); // Track which sub-item is open

  const toggleSub = (name) => {
    setOpenSub(openSub === name ? null : name);
  };

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
            className="w-full cursor-pointer flex justify-between items-center bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg px-5 py-4 rounded-xl shadow-lg hover:from-green-600 hover:to-green-700 active:scale-95 transition-all duration-200"
            onClick={() => setShowQuickActions(!showQuickActions)}
          >
            <h2 className="text-2xl font-semibold">Quick Actions - Click Here</h2>
            <i className={`fas fa-chevron-${showQuickActions ? 'up' : 'down'}`}></i>
          </div>

          {/* Sub-section appears only if clicked */}
          {showQuickActions && (
            <div className="space-y-4 mt-4">

              {/* View All Transactions */}
              <div>
                <button
                  onClick={() => toggleSub('transactions')}
                  className="w-full flex justify-between items-center text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200"
                >
                  View All Transactions (click Here)
                  <i className={`fas fa-chevron-${openSub === 'transactions' ? 'up' : 'down'} text-gray-500`}></i>
                </button>
                {openSub === 'transactions' && (
                  <div className="ml-5 mt-2 space-y-2 text-gray-600">
                    <p>- Last 7 days</p>
                    <p>- This Month</p>
                    <p>- Custom Date Range</p>
                  </div>
                )}
              </div>

              {/* Link New Bank */}
              <div>
                <button
                  onClick={() => toggleSub('bank')}
                  className="w-full flex justify-between items-center text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200"
                >
                  Link New Bank
                  <i className={`fas fa-chevron-${openSub === 'bank' ? 'up' : 'down'} text-gray-500`}></i>
                </button>
                {openSub === 'bank' && (
                  <div className="ml-5 mt-2 space-y-2 text-gray-600">
                    <p>- Link via Account Number</p>
                    <p>- Link via Card</p>
                    <p>- International Bank Link</p>
                  </div>
                )}
              </div>

              {/* Manage Notifications (no sub-data) */}
              <button className="w-full text-left text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200">
                Manage Notifications
              </button>

              {/* Help & Support */}
              <div>
                <button
                  onClick={() => toggleSub('help')}
                  className="w-full flex justify-between items-center text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200"
                >
                  Help & Support
                  <i className={`fas fa-chevron-${openSub === 'help' ? 'up' : 'down'} text-gray-500`}></i>
                </button>
                {openSub === 'help' && (
                  <div className="ml-5 mt-2 space-y-2 text-gray-600">
                    <p>- Contact Us</p>
                    <p>- FAQs</p>
                    <p>- Live Chat Support</p>
                  </div>
                )}
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
