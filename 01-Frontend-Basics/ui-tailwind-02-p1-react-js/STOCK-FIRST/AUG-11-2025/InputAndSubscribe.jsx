import React from 'react';

export default function EmailSubscribe() {
  return (
    <div className="w-full px-4 py-10 flex justify-center bg-white">
      <div className="text-center max-w-lg w-full">
        {/* Title */}
        <h2 className="text-xl font-serif font-semibold mb-2">
          Get The Success Insider’s stories in your inbox
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-4 text-sm">
          Join Medium for free to get updates from this writer.
        </p>

        {/* Email Form */}
        <form className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-black text-white rounded-r-md hover:bg-gray-900 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
