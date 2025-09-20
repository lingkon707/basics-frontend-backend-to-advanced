import React from 'react';

const HiringDesignerIntern = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b1a2e] to-[#2d254d] text-white flex flex-col justify-between items-center px-4 py-10 relative">
      
      {/* Top Left Logo */}
      <div className="absolute top-6 left-6">
        <div className="text-3xl font-bold text-white">✔️</div> {/* Replace with logo if needed */}
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center text-center mt-20">
        {/* Light Bulb Icon */}
        <div className="text-yellow-400 text-4xl mb-3">💡</div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400">
          WE ARE HIRING!
        </h1>

        {/* Subtext */}
        <p className="mt-2 text-sm sm:text-base md:text-lg tracking-wide font-medium">
          WEB UI/UX DESIGNER INTERN
        </p>
      </div>

      {/* Footer */}
      <div className="w-full mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-300 pb-4">
        <a href="https://vitsoftsolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          vitasoftsolutions.com
        </a>
        <a href="https://facebook.com/vitasoft.solutions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          facebook.com/vitasoft.solutions
        </a>
        <a href="https://instagram.com/vitasoft_solutions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          vitasoft_solutions
        </a>
      </div>
    </div>
  );
};

export default HiringDesignerIntern;
