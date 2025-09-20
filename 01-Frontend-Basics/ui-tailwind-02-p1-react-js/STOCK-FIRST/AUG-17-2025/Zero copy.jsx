import React from "react";

const CSSGridDemo = () => {
  return (
    <div className="min-h-screen bg-blue-950 text-white p-6">
      {/* CSS Grid Full Width */}
      <div
        className="grid gap-2 w-full text-center text-sm font-semibold"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 120px)",
        }}
      >
        {/* Row 1 */}
        <div className="bg-green-600 row-span-3 flex items-center justify-center">A</div>
        <div className="bg-blue-500 flex items-center justify-center">B</div>
        <div className="bg-red-500 flex items-center justify-center">C</div>

        {/* Row 2 */}
        <div className="bg-yellow-400 flex items-center justify-center">D</div>
        <div className="bg-pink-500 flex items-center justify-center">E</div>
        <div className="bg-teal-500 row-span-2 flex items-center justify-center">F</div>

        {/* Row 3 */}
        <div className="bg-purple-500 flex items-center justify-center">G</div>
        <div className="bg-orange-400 flex items-center justify-center">H</div>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mt-10 text-center font-serif tracking-wider">
        CSS GRID
      </h1>
    </div>
  );
};

export default CSSGridDemo;
