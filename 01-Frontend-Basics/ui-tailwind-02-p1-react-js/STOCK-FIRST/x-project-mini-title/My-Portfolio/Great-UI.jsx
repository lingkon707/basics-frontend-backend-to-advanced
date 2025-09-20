"use client";
import React from "react";

const DeveloperProfileUI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 text-white">

        {/* Developer Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl flex flex-col items-center space-y-4">
          <img
            src="https://ellow.io/wp-content/uploads/2024/07/Coders-vs.-Programmers-1024x536.webp"
            alt="Lingkon Developer"
            className="rounded-xl w-full h-72 object-cover"
          />
          <h2 className="text-2xl font-bold text-center">Limon Islam</h2>
          <p className="text-gray-300 text-center text-sm">Frontend Developer | React, Next.js, Tailwind</p>

          {/* Skills */}
          <div className="grid grid-cols-3 gap-4 w-full text-center mt-4">
            <div>
              <p className="text-xl font-bold text-yellow-400">1.5+</p>
              <p className="text-xs text-gray-300">Years Exp</p>
            </div>
            <div>
              <p className="text-xl font-bold text-yellow-400">20+</p>
              <p className="text-xs text-gray-300">Projects</p>
            </div>
            <div>
              <p className="text-xl font-bold text-yellow-400">3</p>
              <p className="text-xs text-gray-300">Tech Stacks</p>
            </div>
          </div>

          <a
            href="#"
            className="mt-4 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full"
          >
            View Portfolio
          </a>
        </div>

        {/* Dev Activity Panel */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl space-y-6">
          <h3 className="text-xl font-semibold">Recent Highlights</h3>

          {/* Activity feed */}
          <ul className="text-sm space-y-3">
            <li>🔥 Deployed a Next.js eCommerce app with Stripe</li>
            <li>⚡ Open-sourced a React UI component library</li>
            <li>🌐 Helped 500K+ users via YouTube frontend tutorials</li>
            <li>📦 Built a Tailwind-based admin dashboard template</li>
          </ul>

          {/* Tech Stack */}
          <div className="mt-6">
            <h4 className="font-bold mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">React</span>
              <span className="bg-white text-black px-3 py-1 rounded-full font-semibold">Next.js</span>
              <span className="bg-blue-500 px-3 py-1 rounded-full font-semibold">Tailwind CSS</span>
              <span className="bg-gray-100 text-black px-3 py-1 rounded-full font-semibold">TypeScript</span>
              <span className="bg-black border px-3 py-1 rounded-full font-semibold">GitHub</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#"
            className="inline-block mt-4 text-yellow-400 hover:underline font-medium"
          >
            See Full Resume →
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfileUI;
