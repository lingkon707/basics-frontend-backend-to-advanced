import React from "react";

const GridExample = () => {
  return (
    <main>
      <div className="grid grid-rows-3 gap-4">
        <div className="bg-blue-500">Row 1</div>
        <div className="bg-red-500">Row 2</div>
        <div className="bg-green-500">Row 3</div>
      </div>

      {/* Another Example with Custom Values */}
      <div className="grid grid-rows-[200px_1fr_2fr] gap-4">
        <div className="bg-blue-500">Row 1 (200px)</div>
        <div className="bg-red-500">Row 2 (1fr)</div>
        <div className="bg-green-500">Row 3 (2fr)</div>
      </div>
    </main>
  );
};

export default GridExample;
