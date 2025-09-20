export default function GhostlyGamePage() {
  const images = [
    {
      url: "https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/20257/ffa91215eddb0386c037ce126e597a99.jpg",
      title: "Silent Night",
      desc: "শান্তির আড়ালে লুকানো বিপদ। বেঁচে থাকো যদি পারো।"
    },
    {
      url: "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/65fef1213324415a00e170bef3a51e2b.jpg",
      title: "Shadow Realm",
      desc: "ছায়ার রাজ্যে প্রবেশ করো, যেখানে প্রত্যেক ধাপ মৃত্যুর কাছাকাছি নিয়ে যায়।"
    },
    {
      url: "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/8a139e159b4f23e620bf3e86da2718a2.jpg",
      title: "Final Whisper",
      desc: "শেষ ফিসফিসানির মাঝে লুকানো তোমার ভাগ্য।"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-300 font-serif relative overflow-hidden">
      
      {/* Ghostly Mist Overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle at center,rgba(255,255,255,0.05),transparent 70%)] animate-pulse mix-blend-screen"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-6 md:px-12">
        <h1 className="text-6xl md:text-8xl font-thin tracking-wide text-white drop-shadow-lg mb-8 opacity-80 select-none" style={{textShadow: "0 0 12px #bbccff80, 0 0 24px #bbccff50"}}>
          THE UNKNOWN
        </h1>
        <p className="max-w-xl mb-12 text-xl md:text-2xl font-light text-gray-400 leading-relaxed opacity-70">
          অজানা, অন্ধকার আর রহস্যে মোড়ানো এক জগৎ।  
          যেখানে ভয়ই তোমার একমাত্র সঙ্গী।
        </p>
        <button className="px-10 py-3 border border-gray-400 rounded-lg text-gray-400 hover:text-white hover:border-white transition duration-300 backdrop-blur-sm bg-black/30">
          প্রবেশ করো যদি সাহস থাকে
        </button>
      </section>

      {/* Images Gallery */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-0 py-16 grid grid-cols-1 sm:grid-cols-3 gap-12">
        {images.map(({url, title, desc}, idx) => (
          <div key={idx} className="group relative cursor-pointer rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-black/50 backdrop-blur-md">
            <img
              src={url}
              alt={title}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm group-hover:brightness-75"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-thin text-white mb-2 tracking-widest">{title}</h3>
              <p className="text-gray-300 font-light text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-500 py-10 border-t border-gray-800">
        © 2025 The Unknown. All rights reserved.
      </footer>
    </div>
  );
}
