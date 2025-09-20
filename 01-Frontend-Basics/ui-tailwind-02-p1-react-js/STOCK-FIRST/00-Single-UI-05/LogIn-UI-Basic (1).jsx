// components/LoginCard1.jsx
"use client";
import React from "react";

export default function LoginCard1() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded" />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded">Login</button>
        </form>
      </div>
    </div>
  );
}
