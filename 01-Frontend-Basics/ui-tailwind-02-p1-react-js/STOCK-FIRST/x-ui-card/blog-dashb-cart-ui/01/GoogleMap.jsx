import React, { useState } from "react";

const pins = [
  { id: 1, name: "New York", top: "30%", left: "45%", info: "The Big Apple" },
  { id: 2, name: "London", top: "40%", left: "65%", info: "Capital of England" },
  { id: 3, name: "Tokyo", top: "50%", left: "85%", info: "Capital of Japan" },
];

export default function App() {
  const [activePin, setActivePin] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="relative w-full max-w-4xl h-96 bg-blue-200 rounded-lg shadow-lg select-none">
        {/* Map placeholder */}
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-contain bg-no-repeat rounded-lg"></div>

        {/* Pins */}
        {pins.map((pin) => (
          <button
            key={pin.id}
            onClick={() => setActivePin(pin.id === activePin ? null : pin.id)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ top: pin.top, left: pin.left }}
            aria-label={`Pin for ${pin.name}`}
          >
            <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg cursor-pointer hover:bg-red-700 transition" />
          </button>
        ))}

        {/* Info popup */}
        {activePin && (
          <div
            className="absolute bg-white rounded shadow-lg p-4 max-w-xs w-48 text-gray-800"
            style={{
              top: pins.find((p) => p.id === activePin).top,
              left: `calc(${pins.find((p) => p.id === activePin).left} + 2rem)`,
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            <h3 className="font-semibold text-lg mb-1">
              {pins.find((p) => p.id === activePin).name}
            </h3>
            <p>{pins.find((p) => p.id === activePin).info}</p>
            <button
              onClick={() => setActivePin(null)}
              className="mt-2 text-sm text-indigo-600 hover:underline"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
