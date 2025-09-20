export default function HeaderWithSearch() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h1 className="text-white text-2xl font-semibold">My Project</h1>
        <div className="w-80">
          <div className="flex items-center border border-gray-300 rounded-full shadow-md bg-white focus-within:ring-2 focus-within:ring-blue-500 transition duration-150">
            <input
              type="text"
              className="flex-grow px-5 py-3 rounded-full focus:outline-none"
              placeholder="Search programming languages or frameworks..."
            />
            <button
              type="button"
              className="pr-5 text-blue-600 hover:text-blue-800 focus:outline-none"
              aria-label="Search"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
