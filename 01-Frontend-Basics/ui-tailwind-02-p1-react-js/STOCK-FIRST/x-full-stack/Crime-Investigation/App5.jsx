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
    <div className="flex h-screen w-screen overflow-hidden font-bold">

      {/* Left Side - Diagonal & vertical text */}
      <section
        className="relative flex-1 bg-coral-400 text-cream-50 flex flex-col items-center justify-center
          before:absolute before:top-0 before:left-0 before:w-full before:h-full
          before:bg-gradient-to-br before:from-coral-500 before:to-coral-300 before:opacity-80
          before:clip-path-[polygon(0_0,100%_0,100%_100%,0_85%)]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)" }}
      >
        {/* <div className="rotate-[270deg] whitespace-nowrap tracking-widest text-4xl select-none mb-20"> */}
        <div className=" text-4xl select-none mb-20">
          USER CREDENTIALS
        </div>

        <div className="space-y-10">
          {users.map(({ username, password }) => (
            <div
              key={username}
              className="transform rotate-[15deg] bg-cream-50 text-coral-600 px-10 py-4 rounded-xl
                shadow-lg cursor-default hover:scale-105 hover:shadow-2xl transition"
            >
              <p className="mb-1 text-xl">{username.toUpperCase()}</p>
              <p className="italic tracking-wide">Password: <span className="font-normal">{password}</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* Right Side - Speech bubble shaped login */}
      <section className="relative flex-1 flex items-center justify-center bg-slate-900 text-cream-50 px-12">

        <div className="relative bg-cream-50 text-slate-900 rounded-[2rem_2rem_0_2rem] p-12 w-full max-w-md
          shadow-[10px_10px_0px_#ef4444] before:absolute before:-bottom-10 before:left-14
          before:w-16 before:h-16 before:bg-cream-50 before:rounded-tl-[3rem] before:rotate-[-20deg]
          before:shadow-[10px_10px_0px_#ef4444]
          transition-transform hover:scale-[1.05]">

          <h1 className="text-5xl font-extrabold mb-12 bg-cyan-400 text-white tracking-tight select-none">
            LOG IN MUST
          </h1>

          <form onSubmit={handleLogin} className="space-y-8">
            <div>
              <label
                htmlFor="username"
                className="block mb-3 text-xl font-semibold"
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
                placeholder="Your username"
                className="w-full bg-black text-white rounded-lg border border-slate-400 px-5 py-3
                  focus:outline-none focus:ring-2 focus:ring-coral-400 transition"
                autoComplete="username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-3 text-xl font-semibold"
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
                placeholder="Your password"
                className="w-full bg-black text-white rounded-lg border border-slate-400 px-5 py-3
                  focus:outline-none focus:ring-2 focus:ring-coral-400 transition"
                autoComplete="current-password"
              />
            </div>

            {errorMessage && (
              <p className="text-red-600 font-bold text-center">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-blue-700 text-white bg-coral-400 hover:bg-coral-500 text-cream-50 font-extrabold
                py-4 rounded-lg text-xl shadow-lg transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
