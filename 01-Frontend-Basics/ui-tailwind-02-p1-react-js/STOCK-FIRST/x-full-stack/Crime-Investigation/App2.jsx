'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const users = [
  { username: "police", password: "1234" },
  { username: "court", password: "123" },
  { username: "cia", password: "12" },
];

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      router.push(`/${user.username}`);
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">

      {/* Sidebar */}
      <aside className="flex flex-col w-72 bg-white shadow-lg p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">User Credentials</h2>
        {users.map(({ username, password }) => (
          <div
            key={username}
            className="mb-4 p-4 bg-indigo-50 rounded-lg shadow-sm hover:shadow-md transition cursor-default"
          >
            <p className="font-semibold text-indigo-700">Username:</p>
            <p className="mb-2 text-indigo-900">{username}</p>
            <p className="font-semibold text-indigo-700">Password:</p>
            <p className="text-indigo-900">{password}</p>
          </div>
        ))}
      </aside>

      {/* Login Form */}
      <main className="flex flex-1 justify-center items-center px-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-10">
          <h1 className="text-4xl font-extrabold mb-8 text-indigo-600 text-center">
            Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block mb-1 font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter your username"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                autoComplete="username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-1 font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                autoComplete="current-password"
              />
            </div>

            {errorMessage && (
              <p className="text-red-600 text-center">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
