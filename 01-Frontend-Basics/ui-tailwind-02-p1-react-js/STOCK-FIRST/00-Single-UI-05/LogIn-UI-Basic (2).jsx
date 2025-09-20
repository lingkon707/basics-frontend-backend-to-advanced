// components/LoginCard2.jsx
"use client";
import React from "react";

export default function LoginCard2() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <img src="/logo.svg" alt="Logo" className="h-12 mx-auto mb-4" />
          <h1 className="text-xl font-semibold">Welcome Back!</h1>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Username" className="w-full p-3 border rounded-md" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-md" />
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              Remember Me
            </label>
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-md">Login</button>
        </form>
      </div>
    </div>
  );
}
