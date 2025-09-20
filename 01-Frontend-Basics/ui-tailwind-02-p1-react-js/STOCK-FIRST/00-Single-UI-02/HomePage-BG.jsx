import React from "react";

const Zero = () => {
  return (
    // Ring 2 , ring yello : color tailwind and border
    <main>
      <div className="h-screen bg-gradient-to-r from-blue-900 to-blue-600 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-lg">
          Explore The World
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mb-8 text-white/90">
          Discover destinations, experiences, and adventures to make your dream
          trip a reality.
        </p>
        <input
          type="text"
          placeholder="Search your next destination..."
          className="w-full max-w-xl rounded-lg py-4 px-6 text-white shadow-md focus:ring-2 focus:ring-yellow-400 outline-none"
        />
      </div>

      <div className="h-screen bg-gradient-to-r from-blue-900 to-blue-600 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-lg">
          Explore The World
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mb-8 text-white/90">
          Discover food, experiences, and test to make your dream trip a
          reality.
        </p>
        <input
          type="text"
          placeholder="Search your next destination..."
          className="w-full max-w-xl rounded-lg py-4 px-6 text-white shadow-md focus:ring-2  ring-2 ring-yellow-400 focus:ring-yellow-400 outline-none"
        />
      </div>
    </main>
  );
};

export default Zero;
