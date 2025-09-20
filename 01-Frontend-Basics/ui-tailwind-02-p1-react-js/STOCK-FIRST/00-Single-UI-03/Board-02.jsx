import React from "react";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-800 p-4 md:p-8">
      {/* Left Main Content */}
      <main className="flex-1 max-w-4xl mx-auto md:mx-0">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          🔍 Remote Data Entry Jobs in Bangladesh <span className="text-gray-500">(0)</span>
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          {["Advanced Search", "Data Entry", "Location", "Salary", "Benefits", "Job Type"].map((item, i) => (
            <button
              key={i}
              className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-indigo-50 transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Sort Option */}
        <div className="mb-6">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-100">
            🔃 Sort by relevance
          </button>
        </div>

        {/* Active Filters Display */}
        <div className="mb-8 flex flex-wrap gap-3 items-center">
          <div className="px-3 py-1 bg-indigo-100 text-indigo-700 border border-indigo-300 rounded-full text-sm">
            Job Category: <span className="font-medium">Data Entry</span>
          </div>
          <div className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded-full text-sm">
            Type: <span className="font-medium">Remote</span>
          </div>
          <div className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded-full text-sm">
            Salary: <span className="font-medium">Unspecified</span>
          </div>
        </div>

        {/* Email Alert Box */}
        <div className="bg-white border border-gray-200 rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold mb-1">📬 Don't Miss Your Next Opportunity</h2>
          <p className="text-sm text-gray-600 mb-4">
            Get personalized job alerts delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
              Activate Alerts
            </button>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-12 border border-dashed border-gray-300 rounded-md bg-white shadow-sm">
          <h3 className="text-xl font-semibold mb-2">😔 No jobs found</h3>
          <p className="text-sm text-gray-600 mb-4">
            Try changing filters or check back later — new jobs are added regularly.
          </p>
          <button className="mt-2 px-4 py-2 border text-sm border-red-400 text-red-500 rounded hover:bg-red-50">
            ❌ Clear all filters
          </button>
        </div>
      </main>

      {/* Sidebar Advertisement */}
      <aside className="w-full md:w-80 md:pl-10 mt-10 md:mt-0">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-bold text-orange-700 mb-2 leading-snug">
            🚀 Tired of getting ignored by recruiters?
          </h2>
          <p className="text-sm text-gray-700 mb-2">
            Our professionally-designed resume template helped <strong>158+ job seekers</strong> get interviews last month!
          </p>
          <p className="text-sm text-gray-700 mb-4">
            Optimized for Applicant Tracking Systems (ATS) and ready to help you stand out.
          </p>
          <img
            src="https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/11/IIMK-ASMP-1024x576.jpg.optimal.jpg"
            alt="Resume Preview"
            className="w-full rounded border mb-4"
          />
          <button className="w-full px-4 py-2 text-center bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">
            Try the Template →
          </button>
        </div>
      </aside>
    </div>
  );
}
