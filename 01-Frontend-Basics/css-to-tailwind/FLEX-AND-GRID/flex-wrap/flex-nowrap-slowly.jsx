import React from "react";

const Zero = () => {
  return (
    <main>
      {/* flex-wrap: nowrap
This prevents the flex items from wrapping and forces them to stay in a single row.
If you want the flex items to stay in a single row but decrease their size gradually based on screen size */}
      <div className="flex flex-wrap-nowrap">
        <div className="w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/10 p-2">
          <div className="bg-blue-500 h-32">Item 1</div>
        </div>
        <div className="w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/10 p-2">
          <div className="bg-green-500 h-32">Item 2</div>
        </div>
        <div className="w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/10 p-2">
          <div className="bg-red-500 h-32">Item 3</div>
        </div>
        <div className="w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/10 p-2">
          <div className="bg-yellow-500 h-32">Item 4</div>
        </div>

        <div className="w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/10 p-2">
          <div className="bg-blue-500 h-32">Item 1</div>
        </div>
        <div className="w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/10 p-2">
          <div className="bg-green-500 h-32">Item 2</div>
        </div>
        <div className="w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/10 p-2">
          <div className="bg-red-500 h-32">Item 3</div>
        </div>
        <div className="w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/10 p-2">
          <div className="bg-yellow-500 h-32">Item 4</div>
        </div>
      </div>
    </main>
  );
};

export default Zero;
