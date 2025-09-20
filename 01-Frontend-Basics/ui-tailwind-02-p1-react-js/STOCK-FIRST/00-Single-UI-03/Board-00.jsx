import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 text-gray-800 flex flex-col md:flex-row">
      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-4">Remote Data Entry Jobs (0)</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {["Data Entry", "Remote", "Sort by"].map((filter, i) => (
            <button
              key={i}
              className="text-sm px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Empty State */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
          <h2 className="text-xl font-semibold mb-2">No jobs found</h2>
          <p className="text-sm text-gray-500 mb-4">
            Try changing your filters or check back later.
          </p>
          <button className="px-4 py-2 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200">
            Clear Filters
          </button>
        </div>
      </main>

      {/* Sidebar CTA */}
      <aside className="w-full md:w-1/3 mt-8 md:mt-0 md:pl-8">
        <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-lg shadow-sm text-center">
          <h3 className="text-md font-semibold text-indigo-700 mb-2">
            Want better job matches?
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Create alerts to get notified about new jobs.
          </p>
          <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Create Alert
          </button>
        </div>
      </aside>
    </div>
  );
}
