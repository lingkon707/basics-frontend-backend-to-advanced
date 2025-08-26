import React from 'react';

const ResponsiveGridExample = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <div className="bg-blue-500 p-4">Item 1</div>
      <div className="bg-red-500 p-4">Item 2</div>
      <div className="bg-green-500 p-4">Item 3</div>
      <div className="bg-yellow-500 p-4">Item 4</div>
      <div className="bg-purple-500 p-4">Item 5</div>
      <div className="bg-indigo-500 p-4">Item 6</div>
    </div>
  );
};

export default ResponsiveGridExample;


// Responsive Example: Changing the number of columns based on screen size

// You can also make the grid responsive, adjusting the number of columns depending on the screen size. Here's an example where the grid has:

// 2 columns on small screens (grid-cols-2)


// 4 columns on medium screens (md:grid-cols-4)
