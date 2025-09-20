export default function Home() {
  return (
    <main className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,_rgb(10,10,60),_rgb(30,20,80),_rgb(0,0,10))] text-white font-sans px-6 lg:px-24 py-16">
      {/* Navbar */}
      <header className="flex justify-between items-center mb-24">
        <h1 className="text-2xl font-bold text-white">Mansonia</h1>
        <nav className="hidden md:flex gap-10 text-sm font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Works</a>
          <a href="#">Blogs</a>
          <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            Contact
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col lg:flex-row justify-between items-center gap-16">
        {/* Left */}
        <div className="max-w-xl space-y-6">
          <p className="uppercase text-yellow-400 tracking-wider text-xs font-medium">
            Creative Tech Agency
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Build digital experiences that <span className="text-yellow-400">matter</span>
          </h2>
          <p className="text-gray-300 text-lg">
            We create amazing digital products for modern brands using cutting-edge design and code.
          </p>
          <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition">
            Get Started
          </button>
        </div>

        {/* Right - floating emoji design */}
        <div className="grid grid-cols-2 gap-6">
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-4xl">🎨</span>
          </div>
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-4xl">💡</span>
          </div>
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-4xl">🚀</span>
          </div>
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-4xl">🌐</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-32">
        <h3 className="text-white text-xl font-semibold mb-8 border-b border-gray-700 pb-2">
          Recent Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={`https://via.placeholder.com/400x250?text=Project+${num}`}
                alt={`Project ${num}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-black">
                <h4 className="text-lg font-semibold mb-2">Project {num}</h4>
                <p className="text-sm text-gray-700">Short description about this project.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
