import React, { useState } from "react";

const Dice = ({ onRoll }) => {
  const [value, setValue] = useState(1);

  const roll = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    setValue(num);
    onRoll(num);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="w-16 h-16 flex items-center justify-center text-2xl font-bold bg-white border-2 rounded-lg shadow">
        {value}
      </div>
      <button
        onClick={roll}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        Roll Dice
      </button>
    </div>
  );
};

export default Dice;
