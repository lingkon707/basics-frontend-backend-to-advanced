// components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
      {/* Search Bar */}
      <div className="flex items-center space-x-3 max-w-xl w-full bg-gray-100 rounded-lg px-4 py-2 text-gray-700 focus-within:ring-2 focus-within:ring-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0a7 7 0 1110-10 7 7 0 01-10 10z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search task"
          className="bg-transparent outline-none flex-grow placeholder-gray-500"
        />
        <kbd className="hidden sm:inline-flex px-2 py-0.5 text-xs font-sans font-semibold bg-gray-200 rounded-md text-gray-600 select-none">
          ⌘F
        </kbd>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-5">
        {/* Email Icon */}
        <button
          aria-label="Inbox"
          className="text-gray-600 hover:text-gray-900 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
          </svg>
        </button>

        {/* Notification Icon */}
        <button
          aria-label="Notifications"
          className="text-gray-600 hover:text-gray-900 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40?img=5"
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden md:flex flex-col leading-tight">
            <span className="font-semibold text-gray-900">Totok Michael</span>
            <span className="text-xs text-gray-500">tmichael20@mail.com</span>
          </div>
        </div>
      </div>
    </header>
  );
}
