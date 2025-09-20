"use client";

export default function App() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center h-screen text-gray-700">
        <svg
          className="w-16 h-16 mb-4 text-gray-400"
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
        <h1 className="text-3xl font-semibold mb-2">No Data Found</h1>
        <p className="text-gray-500">
          Try adjusting your filters or check back later.
        </p>
      </div>
     

      


    </main>
  );
}
