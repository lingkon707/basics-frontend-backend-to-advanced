import React from "react";

const NeonGlitchDashboard = () => {
  const navItems = ["OVERVIEW", "ANALYTICS", "SETTINGS", "PROFILE"];
  const stats = [
    { label: "Active Users", value: "12,345" },
    { label: "Revenue", value: "$87,650" },
    { label: "Sessions", value: "45,678" },
    { label: "Errors", value: "23" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden flex flex-col">
      {/* Neon background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-tr from-pink-600 to-blue-400 rounded-full opacity-30 filter blur-3xl animate-pulse mix-blend-screen"></div>
        <div className="absolute bottom-16 right-16 w-80 h-80 bg-gradient-to-br from-lime-400 to-purple-700 rounded-full opacity-20 filter blur-2xl animate-pulse mix-blend-screen"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-12 left-8 flex flex-col space-y-6 text-lg uppercase tracking-wide select-none">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            className="relative px-4 py-2 text-neon-blue font-semibold rounded-lg hover:bg-neon-pink hover:text-black transition-colors duration-300"
            aria-label={item}
          >
            {item}
            {/* subtle underline on active */}
            {idx === 0 && (
              <span className="absolute bottom-0 left-2 right-2 h-1 bg-neon-pink rounded-full"></span>
            )}
          </button>
        ))}
      </nav>

      {/* Main content wrapper */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 max-w-6xl mx-auto mt-20">
        {/* Header */}
        <header className="mb-16 max-w-3xl">
          <h1 className="text-7xl font-extrabold neon-text relative inline-block">
            <span className="glitch relative inline-block" data-text="DASHBOARD">
              DASHBOARD
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
            Real-time analytics & system health monitoring with neon glitch vibes.
          </p>
        </header>

        {/* Stats grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-5xl">
          {stats.map(({ label, value }, idx) => (
            <div
              key={idx}
              className="bg-gray-900 bg-opacity-40 border border-neon-blue rounded-2xl p-8 shadow-neon flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer"
            >
              <p className="uppercase text-sm text-gray-400 mb-3 tracking-wide">{label}</p>
              <h2 className="text-4xl font-bold neon-text glitch-text" data-text={value}>
                {value}
              </h2>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-500 text-sm select-none">
        © 2025 Neon Corp. All rights reserved.
      </footer>

      {/* Styles */}
      <style jsx>{`
        .neon-text {
          color: #0ff;
          text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 40px #0ff;
        }
        .glitch {
          position: relative;
          color: #0ff;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          opacity: 0.8;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }
        .glitch::before {
          animation: glitchTop 1.5s infinite linear alternate-reverse;
          color: #ff59e4;
          top: -2px;
          text-shadow: -2px 0 #ff59e4;
        }
        .glitch::after {
          animation: glitchBottom 1.5s infinite linear alternate;
          color: #00fff7;
          top: 2px;
          text-shadow: 2px 0 #00fff7;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
        }
        @keyframes glitchTop {
          0% {
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translate(0);
          }
          20% {
            clip-path: polygon(0 5%, 100% 5%, 100% 40%, 0 40%);
            transform: translate(-2px, -2px);
          }
          40% {
            clip-path: polygon(0 10%, 100% 10%, 100% 35%, 0 35%);
            transform: translate(2px, 2px);
          }
          60% {
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translate(-1px, 1px);
          }
          80% {
            clip-path: polygon(0 7%, 100% 7%, 100% 38%, 0 38%);
            transform: translate(1px, -1px);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translate(0);
          }
        }
        @keyframes glitchBottom {
          0% {
            clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
            transform: translate(0);
          }
          20% {
            clip-path: polygon(0 60%, 100% 60%, 100% 95%, 0 95%);
            transform: translate(2px, 2px);
          }
          40% {
            clip-path: polygon(0 65%, 100% 65%, 100% 90%, 0 90%);
            transform: translate(-2px, -2px);
          }
          60% {
            clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
            transform: translate(1px, -1px);
          }
          80% {
            clip-path: polygon(0 62%, 100% 62%, 100% 97%, 0 97%);
            transform: translate(-1px, 1px);
          }
          100% {
            clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
            transform: translate(0);
          }
        }
        .text-neon-blue {
          color: #0ff;
          text-shadow:
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 30px #0ff;
        }
        .shadow-neon {
          box-shadow:
            0 0 15px #0ff,
            0 0 30px #0ff,
            0 0 60px #0ff;
        }
        .bg-neon-pink {
          background-color: #ff59e4;
        }
      `}</style>
    </div>
  );
};

export default NeonGlitchDashboard;
