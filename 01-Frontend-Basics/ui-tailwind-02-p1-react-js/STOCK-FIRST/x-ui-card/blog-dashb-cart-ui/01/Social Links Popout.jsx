import React from "react";

const socials = [
  {
    name: "Twitter",
    icon: (
      <svg
        className="w-6 h-6 text-blue-400"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.05 9.05 0 01-2.88 1.1A4.52 4.52 0 0016.15 2a4.5 4.5 0 00-4.43 5.5A12.8 12.8 0 013 4.15a4.49 4.49 0 001.4 6 4.5 4.5 0 01-2-.56v.06a4.52 4.52 0 003.6 4.42 4.52 4.52 0 01-2 .08 4.5 4.5 0 004.2 3.12A9 9 0 012 19.54a12.8 12.8 0 006.92 2" />
      </svg>
    ),
    description: "Follow me on Twitter",
    url: "https://twitter.com/",
  },
  {
    name: "LinkedIn",
    icon: (
      <svg
        className="w-6 h-6 text-blue-700"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 4a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: "Connect on LinkedIn",
    url: "https://linkedin.com/",
  },
  {
    name: "GitHub",
    icon: (
      <svg
        className="w-6 h-6 text-gray-800"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 00-3.16 19.47c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34a2.65 2.65 0 00-1.11-1.46c-.9-.62.07-.61.07-.61a2.11 2.11 0 011.54 1.04 2.15 2.15 0 002.93.84 2.15 2.15 0 01.64-1.35c-2.22-.25-4.56-1.12-4.56-4.97a3.88 3.88 0 011-2.7 3.6 3.6 0 01.1-2.66s.83-.27 2.7 1a9.2 9.2 0 014.92 0c1.87-1.27 2.7-1 2.7-1a3.6 3.6 0 01.1 2.66 3.88 3.88 0 011 2.7c0 3.86-2.35 4.72-4.59 4.97a2.41 2.41 0 01.69 1.87v2.78c0 .27.18.58.69.48A10 10 0 0012 2z" />
      </svg>
    ),
    description: "Check out my GitHub",
    url: "https://github.com/",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center relative">
        {/* Profile Image */}
        <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-6 relative animate-pulse-slow shadow-lg ring-4 ring-indigo-500 ring-opacity-50">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mb-1 text-gray-900">John Doe</h2>
        <p className="text-gray-600 mb-6">Frontend Developer & Designer</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          {socials.map(({ name, icon, description, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              aria-label={name}
            >
              {/* Icon */}
              <div className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer shadow-md transition">
                {icon}
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 select-none">
                <div className="bg-indigo-600 text-white text-sm rounded py-1 px-3 whitespace-nowrap shadow-lg">
                  {description}
                </div>
                <div className="w-3 h-3 bg-indigo-600 rotate-45 mx-auto mt-[-6px]" />
              </div>
            </a>
          ))}
        </div>

        {/* Extra CSS for slower pulse */}
        <style>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
