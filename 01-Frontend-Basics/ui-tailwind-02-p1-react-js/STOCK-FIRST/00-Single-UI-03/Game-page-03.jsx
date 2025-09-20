export default function GameLanding() {
  const gallery = [
    {
      url: "https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/20257/ffa91215eddb0386c037ce126e597a99.jpg",
      alt: "Night of Survival",
    },
    {
      url: "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/65fef1213324415a00e170bef3a51e2b.jpg",
      alt: "Dark Zone",
    },
    {
      url: "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/8a139e159b4f23e620bf3e86da2718a2.jpg",
      alt: "Final Escape",
    },
    {
      url: "https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/20257/ffa91215eddb0386c037ce126e597a99.jpg",
      alt: "Day is Dark",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6 md:px-12 py-16 gap-12">
        {/* Text Content */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 mb-6">
            THRILLER SURVIVAL
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            রাত নেমে এসেছে। শত্রুরা অদৃশ্য।  
            তুমি কি বেঁচে থাকতে পারবে?  
            প্রবেশ করো রহস্যময় ‘Dark Zone’-এ যেখানে লড়াই ও বেঁচে থাকার শেষ চেষ্টায় তোমার সাহস পরীক্ষা হবে।
          </p>
          <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold shadow-lg shadow-red-600/50 transition">
            এখনই খেলুন
          </button>
        </div>

        {/* Hero Image */}
        <div className="flex-1 max-w-lg rounded-xl overflow-hidden shadow-2xl ring-4 ring-red-700 ring-opacity-70">
          <img
            src={gallery[0].url}
            alt={gallery[0].alt}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
          গেমের জায়গা
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {gallery.slice(1).map((item, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-lg ring-2 ring-red-600 ring-opacity-60 hover:ring-opacity-100 transition"
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-center font-semibold">
                {item.alt}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-16 text-center px-6 md:px-12">
        <h3 className="text-4xl font-bold text-red-500 mb-4">বেঁচে থাকার লড়াই শুরু করো</h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          একবার প্রবেশ করলে ফেরার পথ নেই।  
          সাহস থাকলে এখনই যোগ দিন আমাদের থ্রিলার সার্ভাইভাল ব্যাটেলে!  
          আপনার বিজয় আপনার কল্পনার চেয়েও বেশি শক্তিশালী হতে পারে।
        </p>
        <button className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl font-semibold shadow-lg shadow-red-600/50 transition">
          এখনই খেলুন
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800 mt-12 text-sm">
        © 2025 Thriller Survival. সব অধিকার সংরক্ষিত।
      </footer>
    </div>
  );
}
