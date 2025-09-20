import React from "react";

export default function CssMasterclassModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Modal box */}
      <div className="relative max-w-xl w-full bg-gradient-to-br from-black to-gray-900 rounded-xl p-6 shadow-2xl border border-green-400"
           style={{ boxShadow: "0 0 40px rgba(0, 255, 150, 0.2)" }}>
        
        {/* Branding */}
        <div className="text-center">
          <img
            src="https://cssmasterclass.io/favicon.ico"
            alt="CSS Masterclass logo"
            className="mx-auto w-10 h-10 mb-2"
          />
          <h2 className="text-white text-xl font-bold">
            <span className="text-green-400">CSS</span>MASTERCLASS<span className="text-gray-500">.IO</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-white mt-4 text-center text-lg leading-relaxed">
          Learn CSS with 🎓 online interactive courses,<br />
          📺 educational videos, and 🧑‍💻 project-building tutorials.
        </p>

        {/* CTA Button */}
        <div className="mt-6 text-center">
          <button className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-2 px-6 rounded-lg hover:from-green-600 hover:to-green-800 transition">
            Get started for Free
          </button>
        </div>
      </div>
    </div>
  );
}
