import React from 'react';

const GridColsSubgridExample = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="bg-blue-500 p-4 col-span-3">Parent Grid (3 Columns)</div>
      <div className="bg-red-500 p-4 grid grid-cols-subgrid">
        <div className="bg-yellow-500 p-4">Subgrid Item 1</div>
        <div className="bg-green-500 p-4">Subgrid Item 2</div>
        <div className="bg-purple-500 p-4">Subgrid Item 3</div>
      </div>
    </div>
  );
};

export default GridColsSubgridExample;
