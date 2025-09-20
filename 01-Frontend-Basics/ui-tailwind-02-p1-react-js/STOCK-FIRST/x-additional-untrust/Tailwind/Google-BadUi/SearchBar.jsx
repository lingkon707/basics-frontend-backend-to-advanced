import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const SearchBar = () => {
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    alert(`Searching for ${role} in ${location}`);
  };

  return (
    <div className="flex justify-center items-center bg-white py-8">
      <div className="w-full max-w-4xl px-4">
        {/* Role Input */}
        <div className="flex space-x-6 mb-4">
          <div className="flex-1">
            <label className="text-sm font-semibold text-gray-600">Role</label>
            <div className="flex items-center border rounded-full px-4 py-2 mt-2">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Software engineer"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Location Input */}
          <div className="flex-1">
            <label className="text-sm font-semibold text-gray-600">Where?</label>
            <div className="flex items-center border rounded-full px-4 py-2 mt-2">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Los Angeles"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-center">
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
