import React from "react";

function BentoGrid() {
  return (
    <div className="w-full min-h-screen bg-black p-4">
      <div className="grid grid-cols-4 h-[500px] bg-blue-700 grid-rows-3 gap-4">
        {/* Top-left small box */}
        <div className="bg-pink-400  flex items-center justify-center text-white font-bold">
          Top Left
        </div>
        {/* Top-right large box */}
        <div className="bg-pink-400 flex items-center justify-center text-white font-bold col-span-3">
          Top Right
        </div>
        {/* Middle-left large box */}
        <div className="bg-pink-400 flex items-center justify-center text-white font-bold col-span-3 row-start-2 row-end-3">
          Middle Left
        </div>
        {/* Middle-right small box */}
        <div className="bg-pink-400 flex items-center justify-center text-white font-bold row-start-2 row-end-3">
          Middle Right
        </div>
        {/* Bottom large box */}
        <div className="bg-pink-400 flex items-center justify-center text-white font-bold col-span-4 row-start-3 row-end-4">
          Bottom
        </div>
      </div>
    </div>
  );
}

export default BentoGrid;
