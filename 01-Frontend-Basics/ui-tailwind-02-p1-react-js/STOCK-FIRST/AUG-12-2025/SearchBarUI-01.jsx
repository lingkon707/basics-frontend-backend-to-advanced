export default function SearchBarUI() {
  return (
    <div className="relative max-w-lg mx-auto mt-20">
      <div className="flex items-center border border-gray-300 rounded-full shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition duration-150">
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
  );
}
