import React, { useState } from 'react';

const BookingCard = () => {
  const [selectedDate, setSelectedDate] = useState('Dec 20 - 31');
  const [selectedGuests, setSelectedGuests] = useState('1 guest');

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg p-6">
      {/* Pricing Information */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-xl font-semibold">From $2</span> / person
        </div>
        <button className="text-sm text-blue-500">Show all prices</button>
      </div>

      {/* Date and Guest Selection */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Dates */}
        <div>
          <label className="block text-sm font-medium text-gray-700">DATES</label>
          <div className="relative">
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Dec 20 - 31</option>
              <option>Dec 1 - 15</option>
              <option>Jan 1 - 10</option>
            </select>
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="block text-sm font-medium text-gray-700">GUESTS</label>
          <div className="relative">
            <select
              value={selectedGuests}
              onChange={(e) => setSelectedGuests(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3 guests</option>
            </select>
          </div>
        </div>
      </div>

      {/* Available Dates */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-semibold">Sat, Dec 25</span>
            <p className="text-sm text-gray-500">1:00 PM - 2:30 PM</p>
            <p className="text-sm text-gray-500">Join 3 other guests</p>
          </div>
          <div>
            <span className="text-lg font-semibold text-red-500">$2 / person</span>
          </div>
          <button className="mt-2 py-2 px-6 text-white bg-red-500 rounded-lg hover:bg-red-600">Choose</button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="font-semibold">Sun, Dec 26</span>
            <p className="text-sm text-gray-500">1:00 PM - 2:30 PM</p>
            <p className="text-sm text-gray-500">Join 2 other guests</p>
          </div>
          <div>
            <span className="text-lg font-semibold text-red-500">$2 / person</span>
          </div>
          <button className="mt-2 py-2 px-6 text-white bg-red-500 rounded-lg hover:bg-red-600">Choose</button>
        </div>
      </div>

      {/* Show More Dates and Gift Experience */}
      <div className="space-y-4">
        <button className="w-full py-2 px-4 text-sm text-blue-500 border border-gray-300 rounded-lg hover:bg-gray-100">
          Show more dates
        </button>
        <div className="text-sm text-center text-gray-500">
          <button className="flex justify-center items-center space-x-1">
            <span>🎁</span>
            <span>Gift this experience</span>
          </button>
        </div>
        <button className="w-full py-2 px-4 text-sm text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100">
          Report this experience
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
