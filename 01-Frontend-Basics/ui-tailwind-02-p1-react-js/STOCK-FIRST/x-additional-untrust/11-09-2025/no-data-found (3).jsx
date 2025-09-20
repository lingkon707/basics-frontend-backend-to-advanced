"use client";

export default function App() {
  return (
    <main className="">
     
     

      <div className="flex flex-col items-center justify-center h-screen text-gray-700 px-6 text-center">
        <svg
          className="w-28 h-28 mb-4 text-yellow-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9 10h.01M15 10h.01M9 14h6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="text-3xl font-semibold mb-2">No Data Found.</h1>
        <p className="text-gray-500 mb-4">The data is playing hide and seek!</p>
        <p className="text-gray-400 italic">Try again or check back later.</p>
      </div>

     

      
    </main>
  );
}
