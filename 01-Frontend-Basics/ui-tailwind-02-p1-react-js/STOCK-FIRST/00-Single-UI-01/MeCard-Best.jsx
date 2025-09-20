import React, { useState } from "react";

export default function LingkonCardModal() {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/70 p-4">
      <div
        className="relative max-w-sm w-full bg-black/80 text-white rounded-2xl border border-green-400 shadow-2xl p-8 flex flex-col items-center"
        style={{ boxShadow: "0 0 30px rgba(0, 255, 150, 0.3)" }}
      >
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Profile Photo */}
        <img
          src="https://avatars.githubusercontent.com/u/111384782?v=4" // Replace with your photo URL
          alt="Lingkon"
          className="w-24 h-24 rounded-full border-4 border-green-400 mb-4"
        />

        {/* Name and Role */}
        <h2 className="text-green-400 text-3xl font-semibold">Lingkon</h2>
        <p className="text-gray-300 text-lg mb-4">Frontend Developer</p>

        {/* Description */}
        <p className="text-center text-gray-400 text-sm mb-6 max-w-xs">
          Passionate about building modern, responsive, and accessible web applications using React, Tailwind CSS, and JavaScript. Focused on clean code and great user experience.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3">
          {["React", "Tailwind CSS", "JavaScript", "TypeScript", "HTML5", "CSS3"].map((skill) => (
            <span
              key={skill}
              className="bg-green-700 bg-opacity-70 px-3 py-1 rounded-full text-sm font-medium text-green-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
