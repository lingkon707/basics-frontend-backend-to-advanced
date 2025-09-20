"use client"




import React from 'react';

export default function App() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-black via-purple-900 to-blue-900 p-6">
      <div className="relative perspective-1000">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-aurora transform-gpu transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-6">
          Aurora
        </h1>
      </div>
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes aurora {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-aurora {
          background-size: 200% 200%;
          animation: aurora 4s ease-in-out infinite;
        }
        .rotate-y-12 {
          transform-style: preserve-3d;
          transform: rotateY(12deg);
        }
        .rotate-x-6 {
          transform-style: preserve-3d;
          transform: rotateX(6deg);
        }
      `}</style>
    </main>
  );
}

