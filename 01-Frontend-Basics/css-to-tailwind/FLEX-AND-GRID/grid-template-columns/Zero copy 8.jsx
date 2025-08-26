import React from 'react';

const CSSVariableGridExample = () => {
  return (
    <div className="grid grid-cols-[var(--my-grid-cols)] gap-4 p-4">
      <div className="bg-blue-500 p-4">Item 1</div>
      <div className="bg-red-500 p-4">Item 2</div>
      <div className="bg-green-500 p-4">Item 3</div>
      <div className="bg-yellow-500 p-4">Item 4</div>
    </div>
  );
};

export default CSSVariableGridExample;
