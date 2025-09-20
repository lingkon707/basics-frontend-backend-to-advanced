export default function LingkonPortfolio() {
  const skills = [
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      title: "ReactJS",
      desc: "ডাইনামিক এবং রেসপন্সিভ ওয়েব অ্যাপ তৈরি করি ReactJS দিয়ে।"
    },
    {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      title: "NextJS",
      desc: "SEO ফ্রেন্ডলি এবং পারফরম্যান্স-অপ্টিমাইজড ফ্রন্টএন্ড তৈরি করি NextJS দিয়ে।"
    },
    {
      url: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80",
      title: "Tailwind CSS",
      desc: "দ্রুত এবং সুন্দর UI তৈরি করি Tailwind CSS এবং আধুনিক ডিজাইন দিয়ে।"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-red-500 drop-shadow-lg animate-pulse">
            🔹 LINGKON
          </h1>
          <p className="text-gray-200 mt-6 text-lg md:text-xl leading-relaxed">
            ফ্রন্টএন্ড ডেভেলপার | ReactJS | NextJS | Tailwind  
            আধুনিক, রেসপন্সিভ এবং পারফরম্যান্স-অপ্টিমাইজড ওয়েব অ্যাপ তৈরি করি।
          </p>
          <button className="mt-8 px-8 py-3 bg-red-600 rounded-xl font-semibold hover:bg-red-700 transition shadow-lg shadow-red-500/50">
            আমার সাথে যোগাযোগ করুন
          </button>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-4xl mx-auto text-center px-6 py-16">
        <h2 className="text-3xl font-bold text-red-400 mb-4">আমার সম্পর্কে</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          আমি লিংকন, একজন ফ্রন্টএন্ড ডেভেলপার।  
          ReactJS, NextJS এবং Tailwind CSS ব্যবহার করে  
          আধুনিক, দ্রুত এবং রেসপন্সিভ ওয়েবসাইট তৈরি করি।  
          আমার লক্ষ্য হলো স্কেলেবল ওয়েব অ্যাপ এবং সুন্দর UI তৈরি করা  
          যা আপনার প্রোজেক্টকে আরও প্রফেশনাল করে তুলবে।
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((item, idx) => (
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
        <h3 className="text-3xl font-bold text-red-500 mb-4">🔥 একসাথে কিছু অসাধারণ তৈরি করি</h3>
        <p className="text-gray-300 mb-6">
          আপনার প্রোজেক্টের জন্য একজন দক্ষ ফ্রন্টএন্ড ডেভেলপার খুঁজছেন?  
          ReactJS, NextJS, Tailwind এবং TypeScript দিয়ে আমি আপনার প্রোজেক্টে প্রাণ দিতে পারি।
        </p>
        <button className="px-10 py-3 bg-red-600 rounded-xl font-semibold hover:bg-red-700 transition shadow-lg shadow-red-500/50">
          আমার সাথে কাজ করুন
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800 mt-8 text-sm">
        © 2025 Lingkon – Frontend Developer. সব অধিকার সংরক্ষিত।
      </footer>
    </div>
  );
}
