import { useEffect, useState } from "react";

export default function GhostlyGamePageEnhanced() {
  const images = [
    {
      url: "https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/20257/ffa91215eddb0386c037ce126e597a99.jpg",
      title: "Silent Night",
      desc: "শান্তির আড়ালে লুকানো বিপদ। বেঁচে থাকো যদি পারো।",
    },
    {
      url: "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/65fef1213324415a00e170bef3a51e2b.jpg",
      title: "Shadow Realm",
      desc: "ছায়ার রাজ্যে প্রবেশ করো, যেখানে প্রত্যেক ধাপ মৃত্যুর কাছাকাছি নিয়ে যায়।",
    },
    {
      url: "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/8a139e159b4f23e620bf3e86da2718a2.jpg",
      title: "Final Whisper",
      desc: "শেষ ফিসফিসানির মাঝে লুকানো তোমার ভাগ্য।",
    },
  ];

  // Fade-in animation on mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-300 font-serif relative overflow-hidden selection:bg-cyan-600 selection:text-black">

      {/* Misty Floating Particles */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(20, 255, 255, 0.08), transparent 60%), radial-gradient(circle at 80% 80%, rgba(20, 255, 255, 0.04), transparent 60%)",
          animation: "pulseGlow 6s ease-in-out infinite alternate",
        }}
      ></div>

      {/* Global styles for animation */}
      <style>{`
        @keyframes pulseGlow {
          0% { opacity: 0.3; }
          100% { opacity: 0.6; }
        }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Hero Section */}
      <section
        className={`relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-6 md:px-12 transition-opacity duration-1500 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1
          className="text-7xl md:text-9xl font-thin tracking-widest text-cyan-400 drop-shadow-[0_0_20px_rgba(20,255,255,0.9)] mb-8 select-none"
          style={{ textShadow: "0 0 30px #14ffffaa, 0 0 60px #14ffff77" }}
        >
          THE UNKNOWN
        </h1>
        <p className="max-w-xl mb-14 text-2xl md:text-3xl font-light text-cyan-300 leading-relaxed opacity-90">
          অজানা, অন্ধকার আর রহস্যে মোড়ানো এক জগৎ।  
          যেখানে ভয়ই তোমার একমাত্র সঙ্গী।  
          তোমার সাহস কতোদূর পৌঁছাতে পারে?
        </p>
        <button
          className="relative px-12 py-4 rounded-xl border border-cyan-400 bg-black/40 text-cyan-400 font-semibold tracking-wide shadow-[0_0_15px_rgba(20,255,255,0.6)] hover:bg-black/70 hover:shadow-[0_0_30px_rgba(20,255,255,0.9)] transition-all duration-300 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-cyan-400 before:to-blue-400 before:opacity-30 before:blur-xl before:-z-10"
          onClick={() => alert("Prepare yourself for the unknown...")}
          aria-label="Enter the game"
        >
          প্রবেশ করো যদি সাহস থাকে
        </button>
      </section>

      {/* Images Gallery */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-0 py-20 grid grid-cols-1 sm:grid-cols-3 gap-14">
        {images.map(({ url, title, desc }, idx) => (
          <div
            key={idx}
            className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl border border-cyan-600 bg-black/60 backdrop-blur-md transition-transform transform hover:scale-105 hover:shadow-cyan-500/60 duration-500"
            style={{ animation: `floatUpDown 6s ease-in-out infinite ${idx * 0.5}s` }}
          >
            <img
              src={url}
              alt={title}
              className="w-full h-64 object-cover brightness-90 group-hover:brightness-75 transition duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-thin text-cyan-400 mb-2 tracking-wide">{title}</h3>
              <p className="text-gray-300 font-light text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-500 py-10 border-t border-cyan-700 text-sm">
        © 2025 The Unknown. All rights reserved.
      </footer>
    </div>
  );
}
