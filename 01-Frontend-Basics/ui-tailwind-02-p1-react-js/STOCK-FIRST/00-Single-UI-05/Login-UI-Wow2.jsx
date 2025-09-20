// components/LoginCard5.jsx
"use client";
import React from "react";

export default function LoginCard5() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Welcome Back 👋</h2>
        <p className="text-gray-500 mb-6 text-sm">Log in to your account</p>

        <form className="space-y-4 text-left">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition">
            Login
          </button>
        </form>

        <p className="my-4 text-sm text-gray-400">or continue with</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Facebook</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">Google</button>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-purple-600 font-medium hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
