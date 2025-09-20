import React, { useState } from 'react';

const quickActionsData = [
  {
    title: 'View All Transactions',
    subItems: ['Last 7 days', 'This Month', 'Custom Date Range'],
  },
  {
    title: 'Link New Bank',
    subItems: ['Link via Account Number', 'Link via Card', 'International Bank Link'],
  },
  {
    title: 'Manage Notifications',
    // subItems: [], // No sub-categories
    subItems: ['Ratul sent message', 'Link by ID Card', 'asia Bank Link'],
  },
  {
    title: 'Help & Support',
    subItems: ['Contact Us', 'FAQs', 'Live Chat Support'],
  },
];

const Dashboard = () => {
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  const toggleSub = (index) => {
    setOpenSub(openSub === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Navigation Bar */}
        {/* <div className="flex justify-around items-center bg-blue-600 p-4 rounded-2xl mt-8">
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
        </div> */}

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
              {quickActionsData.map((action, index) => (
                <div key={index}>
                  {/* Main Action Button */}
                  <button
                    onClick={() => action.subItems.length > 0 && toggleSub(index)}
                    className="w-full flex justify-between items-center text-lg text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition duration-200"
                  >
                    {action.title}
                    {action.subItems.length > 0 && (
                      <i
                        className={`fas fa-chevron-${openSub === index ? 'up' : 'down'} text-gray-500`}
                      ></i>
                    )}
                  </button>

                  {/* Sub-items */}
                  {openSub === index && action.subItems.length > 0 && (
                    <div className="ml-5 mt-2 space-y-2 text-gray-600">
                      {action.subItems.map((sub, subIndex) => (
                        <p
                          key={subIndex}
                          className="hover:bg-gray-200 p-2 rounded-md cursor-pointer transition"
                        >
                          - {sub}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
