// components/LoginCard5.jsx
"use client";
import React from "react";

export default function LoginCard5() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 to-purple-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
        <p className="text-gray-500 mb-6">Login to your account</p>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded" />
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded">Login</button>
        </form>
        <div className="my-4 text-sm text-gray-400">or continue with</div>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Facebook</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Google</button>
        </div>
      </div>
    </div>
  );
}
