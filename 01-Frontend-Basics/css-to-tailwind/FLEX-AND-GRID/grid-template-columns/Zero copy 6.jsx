import React from 'react';

const SubgridExample = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-black">
      <div className="bg-blue-500 p-4">01</div>
      <div className="bg-red-500 p-4">02</div>
      <div className="bg-green-500 p-4">03</div>
      <div className="bg-yellow-500 p-4">04</div>
      <div className="bg-purple-500 p-4">05</div>
      
      {/* Nested subgrid */}
      <div className="col-span-3 grid grid-cols-subgrid gap-4">
        <div className="bg-indigo-500 p-4 col-start-2">06</div>
      </div>
    </div>
  );
};

export default SubgridExample;
