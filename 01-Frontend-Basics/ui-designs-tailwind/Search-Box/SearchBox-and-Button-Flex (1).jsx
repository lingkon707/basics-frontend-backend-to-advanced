import React, { useState } from "react";

const Searchbox = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="max-w-2xl mx-auto mt-20">
      <div className="relative">
        <input
          type="text"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder=" "
          className={`w-full py-4 px-6 rounded-md border-2 ${focused ? 'border-green-500' : 'border-gray-300'} focus:outline-none transition duration-300`}
        />
        <label
          className={`absolute left-6 top-1/2 transform -translate-y-1/2 ${focused ? 'text-green-500' : 'text-gray-500'} transition duration-300`}
        >
          Search for icons
        </label>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
          <span className="text-lg">🔍</span>
        </button>
      </div>
    </div>
  );
};

export default Searchbox;
