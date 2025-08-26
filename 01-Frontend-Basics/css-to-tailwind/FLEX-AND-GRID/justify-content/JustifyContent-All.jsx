import React from "react";

const JustifyContent = () => {
  return (
    <main className="bg-black">
     <div class="space-y-4">
  {/* <!-- justify-start: Aligns items to the start of the container (left) --> */}
  <div class="flex justify-start p-3 bg-gray-100">
    <div class="p-3 bg-blue-500">01</div>
    <div class="p-3 bg-green-500">02</div>
    <div class="p-3 bg-yellow-500">03</div>
    <div class="p-3 bg-orange-500">04</div>
  </div>

  {/* <!-- justify-end: Aligns items to the end of the container (right) --> */}
  <div class="flex justify-end p-3 bg-gray-100">
    <div class="p-3 bg-blue-500">01</div>
    <div class="p-3 bg-green-500">02</div>
    <div class="p-3 bg-yellow-500">03</div>
    <div class="p-3 bg-orange-500">04</div>
  </div>

  {/* <!-- justify-center: Centers items within the container --> Note: space-x-6 , Test It*/}
  <div class="flex justify-center p-3 bg-gray-100 ">
    <div class="p-3 bg-blue-500">01</div>
    <div class="p-3 bg-green-500">02</div>
    <div class="p-3 bg-yellow-500">03</div>
    <div class="p-3 bg-orange-500">04</div>
  </div>

  {/* <!-- justify-between: Distributes items with space between them --> */}
  <div class="flex justify-between p-3 bg-gray-100">
    <div class="p-3 bg-blue-500">01</div>
    <div class="p-3 bg-green-500">02</div>
    <div class="p-3 bg-yellow-500">03</div>
    <div class="p-3 bg-orange-500">04</div>
  </div>

  {/* <!-- justify-around: Distributes items with equal space around them --> */}
  <div class="flex justify-around p-3 bg-gray-100">
    <div class="p-3 bg-blue-500">01</div>
    <div class="p-3 bg-green-500">02</div>
    <div class="p-3 bg-yellow-500">03</div>
    <div class="p-3 bg-orange-500">04</div>
  </div>

  {/* <!-- justify-evenly: Distributes items with equal space between them --> */}
  <div class="flex justify-evenly p-3 bg-gray-100">
    <div class="p-3 bg-blue-500">01</div>
    <div class="p-3 bg-green-500">02</div>
    <div class="p-3 bg-yellow-500">03</div>
    <div class="p-3 bg-orange-500">04</div>
  </div>

  {/* <!-- justify-stretch: Stretches items to fill the container --> */}
  <div class="flex justify-stretch p-3 bg-gray-100">
    <div class="p-3 bg-blue-500">01</div>
    <div class="p-3 bg-green-500">02</div>
    <div class="p-3 bg-yellow-500">03</div>
    <div class="p-3 bg-orange-500">04</div>
  </div>

  {/* <!-- justify-baseline: Aligns items along their baseline --> */}
  <div class="flex justify-baseline p-3 bg-gray-100">
    <div class="p-3 bg-blue-500">01</div>
    <div class="p-3 bg-green-500">02</div>
    <div class="p-3 bg-yellow-500">03</div>
    <div class="p-3 bg-orange-500">04</div>
  </div>

  {/* <!-- justify-normal: Default behavior (normal content alignment) --> */}
  <div class="flex justify-normal p-3 bg-gray-100">
    <div class="p-3 bg-blue-500">01</div>
    <div class="p-3 bg-green-500">02</div>
    <div class="p-3 bg-yellow-500">03</div>
    <div class="p-3 bg-orange-500">04</div>
  </div>
</div>

    </main>
  );
};

export default JustifyContent;
