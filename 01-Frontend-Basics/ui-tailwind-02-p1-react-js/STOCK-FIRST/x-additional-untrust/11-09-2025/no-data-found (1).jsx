"use client";

export default function App() {
  return (
    <main className="">
     
     

      <div className="flex flex-col items-center justify-center h-screen text-gray-700 px-4">
        {/* Simple box illustration */}
        <svg
          className="w-24 h-24 mb-4 text-gray-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="7" width="18" height="13" rx="2" ry="2" />
          <path d="M16 3h-8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" />
        </svg>
        <h1 className="text-3xl font-semibold mb-2">Oops! No data found.</h1>
        <p className="text-gray-500 mb-4 text-center max-w-sm">
          Looks like there’s nothing here right now. Try again later or refresh.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Reload
        </button>
      </div>

     

      
    </main>
  );
}
