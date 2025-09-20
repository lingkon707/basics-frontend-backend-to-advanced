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
    <div className="flex h-screen bg-gradient-to-tr from-blue-900 via-indigo-900 to-purple-900 text-gray-100 font-sans">

      {/* Sidebar */}
      <aside className="flex flex-col w-72 bg-gradient-to-b from-indigo-800 to-blue-900 shadow-xl p-8 overflow-y-auto">
        <div className="flex items-center mb-12">
          <svg
            className="w-10 h-10 text-cyan-400 mr-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11c0-1.1.9-2 2-2h4a2 2 0 012 2v6a2 2 0 01-2 2h-4a2 2 0 01-2-2v-6z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 11H4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2v-6a2 2 0 00-2-2z"
            ></path>
          </svg>
          <h1 className="text-3xl font-extrabold tracking-wider select-none">SecureApp</h1>
        </div>

        <h2 className="text-xl font-semibold mb-6 tracking-wide border-b border-cyan-600 pb-2">
          User Credentials
        </h2>

        <div className="space-y-5">
          {users.map(({ username, password }) => (
            <div
              key={username}
              className="flex flex-col p-4 bg-indigo-700 bg-opacity-40 rounded-xl shadow-md hover:bg-indigo-600 cursor-default transition"
            >
              <div className="flex items-center mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-cyan-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A9 9 0 1118.88 6.195M15 12h.01"
                  />
                </svg>
                <p className="font-semibold text-cyan-300 select-text">{username}</p>
              </div>
              <p className="text-cyan-200 select-text">
                Password: <span className="font-semibold">{password}</span>
              </p>
            </div>
          ))}
        </div>
      </aside>

      {/* Login Form */}
      <main className="flex flex-1 justify-center items-center px-12">
        <div
          className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-md rounded-3xl
            shadow-lg border border-cyan-400 border-opacity-30 p-10
            transition-transform duration-300 hover:scale-[1.02]"
        >
          <h1 className="text-4xl font-extrabold mb-10 text-cyan-300 text-center tracking-wide">
            Welcome Back
          </h1>

          <form onSubmit={handleLogin} className="space-y-8">
            <div>
              <label
                htmlFor="username"
                className="block mb-2 font-semibold text-cyan-200"
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
                className="w-full px-5 py-3 rounded-xl bg-white bg-opacity-20 border border-cyan-300 border-opacity-40
                  text-black placeholder-cyan-300
                  focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                  transition"
                autoComplete="username"
                spellCheck="false"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 font-semibold text-cyan-200"
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
                className="w-full px-5 py-3 rounded-xl bg-white bg-opacity-20 border border-cyan-300 border-opacity-40
                  text-black placeholder-cyan-300
                  focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                  transition"
                autoComplete="current-password"
                spellCheck="false"
              />
            </div>

            {errorMessage && (
              <p className="text-red-400 font-semibold text-center">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700
                text-white py-3 rounded-2xl font-bold text-lg shadow-lg shadow-cyan-500/50
                transition"
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
