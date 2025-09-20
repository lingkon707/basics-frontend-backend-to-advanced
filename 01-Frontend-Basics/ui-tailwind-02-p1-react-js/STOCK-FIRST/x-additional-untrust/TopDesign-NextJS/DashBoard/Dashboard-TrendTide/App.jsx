import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans text-gray-900">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="text-3xl font-extrabold text-indigo-600">TrendTide</div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm">
            <a
              href="#"
              className="px-3 py-1 rounded-full bg-yellow-300 text-yellow-900"
              aria-current="page"
            >
              Dashboard
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Content
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Finance
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Reports
            </a>
          </nav>
        </div>

        {/* Right side icons & user */}
        <div className="flex items-center space-x-5">
          <button
            aria-label="Search"
            className="p-2 rounded-full hover:bg-gray-200 transition"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button
            aria-label="Notifications"
            className="p-2 rounded-full hover:bg-gray-200 transition"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9.33-5M13 21h-2a2 2 0 002-2h0a2 2 0 002 2z" />
            </svg>
          </button>
          <button
            aria-label="Settings"
            className="p-2 rounded-full hover:bg-gray-200 transition"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 000-3 1.65 1.65 0 000 3zm-2.35 4.79l.69-1.19a1.65 1.65 0 00-2.27-2.27l-1.19.69a6.5 6.5 0 01-2.58 0l-1.19-.69a1.65 1.65 0 00-2.27 2.27l.69 1.19a6.5 6.5 0 010 2.58l-.69 1.19a1.65 1.65 0 002.27 2.27l1.19-.69a6.5 6.5 0 012.58 0l1.19.69a1.65 1.65 0 002.27-2.27l-.69-1.19a6.5 6.5 0 010-2.58z" />
            </svg>
          </button>

          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-600">
            <Image
              src="/user.jpg"
              alt="User avatar"
              width={36}
              height={36}
              objectFit="cover"
            />
          </div>
        </div>
      </header>

      {/* Main grid */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column: Stats */}
        <section className="lg:col-span-3 space-y-6">
          {/* Followers */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <div className="flex items-center space-x-2 text-indigo-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M5.121 17.804A9.955 9.955 0 0112 15a9.955 9.955 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-semibold text-sm">Followers</span>
            </div>
            <p className="text-3xl font-extrabold mt-3">128,420</p>
            <p className="mt-1 text-sm text-green-600 font-semibold flex items-center space-x-1">
              <span>+25%</span>
              <svg
                className="w-4 h-4 inline-block"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path d="M5 15l7-7 7 7" />
              </svg>
            </p>
          </div>

          {/* Likes */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <div className="flex items-center space-x-2 text-red-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M14 9l-2-2-2 2M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6M14 15v-3a3 3 0 00-6 0v3" />
              </svg>
              <span className="font-semibold text-sm">Likes</span>
            </div>
            <p className="text-3xl font-extrabold mt-3">66,816</p>
            <p className="mt-1 text-sm text-green-600 font-semibold flex items-center space-x-1">
              <span>+32%</span>
              <svg
                className="w-4 h-4 inline-block"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path d="M5 15l7-7 7 7" />
              </svg>
            </p>
          </div>
        </section>

        {/* Middle column: CTR and Audience Growth */}
        <section className="lg:col-span-6 space-y-6">
          {/* Click-through rate (CTR) */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold text-gray-700 text-sm mb-2">
              Click-through rate (CTR)
            </h2>
            <p className="text-4xl font-extrabold mb-1">2,420</p>
            <span className="inline-block bg-green-100 text-green-600 px-3 py-0.5 rounded-full text-xs font-semibold">
              +28%
            </span>
            <div className="mt-6 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 italic text-sm select-none">
              {/* Placeholder bar chart */}
              Bar chart placeholder
            </div>
          </div>

          {/* Audience Growth */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-700 text-sm">Audience Growth</h2>
              <div className="space-x-2 text-xs text-gray-400 font-medium">
                <button className="hover:text-indigo-600">Today</button>
                <button className="hover:text-indigo-600">This Week</button>
                <button className="bg-yellow-300 text-yellow-900 rounded-full px-3 py-0.5 font-semibold">
                  This Year
                </button>
              </div>
            </div>
            <div className="h-40 bg-gradient-to-b from-indigo-100 to-indigo-50 rounded-lg flex items-center justify-center text-indigo-300 italic text-sm select-none">
              Line graph placeholder
            </div>
          </div>
        </section>

        {/* Right column: Map, Sentiment, and Customers */}
        <section className="lg:col-span-3 space-y-6">
          {/* Audience Location */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-3 text-sm">Audience Location</h3>
            <div className="h-48 rounded-lg overflow-hidden mb-3 bg-indigo-100 relative">
              {/* Placeholder for world map */}
              <p className="absolute inset-0 flex items-center justify-center text-indigo-300 italic text-sm select-none">
                World map placeholder
              </p>
            </div>
            <div className="space-y-2 text-xs">
              {[
                { country: "United States", percent: 50, flag: "🇺🇸" },
                { country: "Canada", percent: 20, flag: "🇨🇦" },
                { country: "Ukraine", percent: 20, flag: "🇺🇦" },
                { country: "Spain", percent: 10, flag: "🇪🇸" },
                { country: "United Kingdom", percent: 10, flag: "🇬🇧" },
              ].map(({ country, percent, flag }) => (
                <div key={country} className="flex items-center space-x-2">
                  <span className="text-lg">{flag}</span>
                  <span className="flex-1 text-gray-600">{country}</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-indigo-600 rounded-full"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-gray-500">{percent}%</span>
                </div>
              ))}
            </div>
            <button className="mt-3 text-indigo-600 text-xs font-semibold hover:underline">
              Export Report
            </button>
          </div>

          {/* Sentiment Analysis */}
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="font-semibold text-gray-700 mb-4 text-sm">Sentiment Analysis</h3>
            <div className="mb-3">
              <div className="relative w-24 h-24 mx-auto">
                <svg
                  className="w-24 h-24"
                  viewBox="0 0 100 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="50" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F87171" offset="0%" />
                      <stop stopColor="#FBBF24" offset="50%" />
                      <stop stopColor="#34D399" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M10 45 Q 50 0 90 45"
                    stroke="url(#gradient)"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold text-gray-900">
                  4.85
                </div>
              </div>
              <div className="text-green-600 text-sm font-semibold mt-2">Positive</div>
            </div>
          </div>

          {/* Total Customers */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-4 text-sm">Total customers</h3>
            <p className="text-3xl font-extrabold mb-2">2,420</p>
            <p className="text-green-600 font-semibold flex items-center space-x-1 mb-4">
              <span>+25%</span>
              <svg
                className="w-4 h-4 inline-block"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path d="M5 15l7-7 7 7" />
              </svg>
            </p>
            <div className="flex -space-x-3">
              {[
                "/avatar1.jpg",
                "/avatar2.jpg",
                "/avatar3.jpg",
                "/avatar4.jpg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                >
                  <Image src={src} alt="Customer avatar" width={40} height={40} objectFit="cover" />
                </div>
              ))}
              <button className="ml-3 text-indigo-600 text-xs font-semibold hover:underline">
                Show All →
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
