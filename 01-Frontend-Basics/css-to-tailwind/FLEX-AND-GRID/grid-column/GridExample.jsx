import React from "react";

const GridExample = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-2 bg-blue-500">Item 1</div>
      <div className="col-span-full bg-red-500">Item 2 (Full Width)</div>
      <div className="col-start-2 col-end-4 bg-green-500">Item 3</div>
      <div className="col-auto bg-yellow-500">Item 4 (Auto)</div>
    </div>
  );
};

export default GridExample;
