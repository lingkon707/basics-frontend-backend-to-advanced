"use client";

export default function App() {
  return (
    <main className="">
     
     

     <div className="flex flex-col items-center justify-center h-screen text-gray-700 px-6">
        <svg
          className="w-20 h-20 mb-4 text-gray-400 animate-pulse"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <h1 className="text-3xl font-semibold mb-3">No Data Found</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
            Clear Filters
          </button>
          <button className="px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50 transition">
            Create New Item
          </button>
          <button className="px-4 py-2 border border-gray-600 text-gray-600 rounded hover:bg-gray-100 transition">
            Help Center
          </button>
        </div>
      </div>

      

     

      
    </main>
  );
}
