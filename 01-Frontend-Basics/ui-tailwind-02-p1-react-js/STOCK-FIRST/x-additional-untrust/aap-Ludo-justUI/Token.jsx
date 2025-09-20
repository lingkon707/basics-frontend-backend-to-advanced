import React from "react";

const Token = ({ color, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-6 h-6 rounded-full ${color} border-2 border-black cursor-pointer`}
    />
  );
};

export default Token;
