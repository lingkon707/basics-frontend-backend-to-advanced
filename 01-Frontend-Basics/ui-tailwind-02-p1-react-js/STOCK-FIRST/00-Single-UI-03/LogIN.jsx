import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center font-inter">
      <div className="bg-white shadow-md rounded-md px-8 py-10 w-full max-w-sm border">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            metro<span className="text-green-500">∞</span>pinion
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-center text-lg font-semibold text-gray-700 mb-6">
          Enjoy our surveys today
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded shadow-md transition"
          >
            Sign in
          </button>
        </form>

        {/* Forgot Password */}
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-gray-600 hover:text-green-600">
            Forgot Password
          </a>
        </div>
      </div>
    </div>
  );
}
