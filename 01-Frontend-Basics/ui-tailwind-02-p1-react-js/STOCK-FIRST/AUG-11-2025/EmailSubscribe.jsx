import React from 'react';

export default function EmailSubscribe() {
  return (
    <div className="w-full bg-white py-14 px-6 flex justify-center">
      <div className="text-center w-full max-w-xl">
        {/* Title */}
        <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-3">
          Get The Success Insider’s stories in your inbox
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm mb-6">
          Join Medium for free to get updates from this writer.
        </p>

        {/* Email Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-full border border-gray-300 bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
