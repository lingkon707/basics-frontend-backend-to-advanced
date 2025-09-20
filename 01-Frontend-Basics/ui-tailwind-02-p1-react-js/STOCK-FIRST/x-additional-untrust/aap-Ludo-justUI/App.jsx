import React from "react";
import Board from "./Board";
import Dice from "./Dice";

const App = () => {
  const handleRoll = (num) => {
    console.log("Dice rolled:", num);
  };

  return (
    <div className="flex flex-col items-center">
     
      <Dice onRoll={handleRoll} />
       <Board />
    </div>
  );
};

export default App;
