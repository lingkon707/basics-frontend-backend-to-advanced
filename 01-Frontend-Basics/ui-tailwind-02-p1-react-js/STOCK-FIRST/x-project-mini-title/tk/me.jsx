"use client";
import React from "react";

const DarkLightToggleProfile = () => {
 

  return (
    <div className="min-h-screen transition-colors duration-500 bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-8">
      
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <h1 className="text-4xl font-bold mb-2">Limon Islam</h1>
        <p className="text-yellow-500 dark:text-yellow-400 font-semibold mb-6 text-xl">
          Frontend Developer
        </p>
        <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
          Passionate about building scalable and performant frontend apps using React, Next.js, and Tailwind CSS.
          I focus on writing clean, maintainable code and crafting smooth user experiences.
        </p>

        <h2 className="text-2xl font-semibold mb-3 border-b border-yellow-400 w-max pb-1">
          Skills
        </h2>
        <ul className="list-disc list-inside space-y-1 mb-6">
          <li>React & Next.js</li>
          <li>Tailwind CSS & Responsive Design</li>
          <li>JavaScript (ES6+) & TypeScript</li>
          <li>Git & GitHub</li>
          <li>API Integration</li>
        </ul>

        <button className="bg-yellow-400 dark:bg-yellow-500 hover:bg-yellow-500 dark:hover:bg-yellow-600 text-black dark:text-gray-900 font-bold px-8 py-3 rounded-full transition">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default DarkLightToggleProfile;
