export default function ThrillerGameLanding() {
  const features = [
    {
      url: "https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/20257/ffa91215eddb0386c037ce126e597a99.jpg",
      title: "Night of Survival",
      desc: "অন্ধকার শহরটিকে গ্রাস করেছে। প্রতিটি ছায়ার নিচে লুকিয়ে আছে বিপদ। তুমি কি প্রস্তুত?"
    },
    {
      url: "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/65fef1213324415a00e170bef3a51e2b.jpg",
      title: "Dark Zone",
      desc: "মৃত্যুর রাজ্য, যেখানে প্রতিটি পদক্ষেপই তোমার শেষ হতে পারে। বেঁচে থাকার জন্য লড়াই করো।"
    },
    {
      url: "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/8a139e159b4f23e620bf3e86da2718a2.jpg",
      title: "Final Escape",
      desc: "শেষ সুযোগ। দৌড়াও, লড়াই করো, নতুবা মৃত্যুকে আলিঙ্গন কর। বিজয়ীদের জন্য অপেক্ষা করছে গৌরব।"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 bg-[url('https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/20257/ffa91215eddb0386c037ce126e597a99.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-red-500 drop-shadow-lg animate-pulse">
            ⚔️ THRILLER SURVIVAL
          </h1>
          <p className="text-gray-200 mt-6 text-lg md:text-xl leading-relaxed">
            রাত নেমে এসেছে। শত্রুরা অদৃশ্য।  
            তুমি কি শেষ পর্যন্ত বেঁচে থাকতে পারবে?
          </p>
          <button className="mt-8 px-8 py-3 bg-red-600 rounded-xl font-semibold hover:bg-red-700 transition shadow-lg shadow-red-500/50">
            এখনই খেলুন
          </button>
        </div>
      </section>

      {/* Story / Intro */}
      <section className="max-w-4xl mx-auto text-center px-6 py-16">
        <h2 className="text-3xl font-bold text-red-400 mb-4">গেমের গল্প</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          পৃথিবী এখন অন্ধকারে আচ্ছন্ন।  
          রহস্যময় এক ভাইরাস শহরটিকে মৃত্যুর নগরীতে পরিণত করেছে।  
          কিছু সংখ্যক বেঁচে থাকা যোদ্ধাদের লড়াই এখন কেবল নিজেদের জীবন বাঁচানোর জন্যই নয়,  
          বরং মানবজাতিকে রক্ষা করার জন্য।  
          অন্ধকারের রাজ্যে বেঁচে থাকার এই লড়াইয়ে তুমি কি নায়ক হতে পারবে?
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <div 
            key={idx} 
            className="relative group rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-500"
          >
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-64 object-cover group-hover:brightness-75 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-5">
              <h3 className="text-2xl font-bold text-red-400">{item.title}</h3>
              <p className="text-sm text-gray-200 mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-r from-gray-900 to-black">
        <h3 className="text-3xl font-bold text-red-500 mb-4">🔥 বেঁচে থাকার লড়াই শুরু করো</h3>
        <p className="text-gray-300 mb-6">
          একবার প্রবেশ করলে আর ফেরার পথ নেই।  
          সাহস থাকলে এখনই যোগ দিন আমাদের থ্রিলার সার্ভাইভাল ব্যাটেলে!
        </p>
        <button className="px-10 py-3 bg-red-600 rounded-xl font-semibold hover:bg-red-700 transition shadow-lg shadow-red-500/50">
          JOIN THE BATTLE
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800 mt-8 text-sm">
        © 2025 Thriller Survival. সব অধিকার সংরক্ষিত।
      </footer>
    </div>
  );
}
