import React from 'react';

const BioDataForm = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-gradient-to-b from-[#101010] to-[#181818] rounded-3xl shadow-2xl p-10 text-white border border-[#2a2a2a]">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Bio Data Form</h1>
          <p className="text-gray-400 text-sm">Fill in your personal details carefully.</p>
        </div>

        {/* BioData Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="col-span-1 md:col-span-2 px-4 py-3 rounded-full bg-[#1e1e1e] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Date of Birth */}
          <input
            type="date"
            placeholder="Date of Birth"
            className="px-4 py-3 rounded-full bg-[#1e1e1e] text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Gender */}
          <select
            className="px-4 py-3 rounded-full bg-[#1e1e1e] text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="col-span-1 md:col-span-2 px-4 py-3 rounded-full bg-[#1e1e1e] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="px-4 py-3 rounded-full bg-[#1e1e1e] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Nationality */}
          <input
            type="text"
            placeholder="Nationality"
            className="px-4 py-3 rounded-full bg-[#1e1e1e] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Address */}
          <textarea
            rows="3"
            placeholder="Address"
            className="col-span-1 md:col-span-2 px-4 py-3 rounded-lg bg-[#1e1e1e] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
          />

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-400 text-black font-semibold py-3 rounded-full hover:bg-green-300 transition shadow-md"
            >
              Submit BioData
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BioDataForm;
