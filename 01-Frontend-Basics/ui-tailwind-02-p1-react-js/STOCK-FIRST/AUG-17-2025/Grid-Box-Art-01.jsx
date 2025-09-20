import React from "react";

export default function ResponsiveGrid() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center">
      <div className="border border-black max-w-4xl w-full">
        {/* Desktop and Tablet container */}
        <div className="grid grid-cols-1 gap-2 p-2
          md:grid-cols-4 md:grid-rows-[auto_2fr_auto]
          lg:grid-cols-8 lg:grid-rows-[auto_1fr_1fr]">

          {/* Large top box */}
          <div className="bg-purple-800 text-white flex items-center justify-center h-40 md:col-span-4 lg:col-span-8">
            X
          </div>

          {/* The row with a b x d */}
          {/* On desktop (lg): a b (col 1-2), x (col 3-4), d (col 5-6) */}
          {/* On tablet (md): a b (col 1-2), d (col 3-4), no x in this row */}
          <div className="bg-pink-700 text-white flex items-center justify-center h-24 md:col-span-1 lg:col-span-2">
            A
          </div>
          <div className="bg-pink-700 text-white flex items-center justify-center h-24 md:col-span-1 lg:col-span-2">
            B
          </div>
          {/* For tablet, x goes below a,b,d in a 2x2 grid, so show x here only on desktop */}
          <div className="hidden lg:flex bg-pink-900 text-white items-center justify-center h-24 lg:col-span-2">
            X
          </div>
          <div className="bg-pink-700 text-white flex items-center justify-center h-24 md:col-span-1 lg:col-span-2">
            D
          </div>

          {/* Tablet view shows x box in second row */}
          <div className="bg-pink-900 text-white flex items-center justify-center h-24 md:col-span-2 md:row-start-2 md:row-end-3 md:grid md:grid-cols-2 md:gap-2 md:hidden lg:flex lg:hidden lg:col-span-2">
            X
          </div>

          {/* Bottom two boxes e f */}
          <div className="bg-pink-400 text-white flex items-center justify-center h-40 md:col-span-2 lg:col-span-4">
            E
          </div>
          <div className="bg-pink-400 text-white flex items-center justify-center h-40 md:col-span-2 lg:col-span-4">
            F
          </div>
        </div>
      </div>
    </div>
  );
}
