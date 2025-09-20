import React from 'react';

const BOARD_SIZE = 15;

const COLORS = {
  red: 'bg-red-600',
  blue: 'bg-blue-600',
  green: 'bg-green-600',
  yellow: 'bg-yellow-400',
};

const Circle = ({ color }) => (
  <div
    className={`rounded-full border-2 border-black w-6 h-6 m-0.5 ${color ? COLORS[color] : 'bg-white'}`}
  ></div>
);

const LudoBoard = () => {
  // This board array defines which cell belongs to which color/path.
  // We'll define only key zones for simplicity here.

  // A helper function to create a row of 15 squares
  const createRow = (rowIndex) => {
    const cells = [];

    for (let col = 0; col < BOARD_SIZE; col++) {
      let cellClass = 'border border-black w-8 h-8 flex items-center justify-center';

      // Mark colored bases and paths based on row/col

      // Red base (top-left 6x6 square)
      if (rowIndex < 6 && col < 6) {
        cellClass += ' ' + COLORS.red;
      }
      // Blue base (top-right 6x6 square)
      else if (rowIndex < 6 && col > 8) {
        cellClass += ' ' + COLORS.blue;
      }
      // Green base (bottom-left 6x6 square)
      else if (rowIndex > 8 && col < 6) {
        cellClass += ' ' + COLORS.green;
      }
      // Yellow base (bottom-right 6x6 square)
      else if (rowIndex > 8 && col > 8) {
        cellClass += ' ' + COLORS.yellow;
      }
      // Central vertical & horizontal path
      else if (col === 6 || col === 8 || rowIndex === 6 || rowIndex === 8) {
        // Special path cells — white or colored path will be handled later
        cellClass += ' bg-white';
      } else {
        cellClass += ' bg-white';
      }

      cells.push(
        <div key={`${rowIndex}-${col}`} className={cellClass}>
          {/* Place circles inside the base corners */}
          {(rowIndex === 1 || rowIndex === 4) && (col === 1 || col === 4) && rowIndex < 6 && col < 6 && <Circle color="red" />}
          {(rowIndex === 1 || rowIndex === 4) && (col === 10 || col === 13) && rowIndex < 6 && col > 8 && <Circle color="blue" />}
          {(rowIndex === 10 || rowIndex === 13) && (col === 1 || col === 4) && rowIndex > 8 && col < 6 && <Circle color="green" />}
          {(rowIndex === 10 || rowIndex === 13) && (col === 10 || col === 13) && rowIndex > 8 && col > 8 && <Circle color="yellow" />}
        </div>
      );
    }

    return <div key={rowIndex} className="flex">{cells}</div>;
  };

  const rows = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    rows.push(createRow(i));
  }

  return <div className="inline-block border-4 border-black">{rows}</div>;
};

export default LudoBoard;
