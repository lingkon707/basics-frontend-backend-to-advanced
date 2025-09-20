import React from 'react';

const PurchaseSection = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center px-8 py-16">
      <div className="text-center max-w-5xl w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          You are at the right step now
        </h1>
        <p className="text-lg sm:text-2xl mb-6">
          Purchase Tunis & Build Your Super Fast NextJS & Bootstrap 5 Based Portfolio Template.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
        >
          PURCHASE NOW
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 17l5-5m0 0l-5-5m5 5H3"
            />
          </svg>
        </a>
        <footer className="mt-12 text-center text-sm text-gray-400">
          <p>&copy; 2025 Tunis – Personal Portfolio NextJS Template</p>
          <p>Designed with ❤️ by <span className="text-yellow-500">IB-THEMES</span></p>
        </footer>
      </div>
    </div>
  );
};

export default PurchaseSection;
