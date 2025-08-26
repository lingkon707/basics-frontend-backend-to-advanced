import React from 'react';

const CustomGridExample = () => {
  return (
    <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px] gap-4 p-4">
      <div className="bg-blue-500 p-4">Item 1</div>
      <div className="bg-red-500 p-4">Item 2</div>
      <div className="bg-green-500 p-4">Item 3</div>
      <div className="bg-yellow-500 p-4">Item 4</div>
    </div>
  );
};

export default CustomGridExample;
