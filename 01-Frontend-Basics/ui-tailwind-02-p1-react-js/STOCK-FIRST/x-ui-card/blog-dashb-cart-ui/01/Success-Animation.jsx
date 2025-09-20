import React, { useState, useEffect } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(null); // null = untouched, true = valid, false = invalid
  const [submitted, setSubmitted] = useState(false);

  // Simple email regex validation
  useEffect(() => {
    if (email === "") {
      setValid(null);
    } else {
      const isValid = /^\S+@\S+\.\S+$/.test(email);
      setValid(isValid);
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col"
          noValidate
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Subscribe to our Newsletter
          </h2>

          <label htmlFor="email" className="mb-2 font-medium text-gray-700">
            Email Address
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={`px-4 py-3 rounded-md border focus:outline-none transition
              ${
                valid === null
                  ? "border-gray-300 focus:border-indigo-500"
                  : valid
                  ? "border-green-500 focus:border-green-600"
                  : "border-red-500 focus:border-red-600"
              }
            `}
            aria-invalid={valid === false}
            aria-describedby="email-error"
            required
          />

          {valid === false && (
            <p id="email-error" className="text-red-600 mt-1 text-sm">
              Please enter a valid email address.
            </p>
          )}

          <button
            type="submit"
            disabled={!valid}
            className={`mt-6 bg-indigo-600 text-white font-semibold py-3 rounded-md shadow-md hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Subscribe
          </button>
        </form>
      ) : (
        // Success checkmark animation
        <div className="flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-lg w-48 h-48">
          <svg
            className="w-20 h-20 text-green-500 stroke-2 stroke-current animate-checkmark"
            fill="none"
            viewBox="0 0 52 52"
          >
            <circle
              cx="26"
              cy="26"
              r="25"
              fill="none"
              className="stroke-green-200"
              strokeWidth="2"
            />
            <path
              className="checkmark-path"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 27l7 7 16-16"
            />
          </svg>
          <p className="mt-6 text-green-600 font-semibold text-lg">
            Thanks for subscribing!
          </p>
        </div>
      )}

      <style>{`
        @keyframes checkmark {
          0% {
            stroke-dashoffset: 48;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .animate-checkmark .checkmark-path {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: checkmark 0.6s ease forwards;
        }
      `}</style>
    </div>
  );
}
