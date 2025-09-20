import React from 'react';

export default function EmailSubscribe() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-gray-100 py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Stay Updated with The Success Insider
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Get insightful stories delivered to your inbox. Join for free — no spam, ever.
        </p>

        {/* Subscription Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full sm:w-2/3 px-5 py-3 rounded-full border border-gray-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          />
          <button
            type="submit"
            className="px-6 py-3 w-full sm:w-auto bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
