import React from 'react'

const Gap = () => {
  return (
    <main className='bg-black'>
      {/* 1. Using Gap with Flexbox
You can add a gap between flex items using the gap utility in Tailwind. */}
<div class="flex gap-4">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-green-500 p-4">Item 2</div>
  <div class="bg-red-500 p-4">Item 3</div>
</div>
<br /> <br />

{/* 2. Using Gap with Grid
Similarly, with a grid layout, you can use the gap utility to control the space between grid items. */}
<div class="grid grid-cols-3 gap-6">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-green-500 p-4">Item 2</div>
  <div class="bg-red-500 p-4">Item 3</div>
  <div class="bg-yellow-500 p-4">Item 4</div>
  <div class="bg-pink-500 p-4">Item 5</div>
  <div class="bg-purple-500 p-4">Item 6</div>
</div>
<br /> <br />

{/* 3. Customizing Gap Sizes
Tailwind offers predefined gap values, but you can customize them using the gap-{size} utility, such as gap-2, gap-8, or even gap-px for very small gaps. */}
<div class="grid grid-cols-4 gap-2">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-green-500 p-4">Item 2</div>
  <div class="bg-red-500 p-4">Item 3</div>
  <div class="bg-yellow-500 p-4">Item 4</div>
</div>
<br /> <br />

{/* 4. Controlling Vertical and Horizontal Gaps Separately
You can also control horizontal and vertical gaps independently by using gap-x and gap-y. */}
<div class="grid grid-cols-3 gap-x-4 gap-y-8">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-green-500 p-4">Item 2</div>
  <div class="bg-red-500 p-4">Item 3</div>
  <div class="bg-yellow-500 p-4">Item 4</div>
  <div class="bg-pink-500 p-4">Item 5</div>
  <div class="bg-purple-500 p-4">Item 6</div>
</div>
<br /> <br />

    </main>
  )
}

export default Gap