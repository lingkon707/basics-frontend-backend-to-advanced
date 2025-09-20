import React, { useState, useEffect, useRef } from "react";

export default function LoginWithBlock() {
  const correctId = "admin";
  const correctPass = "1234";

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [blocked, setBlocked] = useState(false);
  const [blockTimeLeft, setBlockTimeLeft] = useState(0);
  const [message, setMessage] = useState("");

  const timerRef = useRef(null);

  useEffect(() => {
    if (blocked) {
      setBlockTimeLeft(10);
      timerRef.current = setInterval(() => {
        setBlockTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            setBlocked(false);
            setAttempts(0);
            setMessage("");
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [blocked]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (blocked) return;

    if (id === correctId && password === correctPass) {
      setMessage("✅ Login successful!");
      setAttempts(0);
    } else {
      setAttempts((a) => a + 1);
      setMessage(`❌ Wrong ID or Password. Attempt ${attempts + 1} of 3.`);
      if (attempts + 1 >= 3) {
        setBlocked(true);
        setMessage("🚫 Too many wrong attempts. Try again in 10 seconds.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r bg-green-900 flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-3xl font-extrabold text-red-700 mb-8 text-center">
          Secure Login
        </h1>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-red-700 mb-1">
              User ID
            </label>
            <input
              id="id"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              disabled={blocked}
              className="w-full px-4 py-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 disabled:bg-red-100"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-red-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={blocked}
              className="w-full px-4 py-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 disabled:bg-red-100"
              required
            />
          </div>
          <button
            type="submit"
            disabled={blocked}
            className={`w-full py-3 rounded-lg font-semibold text-white shadow-lg transition ${
              blocked
                ? "bg-red-400 cursor-not-allowed"
                : "bg-red-700 hover:bg-red-800"
            }`}
          >
            Login
          </button>
        </form>

        {message && (
          <p
            className={`mt-6 text-center font-medium ${
              blocked ? "text-red-700" : "text-gray-700"
            }`}
          >
            {blocked
              ? `${message} (${blockTimeLeft}s left)`
              : message}
          </p>
        )}
      </div>
    </div>
  );
}
