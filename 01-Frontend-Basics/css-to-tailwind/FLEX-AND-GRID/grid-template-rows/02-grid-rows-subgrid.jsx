import React from "react";

const GridExample = () => {
  return (
    <main>
      <div class="grid grid-flow-col grid-rows-4 gap-4 bg-green-300">
        {/* <!-- Regular Grid Items --> */}
        <div className="bg-amber-700">01</div>
        <div className="bg-amber-700">02</div>
        <div className="bg-amber-700">03</div>
        <div className="bg-amber-700">04</div>

        {/* <!-- Spanning 3 rows --> */}
        <div class="row-span-3 grid grid-rows-subgrid gap-4 bg-red-300">
          {/* <!-- Item 06 positioned in row 2 --> */}
          <div class="row-start-2">06</div>
        </div>

        {/* <!-- Remaining Items --> */}
        <div className="bg-blue-700 text-white text-xl">05</div>
        <div className="bg-blue-700 text-white text-xl">07</div>
        <div className="bg-blue-700 text-white text-xl">08</div>
        <div className="bg-blue-700 text-white text-xl">09</div>
        <div className="bg-blue-700 text-white text-xl">10</div>
      </div>
    </main>
  );
};

export default GridExample;
