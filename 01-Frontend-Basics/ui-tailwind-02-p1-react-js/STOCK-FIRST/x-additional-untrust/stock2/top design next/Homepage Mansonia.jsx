// For Next.js App Router (pages inside app/)
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#003366] to-[#000000] text-white font-sans px-8 py-12">
      {/* Header */}
      <header className="flex justify-between items-center mb-24">
        <h1 className="text-2xl font-bold text-white">Mansonia</h1>
        <nav className="hidden md:flex gap-8 items-center text-sm text-white">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Works</a>
          <a href="#">Blogs</a>
          <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            Contact Us
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center">
        <p className="text-yellow-400 text-sm font-medium tracking-widest mb-4">
          MANSONIA ARE A WORLDWIDE BASED CREATIVE AGENCY
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-8">
          We make <span className="inline-flex items-center">🎨<img src="/emoji1.png" alt="" className="w-10 h-10 mx-2" /></span>
          amazing digital products ✌️ for your <span className="inline-flex items-center">🌐<img src="/emoji2.png" alt="" className="w-10 h-10 mx-2 rounded-full" /></span> business
        </h2>
        <button className="mt-6 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition">
          Get Started
        </button>
      </section>

      {/* Scroll Down Indicator */}
      <div className="absolute right-12 top-[50%] rotate-90 text-sm text-white hidden lg:block">
        Scroll Down
      </div>

      {/* Projects */}
      <section className="mt-32">
        <h3 className="text-white text-lg font-semibold mb-6 border-b border-gray-700 inline-block">
          OUR LATEST PROJECT
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <img src="/project1.jpg" alt="Project 1" className="rounded-lg shadow-lg" />
          <img src="/project2.jpg" alt="Project 2" className="rounded-lg shadow-lg" />
          <img src="/project3.jpg" alt="Project 3" className="rounded-lg shadow-lg" />
        </div>
      </section>
    </main>
  );
}
