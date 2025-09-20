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
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden relative">
      {/* Neon background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-tr from-pink-600 to-blue-400 rounded-full opacity-30 filter blur-3xl animate-pulse mix-blend-screen"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-lime-400 to-purple-700 rounded-full opacity-20 filter blur-2xl animate-pulse mix-blend-screen"></div>
      </div>

      {/* Vertical Glitch Nav */}
      <nav className="fixed top-1/4 left-4 flex flex-col space-y-6 text-xl uppercase tracking-widest transform -rotate-90 origin-left select-none">
        {navItems.map((item, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer group text-neon-blue before:absolute before:-left-1 before:top-0 before:w-full before:h-full before:bg-neon-pink before:opacity-0 before:blur-sm before:transition before:duration-300 group-hover:before:opacity-60 glitch"
            style={{ "--glitch-color": "#FF59E4" }}
          >
            {item}
          </div>
        ))}
      </nav>

      {/* Header */}
      <header className="pt-20 pl-32">
        <h1 className="text-6xl font-extrabold neon-text glitch-text mb-8 select-none">
          DASHBOARD
        </h1>
        <p className="text-lg text-gray-400 max-w-xl leading-relaxed select-none">
          Real-time analytics & system health monitoring with neon glitch vibes.
        </p>
      </header>

      {/* Stats Panels */}
      <main className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 pr-32 max-w-7xl mx-auto mt-12">
        {stats.map(({ label, value }, idx) => (
          <div
            key={idx}
            className="bg-gray-900 bg-opacity-30 rounded-xl border border-neon-blue p-6 shadow-neon"
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider">{label}</p>
            <h2 className="text-4xl font-bold neon-text mt-2 glitch-text">{value}</h2>
          </div>
        ))}
      </main>

      {/* Neon styles and glitch effect */}
      <style jsx>{`
        .neon-text {
          color: #0ff;
          text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 40px #0ff;
        }
        .glitch-text {
          position: relative;
          animation: glitch 1.5s infinite;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          right: 0;
          color: #f0f;
          background: black;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          animation: glitch 1.5s infinite;
          opacity: 0.8;
        }
        .glitch-text::after {
          color: #0ff;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
          animation-delay: 0.3s;
        }
        @keyframes glitch {
          0% {
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translate(0);
          }
          20% {
            clip-path: polygon(0 0, 100% 0, 100% 20%, 0 20%);
            transform: translate(-2px, -2px);
          }
          40% {
            clip-path: polygon(0 30%, 100% 30%, 100% 55%, 0 55%);
            transform: translate(2px, 2px);
          }
          60% {
            clip-path: polygon(0 10%, 100% 10%, 100% 30%, 0 30%);
            transform: translate(-1px, 1px);
          }
          80% {
            clip-path: polygon(0 40%, 100% 40%, 100% 70%, 0 70%);
            transform: translate(1px, -1px);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translate(0);
          }
        }
        .text-neon-blue {
          color: #0ff;
          text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #0ff;
        }
        .before\:bg-neon-pink::before {
          background-color: #ff59e4 !important;
        }
        .shadow-neon {
          box-shadow:
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 40px #0ff;
        }
      `}</style>
    </div>
  );
};

export default NeonGlitchDashboard;
