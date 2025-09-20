import React from 'react';

const Dice = ({ value, onRoll }) => {
  return (
    <div className="my-4 flex flex-col items-center">
      <div className="text-4xl font-bold mb-2">🎲 {value}</div>
      <button 
        onClick={onRoll} 
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Roll Dice
      </button>
    </div>
  );
};

export default Dice;
