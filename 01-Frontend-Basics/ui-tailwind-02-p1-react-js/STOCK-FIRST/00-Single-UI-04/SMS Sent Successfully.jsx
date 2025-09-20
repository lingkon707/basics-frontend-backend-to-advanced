import React from "react";

export default function SmsSent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100 px-4 py-16">
      <div className="bg-white shadow-xl rounded-3xl p-8 sm:p-10 max-w-md w-full text-center border border-sky-100">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-sky-800 mb-3">
          SMS Sent Successfully!
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Your message has been delivered. Please wait for a response or continue your task.
        </p>

        <a
          href="/"
          className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
        >
          ⬅ Back to Home
        </a>
      </div>
    </div>
  );
}
