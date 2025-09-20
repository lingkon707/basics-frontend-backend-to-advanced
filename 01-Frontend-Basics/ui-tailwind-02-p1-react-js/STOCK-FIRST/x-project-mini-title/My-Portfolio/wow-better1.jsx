"use client";
import React from "react";

const DeveloperProfileWithImageGrid = () => {
  const images = [
    "https://thumbs.dreamstime.com/b/arabian-religious-muslim-man-isolated-36430232.jpg",
    "https://blog.al-islam.org/wp-content/uploads/2019/09/5n67Yz7FlFoIus06VmIC.png",
    "https://ellow.io/wp-content/uploads/2024/07/Coders-vs.-Programmers-1024x536.webp",
    "https://blog.hyperiondev.com/wp-content/uploads/2021/01/Web-dev-cover.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-10">
      <div className="max-w-7xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl flex overflow-hidden">

        {/* Left Content - 1/5 width */}
        <div className="w-1/5 bg-black/70 p-8 flex flex-col justify-center text-white">
          <h1 className="text-4xl font-extrabold mb-2">Limon Islam</h1>
          <p className="text-yellow-400 font-semibold mb-6">Frontend Developer</p>

          <p className="text-gray-300 mb-6 leading-relaxed text-sm">
            Crafting clean, performant frontend apps with React, Next.js, and Tailwind CSS. Passionate about UI/UX and scalable code.
          </p>

          <div className="mb-6">
            <h2 className="text-yellow-400 font-bold mb-3">Skills</h2>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• React & Next.js</li>
              <li>• Tailwind CSS</li>
              <li>• TypeScript</li>
              <li>• Redux & Git</li>
            </ul>
          </div>

          <a
            href="#contact"
            className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-center py-3 rounded-full transition"
          >
            Contact Me
          </a>
        </div>

        {/* Right Image Grid - 4/5 width */}
        <div className="w-4/5 grid grid-cols-2 grid-rows-2 gap-4 p-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform cursor-pointer"
              title={`Image ${i + 1}`}
            >
              <img
                src={src}
                alt={`Image ${i + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfileWithImageGrid;
