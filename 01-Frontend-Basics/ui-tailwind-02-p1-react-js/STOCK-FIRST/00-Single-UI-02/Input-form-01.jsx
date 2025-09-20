import React from 'react';

const UserForm = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">User Information</h1>

      <form className="space-y-5">

        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Phone Number Input */}
        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
          <input
            id="phone"
            type="tel"
            pattern="[0-9]*"
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* City Input */}
        <div>
          <label htmlFor="city" className="block mb-1 font-medium">City</label>
          <input
            id="city"
            type="text"
            placeholder="Enter your city"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Upload Button */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="upload">Upload File</label>
          <input
            id="upload"
            type="file"
            className="w-full text-sm text-gray-600
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-700
              hover:file:bg-indigo-100
            "
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
