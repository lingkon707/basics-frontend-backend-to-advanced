import React, { useState, useEffect } from "react";
import BalanceApp from "./BalanceApp";
import BalanceApp2 from "./BalanceApp";
import BalanceApp3 from "./BalanceApp";
import BalanceApp4 from "./BalanceApp";

const balanceApps = [
  { id: 1, label: "Balance App 1", component: <BalanceApp /> },
  { id: 2, label: "Balance App 2", component: <BalanceApp2 /> },
  { id: 3, label: "Balance App 3", component: <BalanceApp3 /> },
  { id: 4, label: "Balance App 4", component: <BalanceApp4 /> },
];

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animate modal open/close
  useEffect(() => {
    if (activeModal !== null) {
      setIsAnimating(true);
    } else {
      // delay to allow fade-out animation
      const timeout = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [activeModal]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-12 select-none">
          Select a Balance App
        </h1>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
          {balanceApps.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveModal(id)}
              className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl px-8 py-6 text-lg font-semibold text-indigo-700 hover:text-indigo-900
                         focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-95 transform"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {(activeModal !== null || isAnimating) && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4
                      transition-opacity duration-300 ${
                        activeModal !== null ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
          onClick={() => setActiveModal(null)}
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
        >
          {/* Stop propagation so clicking modal content doesn't close */}
          <div
            className={`bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto
                        p-8 relative
                        transform transition-transform duration-300
                        ${activeModal !== null ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 text-3xl font-bold focus:outline-none"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Modal Content */}
            {balanceApps.find((app) => app.id === activeModal)?.component}
          </div>
        </div>
      )}
    </>
  );
}
