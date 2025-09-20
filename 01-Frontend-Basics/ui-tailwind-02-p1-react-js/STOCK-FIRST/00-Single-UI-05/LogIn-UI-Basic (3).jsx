// components/LoginCard3.jsx
"use client";
import React from "react";

export default function LoginCard3() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-cover bg-center hidden md:block" style={{ backgroundImage: "url('/login-image.jpg')" }}></div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-10">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-3 border rounded" />
            <button className="w-full bg-black text-white py-3 rounded">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}
