import React from "react";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-800 px-4 py-6 md:px-12 md:py-10">
      {/* Left Main Content */}
      <div className="flex-1 max-w-4xl">
        {/* Title */}
        <h1 className="text-xl font-semibold mb-4">
          Remote Data Entry Jobs in Bangladesh (0)
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-4">
          {["🔍 Advanced Search", "Data Entry", "Location", "💵 Salary", "🎁 Benefits", "📋 Job type"].map((item, i) => (
            <button
              key={i}
              className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-100"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Sort by */}
        <button className="px-3 py-2 border rounded-md text-sm mb-4 bg-white border-gray-300 hover:bg-gray-100">
          📤 Sort by relevance
        </button>

        {/* Active filters */}
        <div className="flex items-center gap-2 mb-6">
          <div className="px-3 py-1 bg-gray-100 rounded-full text-sm border border-gray-300">
            Job category = <span className="font-semibold">Data Entry</span> ✕
          </div>
        </div>

        {/* Job alert signup box */}
        <div className="bg-gray-100 border border-gray-200 rounded-md p-6 mb-6">
          <h2 className="text-lg font-semibold mb-1">
            Don't Miss Your Next Opportunity
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Sign up to receive personalized job alerts straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-md w-full sm:w-72 border-gray-300 focus:outline-none"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
              Activate Job Alerts
            </button>
          </div>
        </div>

        {/* No jobs found message */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Oops, we were unable to find jobs.</h2>
          <button className="mt-2 px-4 py-2 bg-white border border-red-400 text-red-500 rounded hover:bg-red-50 text-sm">
            ❌ Clear all filters
          </button>
        </div>
      </div>

      {/* Right Sidebar Ad */}
      <aside className="w-full md:w-1/3 md:pl-10 mt-10 md:mt-0">
        <div className="bg-gray-50 border border-gray-200 rounded-md p-6">
          <h2 className="text-md font-bold text-orange-700 mb-2">
            Tired of getting ignored by recruiters?
          </h2>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Try this resume template</strong> — Last month, 158 job seekers landed interviews at top companies using our professionally-designed resume template.
          </p>
          <p className="text-sm text-gray-700 mb-4">
            Stand out from the competition with a template specifically optimized for applicant tracking systems.
          </p>
          <img
            src="https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/11/IIMK-ASMP-1024x576.jpg.optimal.jpg"
            alt="Resume Example"
            className="w-full border rounded"
          />
        </div>
      </aside>
    </div>
  );
}
