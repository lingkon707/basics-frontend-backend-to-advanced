import React, { useState } from "react";

export default function CssMasterclassModal() {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/70 p-4">
      {/* Modal container */}
      <div className="relative max-w-md w-full bg-black/80 text-white rounded-2xl border border-green-400 shadow-2xl p-6 animate-fade-in backdrop-blur-xl"
           style={{ boxShadow: "0 0 30px rgba(0, 255, 150, 0.3)" }}>

        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Logo & Title */}
        <div className="text-center">
          <img
            src="https://cssmasterclass.io/favicon.ico"
            alt="CSS Masterclass logo"
            className="mx-auto w-12 h-12 mb-2 drop-shadow-lg"
          />
          <h2 className="text-2xl font-bold">
            <span className="text-green-400">CSS</span>MASTERCLASS<span className="text-gray-400">.IO</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-center mt-4 text-base sm:text-lg leading-relaxed text-gray-100">
          Learn CSS with 🎓 interactive courses,<br />
          📺 videos, and 🧑‍💻 hands-on projects.
        </p>

        {/* CTA Button */}
        <div className="mt-6 text-center">
          <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-200 hover:shadow-green-500/50">
            Get started for Free
          </button>
        </div>

        {/* Frontend Developer Card */}
        <div className="mt-10 bg-gray-900 bg-opacity-70 rounded-xl p-4 flex items-center space-x-4 border border-green-400 shadow-md">
          <img
            src="https://avatars.githubusercontent.com/u/111384782?v=4" // Replace with your photo URL
            alt="Lingkon"
            className="w-16 h-16 rounded-full border-2 border-green-400"
          />
          <div>
            <h3 className="text-lg font-semibold text-green-400">Lingkon</h3>
            <p className="text-gray-300">Frontend Developer</p>
            <p className="text-gray-400 text-sm mt-1 max-w-xs">
              Passionate about building modern, performant, and accessible web apps with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
