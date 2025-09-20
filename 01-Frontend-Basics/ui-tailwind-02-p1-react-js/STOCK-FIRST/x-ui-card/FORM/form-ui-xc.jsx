import React from 'react';

const EventRegistrationForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 text-white shadow-lg">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-wide">Event Registration</h2>
          <p className="text-sm text-gray-300 mt-2">Register with us to get more details.</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">First Name</label>
              <input
                type="text"
                placeholder="First"
                className="w-full px-4 py-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Last"
                className="w-full px-4 py-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              type="tel"
              placeholder="+1234567890"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Topic */}
          <div>
            <label className="block text-sm mb-1">Topic</label>
            <select
              className="w-full px-4 py-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
            >
              <option value="">Select a topic</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          {/* Preferred Slot */}
          <div>
            <label className="block text-sm mb-1">Preferred Slot</label>
            <select
              className="w-full px-4 py-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
            >
              <option value="">Select a time slot</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>

          {/* Submit */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-8 rounded-full transition-all duration-200 shadow-md"
            >
              Sign me up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventRegistrationForm;
