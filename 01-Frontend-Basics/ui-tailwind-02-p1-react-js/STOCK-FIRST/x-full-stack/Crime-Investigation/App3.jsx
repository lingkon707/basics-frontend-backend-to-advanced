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
    <div className="flex h-screen bg-gradient-to-r from-cyan-50 to-indigo-100 text-gray-900 font-sans">

      {/* Sidebar */}
      <aside className="flex flex-col w-80 bg-white shadow-lg p-8 overflow-y-auto border-r border-indigo-200">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-8 tracking-wide select-none">
          User Credentials
        </h2>
        {users.map(({ username, password }) => (
          <div
            key={username}
            className="mb-6 p-5 bg-indigo-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-default"
          >
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m0 0h3m-3 0H9" />
              </svg>
              <p className="font-semibold text-indigo-700 text-lg select-text">
                {username}
              </p>
            </div>
            <p className="text-indigo-900 font-medium select-text">
              Password: <span className="font-semibold">{password}</span>
            </p>
          </div>
        ))}
      </aside>

      {/* Login Form */}
      <main className="flex flex-1 justify-center items-center px-10">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-12
          ring-1 ring-indigo-200 ring-opacity-50
          hover:ring-opacity-100
          transition-all duration-300"
        >
          <h1 className="text-4xl font-extrabold mb-10 text-indigo-700 text-center tracking-wide">
            Welcome Back
          </h1>
          <form onSubmit={handleLogin} className="space-y-8">
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-gray-700 font-semibold"
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
                className="w-full px-5 py-3 border border-indigo-300 rounded-2xl
                  focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-500
                  transition"
                autoComplete="username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-gray-700 font-semibold"
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
                className="w-full px-5 py-3 border border-indigo-300 rounded-2xl
                  focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-500
                  transition"
                autoComplete="current-password"
              />
            </div>

            {errorMessage && (
              <p className="text-red-600 font-semibold text-center">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600
                text-white py-3 rounded-2xl font-bold text-lg hover:from-indigo-700 hover:to-cyan-700
                shadow-lg shadow-indigo-300/50 transition"
            >
              Log In
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
