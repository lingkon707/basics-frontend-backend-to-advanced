"use client"





import React from 'react';

export default function App() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-black via-purple-900 to-blue-900 p-6">
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-aurora">
        Aurora
      </h1>
      <style jsx>{`
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
      `}</style>
    </main>
  );
}

