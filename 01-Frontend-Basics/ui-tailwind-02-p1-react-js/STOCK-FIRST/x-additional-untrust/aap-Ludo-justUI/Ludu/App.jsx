import React, { useState } from 'react';
import Board from './Board';
import Dice from './Dice';

function App() {
  const [turn, setTurn] = useState(1);
  const [dice, setDice] = useState(1);

  const rollDice = () => {
    const value = Math.ceil(Math.random() * 6);
    setDice(value);
    setTurn(turn === 1 ? 2 : 1); // toggle turn
  };

  return (
    <div className="min-h-screen bg-green-200 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Ludo Game (2 Player)</h1>
      <Board dice={dice} turn={turn} />
      <Dice value={dice} onRoll={rollDice} />
    </div>
  );
}

export default App;
