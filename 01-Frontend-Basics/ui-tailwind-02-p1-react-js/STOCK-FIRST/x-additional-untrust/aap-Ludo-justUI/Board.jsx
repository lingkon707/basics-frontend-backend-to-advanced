import React from "react";

const Board = () => {
  return (
    <div className="flex justify-center items-center p-4 bg-blue-300 min-h-screen">
      <div className="grid grid-cols-15 grid-rows-15 w-[600px] h-[600px] border-4 border-black">

        {/* RED HOME */}
        <div className="col-span-6 row-span-6 bg-red-500 flex justify-center items-center border-2 border-black">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-white rounded-full p-4">
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
          </div>
        </div>

        {/* TOP PATH */}
        <div className="col-span-3 row-span-6 grid grid-cols-3 grid-rows-6">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="border border-black"></div>
          ))}
        </div>

        {/* BLUE HOME */}
        <div className="col-span-6 row-span-6 bg-blue-500 flex justify-center items-center border-2 border-black">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-white rounded-full p-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* LEFT PATH */}
        <div className="col-span-6 row-span-3 grid grid-cols-6 grid-rows-3">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="border border-black"></div>
          ))}
        </div>

        {/* CENTER HOME TRIANGLE */}
        <div className="col-span-3 row-span-3 grid grid-cols-2 grid-rows-2 border-2 border-black">
          <div className="bg-red-500"></div>
          <div className="bg-blue-500"></div>
          <div className="bg-green-500"></div>
          <div className="bg-yellow-500"></div>
        </div>

        {/* RIGHT PATH */}
        <div className="col-span-6 row-span-3 grid grid-cols-6 grid-rows-3">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="border border-black"></div>
          ))}
        </div>

        {/* GREEN HOME */}
        <div className="col-span-6 row-span-6 bg-green-500 flex justify-center items-center border-2 border-black">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-white rounded-full p-4">
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* BOTTOM PATH */}
        <div className="col-span-3 row-span-6 grid grid-cols-3 grid-rows-6">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="border border-black"></div>
          ))}
        </div>

        {/* YELLOW HOME */}
        <div className="col-span-6 row-span-6 bg-yellow-400 flex justify-center items-center border-2 border-black">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-white rounded-full p-4">
            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
