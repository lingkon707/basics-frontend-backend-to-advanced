import React from 'react';

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-blue-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
        
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-6 rounded-t-lg lg:rounded-l-lg text-center lg:text-left">
          <img 
            src="https://i.imgur.com/2JYp8KH.jpg" 
            alt="Ryan Gosling" 
            className="w-20 h-20 rounded-full mx-auto mb-4 lg:mx-0"
          />
          <button className="bg-blue-500 text-white p-2 rounded-full mb-4">
            <span className="text-2xl">+</span>
          </button>
          <h2 className="text-xl font-semibold mb-4">Ryan Gosling</h2>
          <nav className="space-y-4 text-lg text-gray-700">
            <button className="w-full text-left py-2 px-4 hover:bg-blue-200 rounded-md">Account Settings</button>
            <button className="w-full text-left py-2 px-4 hover:bg-blue-200 rounded-md">Personal Information</button>
            <button className="w-full text-left py-2 px-4 hover:bg-blue-200 rounded-md">Privacy</button>
            <button className="w-full text-left py-2 px-4 hover:bg-blue-200 rounded-md">Notification</button>
            <button className="w-full text-left py-2 px-4 hover:bg-blue-200 rounded-md text-red-500">Sign Out</button>
          </nav>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-3/4 p-6">
          <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">First name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  defaultValue="Ryan"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Last name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  defaultValue="Gosling"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Username</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                defaultValue="Sebastian"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">E-mail</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                defaultValue="ryan876@gmail.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone number</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                defaultValue="+3809909760179"
              />
            </div>
            <div className="flex justify-between items-center mt-6">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Save</button>
              <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
