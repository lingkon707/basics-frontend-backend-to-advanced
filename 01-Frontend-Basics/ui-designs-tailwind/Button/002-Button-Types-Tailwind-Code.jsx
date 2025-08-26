import React from "react";

const Button = () => {
  return (
    <main className="p-12">
      <h1>Basic Button</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Primary Button
      </button>
      <br /> <br />


      <h1> Hover & Focus Buttons </h1>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:ring-2 focus:ring-green-300">
        Hover & Focus
      </button>
      <br /> <br />


      <h1> Outline Button</h1>
      <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
        Outline Button
      </button>
      <br /> <br />


      <h1>Disabled Buttons</h1>
      <button
        className="bg-gray-400 text-gray-200 px-4 py-2 rounded cursor-not-allowed"
        disabled
      >
        Disabled
      </button>
      <br /> <br />


      <h1>Rounded / Pill Buttons</h1>
      <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-700">
        Pill Button
      </button>
      <br /> <br />


      <h1>Small / Large Buttons</h1>
      <button className="bg-green-500 text-white px-2 py-1 text-sm rounded">
        Small
      </button>
      <button className="bg-red-500 text-white px-6 py-3 text-lg rounded">
        Large
      </button>
      <br /> <br />


      <h1>Icon Buttons</h1>
      <button className="bg-black text-white p-3 rounded-full hover:bg-red-700">
        ❤️
      </button>
      <br /> <br />


      <h1>Gradient Buttons</h1>
      <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded hover:from-pink-600 hover:to-yellow-600">
        Gradient
      </button>
      <br /> <br />


      <h1>Ghost / Transparent Buttons</h1>
      <button className="text-blue-500 border border-transparent hover:border-blue-500 hover:bg-blue-100 px-4 py-2 rounded">
        Ghost Button
      </button>

      
    </main>
  );
};

export default Button;
