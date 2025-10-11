"use client"










"use client"; // Only needed in app/ directory (Next 13+)

import { useState } from "react";

export default function DrawersDemo() {
  const [open, setOpen] = useState(null); // 'left', 'right', etc.

  const closeDrawer = () => setOpen(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">🧩 Drawer Examples</h1>

      {/* Buttons to Open Each Drawer */}
      <div className="flex flex-wrap justify-center gap-4">
        {["left", "right", "top", "bottom", "fullscreen"].map((type) => (
          <button
            key={type}
            onClick={() => setOpen(type)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Open {type.charAt(0).toUpperCase() + type.slice(1)} Drawer
          </button>
        ))}
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer Wrapper */}
      {open === "left" && (
        <Drawer position="left" onClose={closeDrawer} />
      )}
      {open === "right" && (
        <Drawer position="right" onClose={closeDrawer} />
      )}
      {open === "top" && (
        <Drawer position="top" onClose={closeDrawer} />
      )}
      {open === "bottom" && (
        <Drawer position="bottom" onClose={closeDrawer} />
      )}
      {open === "fullscreen" && (
        <Drawer position="fullscreen" onClose={closeDrawer} />
      )}
    </div>
  );
}

function Drawer({ position, onClose }) {
  const base =
    "fixed bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out";

  const positions = {
    left: "top-0 left-0 h-full w-64 transform translate-x-0",
    right: "top-0 right-0 h-full w-64 transform translate-x-0",
    top: "top-0 left-0 w-full h-64 transform translate-y-0",
    bottom: "bottom-0 left-0 w-full h-64 transform translate-y-0",
    fullscreen: "inset-0 w-full h-full",
  };

  return (
    <div className={`${base} ${positions[position]}`}>
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold capitalize">{position} Drawer</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
        <p className="text-gray-600 text-sm">
          This is a {position} drawer. Click outside or the close button to dismiss it.
        </p>
        {/* Additional content can go here */}
      </div>
    </div>
  );
}
