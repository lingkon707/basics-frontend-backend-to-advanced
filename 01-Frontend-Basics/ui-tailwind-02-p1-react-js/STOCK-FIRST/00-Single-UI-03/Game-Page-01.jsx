export default function GameThrillerPage() {
  const images = [
    {
      url: "https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/20257/ffa91215eddb0386c037ce126e597a99.jpg",
      title: "Night of Survival",
      desc: "অন্ধকার নেমে এসেছে। বেঁচে থাকার জন্য প্রস্তুত তো?"
    },
    {
      url: "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/65fef1213324415a00e170bef3a51e2b.jpg",
      title: "Dark Zone",
      desc: "অদৃশ্য শত্রুরা তোমার অপেক্ষায়। সাহসী হলে প্রবেশ কর।"
    },
    {
      url: "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/8a139e159b4f23e620bf3e86da2718a2.jpg",
      title: "Final Escape",
      desc: "শেষ সুযোগ। পালাও অথবা মৃত্যুকে আলিঙ্গন কর।"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 drop-shadow-lg">
          ⚔️ THRILLER SURVIVAL
        </h1>
        <p className="text-gray-300 mt-4 max-w-xl">
          রাত নেমে এসেছে। শত্রুরা অদৃশ্য। তুমি কি বেঁচে থাকতে পারবে?
        </p>
        <button className="mt-6 px-8 py-3 bg-red-600 rounded-xl font-semibold hover:bg-red-700 transition">
          এখনই খেলুন
        </button>
      </section>

      {/* Image Cards Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((item, idx) => (
          <div 
            key={idx} 
            className="relative group rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:scale-105 transition-transform duration-500"
          >
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-60 object-cover group-hover:brightness-75 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4">
              <h3 className="text-xl font-bold text-red-400">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800 mt-8">
        © 2025 Thriller Survival. সব অধিকার সংরক্ষিত।
      </footer>
    </div>
  );
}
