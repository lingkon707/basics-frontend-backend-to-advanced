"use client";

import { useState } from "react";
import BigLoader from "@/app/components/BigLoader";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (password !== "1234") {
        setError("Wrong password! Try again.");
      } else {
        alert("Login successful!");
      }
    }, 2500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      {loading && <BigLoader />}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-md w-full max-w-md space-y-6 z-10"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && <div className="text-red-600 text-sm font-medium text-center">{error}</div>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
