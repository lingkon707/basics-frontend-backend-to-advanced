import React, { useState } from "react";
import BalanceApp from "./BalanceApp";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Show Balance App
        </button>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* BalanceApp inside modal */}
            <BalanceApp />
          </div>
        </div>
      )}
    </>
  );
}
