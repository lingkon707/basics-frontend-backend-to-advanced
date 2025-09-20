import React from 'react';

const UserForm = () => {
  return (
    <div className="min-h-screen bg-indigo-50 flex items-center justify-center p-6">
      <form className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-8 text-center text-indigo-700">User Information</h1>

        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* City Input */}
            <div>
              <label htmlFor="city" className="block mb-2 font-medium text-gray-700">City</label>
              <input
                id="city"
                type="text"
                placeholder="Enter your city"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-6 mt-6 md:mt-0">
            {/* Phone Number Input */}
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">Phone Number</label>
              <input
                id="phone"
                type="tel"
                pattern="[0-9]*"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Upload Button */}
            <div>
              <label className="block mb-2 font-medium text-gray-700" htmlFor="upload">Upload File</label>
              <input
                id="upload"
                type="file"
                className="w-full text-sm text-gray-600
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-100 file:text-indigo-700
                  hover:file:bg-indigo-200
                "
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-10 w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
