import React from 'react';

const GroupProfile = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans max-w-md mx-auto border border-gray-200 shadow-md p-4">
      
      {/* Back Arrow */}
      <div className="flex items-center mb-4">
        <button className="text-xl mr-2">←</button>
      </div>

      {/* Group Image */}
      <div className="flex flex-col items-center justify-center text-center mb-4">
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-4xl font-bold text-black mb-2">
          Pic
        </div>
        <h2 className="text-xl font-semibold">FlyX</h2>
        <p className="text-sm text-gray-600">Group · 2 members</p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 mt-6">
        <button className="w-full flex items-center gap-4 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          📞 <span className="font-medium">Call</span>
        </button>
        <button className="w-full flex items-center gap-4 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          🎥 <span className="font-medium">Movies</span>
        </button>
        <button className="w-full flex items-center gap-4 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          ➕ <span className="font-medium">Add</span>
        </button>
        <button className="w-full flex items-center gap-4 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          🔍 <span className="font-medium">News</span>
        </button>
      </div>

      {/* Group Description Section */}
      <div className="mt-8 border-t pt-4">
        <p className="text-green-600 font-medium text-sm mb-1">Add group description</p>
        <p className="text-xs text-gray-500">Created by You, today at 2:57 PM</p>
      </div>
    </div>
  );
};

export default GroupProfile;
