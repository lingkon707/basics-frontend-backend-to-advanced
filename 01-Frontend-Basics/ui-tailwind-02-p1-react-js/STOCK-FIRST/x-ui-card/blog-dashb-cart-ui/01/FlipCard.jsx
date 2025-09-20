import React from "react";

const features = [
  {
    title: "Fast Performance",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description:
      "Experience lightning-fast load times and smooth interactions in your app.",
  },
  {
    title: "Secure Data",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zM9 17v-2m0 0v-2a4 4 0 014-4h1a4 4 0 014 4v2a4 4 0 01-4 4H9z"
        />
      </svg>
    ),
    description: "Your data is encrypted and protected with industry best practices.",
  },
  {
    title: "Customizable",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
    description: "Easily tailor features to fit your specific project needs.",
  },
  {
    title: "24/7 Support",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636a9 9 0 11-12.728 0M12 7v5l3 3"
        />
      </svg>
    ),
    description:
      "Our team is ready around the clock to assist you with any issues.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map(({ title, icon, description }, i) => (
          <div
            key={i}
            className="group perspective"
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-full h-64 text-center transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 rounded-xl shadow-lg flex flex-col items-center justify-center px-4">
                <div className="mb-4 shadow-lg p-4 rounded-full bg-gradient-to-br from-purple-700 to-indigo-900">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-white rounded-xl shadow-lg px-6 py-8 rotate-y-180 backface-hidden flex items-center justify-center">
                <p className="text-gray-700">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind utilities for 3D flip */}
      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
