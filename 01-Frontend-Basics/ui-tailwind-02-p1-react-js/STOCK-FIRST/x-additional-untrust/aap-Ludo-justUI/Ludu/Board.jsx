import React from 'react';

const Board = ({ dice, turn }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-1 w-64 h-64 border-4 border-black">
      {Array.from({ length: 9 }).map((_, i) => (
        <div 
          key={i}
          className={`flex items-center justify-center border ${
            i === 4 ? "bg-yellow-400" : "bg-white"
          }`}
        >
          {i === 0 && "P1"}
          {i === 8 && "P2"}
        </div>
      ))}
    </div>
  );
};

export default Board;
