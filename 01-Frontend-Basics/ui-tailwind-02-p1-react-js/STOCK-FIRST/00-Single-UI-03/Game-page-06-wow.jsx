import { useEffect, useState } from "react";

export default function GhostlyGamePageExpanded() {
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

  const features = [
    {
      icon: "👻",
      title: "অদৃশ্য শত্রু",
      desc: "ছায়ার ভেতর থেকে আক্রমণ, যা তুমি দেখতে পারবে না, কিন্তু অনুভব করবে।",
    },
    {
      icon: "🌫️",
      title: "মায়াজাল",
      desc: "মিস্ট ও কুয়াশার মধ্যে বেঁচে থাকার জন্য বিশেষ কৌশল ব্যবহার করতে হবে।",
    },
    {
      icon: "🗝️",
      title: "রহস্যময় রহস্য",
      desc: "প্রতিটি কোণে লুকানো গোপন তথ্য ও ধাঁধা যা জানলে বদলে যাবে গেমের গতিপথ।",
    },
    {
      icon: "⚔️",
      title: "সাহসিক লড়াই",
      desc: "বাঁচার জন্য লড়াই করো, ঘুমন্ত ভয়কে জাগিয়ে তুলো।",
    },
  ];

  const loreCards = [
    {
      title: "রহস্যময় শহর",
      value: "আধারে ঢাকা",
      desc: "যেখানে দিনের আলো হারিয়ে যায়, রাতই চিরস্থায়ী।",
    },
    {
      title: "মৃত্যুর ছায়া",
      value: "অলৌকিক শক্তি",
      desc: "যা ছুঁয়ে গেলে কেউ ফিরে আসেনা।",
    },
    {
      title: "বেঁচে থাকার গোপনীয়তা",
      value: "স্বপ্ন ও বাস্তবের মাঝখানে",
      desc: "তোমার জ্ঞানই হবে অস্ত্র।",
    },
    {
      title: "শেষ ফিসফিসানি",
      value: "প্রতিকারের বার্তা",
      desc: "তুমি একা নও। কতো বন্ধু আছে তোমার পেছনে।",
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
            "radial-gradient(circle at 20% 20%, rgba(20, 255, 255, 0.08), transparent 70%), radial-gradient(circle at 80% 80%, rgba(20, 255, 255, 0.04), transparent 70%)",
          animation: "pulseGlow 6s ease-in-out infinite alternate",
        }}
      ></div>

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

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-0 py-16 text-center">
        <h2 className="text-4xl font-thin text-cyan-400 mb-8 tracking-wide">গেমের রহস্য</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          এই গেমটি এক অজানা জগতের মধ্যে তোমাকে নিয়ে যাবে — যেখানে আলো হারিয়ে গেছে,  
          আর ছায়া কেবলই বিস্তার লাভ করেছে। প্রতিটি ধাপ তোমার সাহস ও বুদ্ধিমত্তাকে পরীক্ষা করবে।  
          এই অন্ধকারের মাঝে বেঁচে থাকার জন্য তোমাকে হবে দ্রুত, ধৈর্যশীল ও বিচক্ষণ।
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-6 md:px-0 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className="bg-black/50 backdrop-blur-md border border-cyan-600 rounded-3xl p-8 flex flex-col items-center text-center shadow-cyan-600/40 shadow-lg transition-transform hover:scale-105 duration-300"
          >
            <div className="text-5xl mb-4 animate-pulse text-cyan-400">{icon}</div>
            <h3 className="text-xl font-thin text-cyan-300 mb-2">{title}</h3>
            <p className="text-gray-300 font-light text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </section>

      {/* Lore / Info Grid */}
      <section className="max-w-6xl mx-auto px-6 md:px-0 py-16">
        <h2 className="text-4xl font-thin text-cyan-400 mb-10 tracking-wide text-center">গেমের তথ্যসমূহ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loreCards.map(({ title, value, desc }, idx) => (
            <div
              key={idx}
              className="bg-black/50 backdrop-blur-md border border-cyan-600 rounded-3xl p-6 flex flex-col"
            >
              <h4 className="text-cyan-400 font-thin text-lg mb-1">{title}</h4>
              <p className="text-white font-semibold text-2xl mb-2">{value}</p>
              <p className="text-gray-300 font-light text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe / Join Waitlist */}
      <section className="max-w-3xl mx-auto px-6 md:px-0 py-20 text-center">
        <h2 className="text-4xl font-thin text-cyan-400 mb-6 tracking-wide">
          রহস্যময় জগতে তোমার স্থান নিশ্চিত করো
        </h2>
        <p className="text-gray-300 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
          গেমের নতুন আপডেট ও গোপন তথ্যের জন্য আমাদের মেইলিং লিস্টে যুক্ত হও।
          সর্বশেষ সংবাদ এবং বিশেষ ইভেন্টের আমন্ত্রণ পেতে সাবস্ক্রাইব করো।
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("ধন্যবাদ! আপনার নিবন্ধন সফল হয়েছে।");
          }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <input
            type="email"
            placeholder="তোমার ইমেইল এখানে"
            required
            className="rounded-full px-6 py-3 w-full sm:w-auto min-w-[280px] text-black font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="submit"
            className="rounded-full bg-cyan-400 text-black px-8 py-3 font-semibold tracking-wide hover:bg-cyan-500 transition"
          >
            সাবস্ক্রাইব করো
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-500 py-10 border-t border-cyan-700 text-sm">
        © 2025 The Unknown. All rights reserved.
      </footer>
    </div>
  );
}
