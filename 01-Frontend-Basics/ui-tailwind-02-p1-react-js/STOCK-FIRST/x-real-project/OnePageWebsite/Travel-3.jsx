import React from "react";

const App = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* Floating Minimal Nav */}
      <nav className="fixed top-6 right-6 z-50">
        <ul className="space-y-3">
          {["Home", "Explore", "Blog", "Contact"].map((item, i) => (
            <li key={i}>
              <button className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow hover:bg-blue-500 hover:text-white transition">
                {item[0]}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center text-center"
        style={{
          backgroundImage:
            "url('https://newsroom.aaa.com/wp-content/uploads/2021/06/Plane-taking-off-twilight-1024x684.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
            Wander <span className="text-blue-400">Beyond</span>
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">
            A new way to explore destinations and share your journeys through immersive travel stories.
          </p>
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Explore Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-white relative">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-blue-600">
          Featured Destinations
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl px-6">
          {[
            {
              img: "https://ttg.com.bd//uploads/widget/15631014052911987_27_meaning-of-travellingjpg.jpg",
              title: "Misty Mountains",
            },
            {
              img: "https://www.euromonitor.com/globalassets/new-industry-pages/travel-and-mobility/travel-block-1.png",
              title: "Hidden Islands",
            },
            {
              img: "https://images.squarespace-cdn.com/content/v1/5f24290fd0d0910ecab2b02e/b2b65c78-ad81-42a1-a304-8b696750716d/shutterstock_611011652-222.jpg",
              title: "Urban Adventures",
            },
          ].map((dest, i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden shadow-xl group"
            >
              <img
                src={dest.img}
                alt={dest.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6 group-hover:bg-black/50 transition">
                <h3 className="text-xl text-white font-semibold">{dest.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section (Magazine Style) */}
      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Travel Stories</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Dive into our exclusive travel blogs featuring hidden gems and unique experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              img: "https://www.sunderland.edu.hk/wp-content/uploads/2023/10/Blog-2-01.jpg",
              title: "Exploring Asia's Secret Beaches",
            },
            {
              img: "https://images.squarespace-cdn.com/content/v1/5f24290fd0d0910ecab2b02e/b2b65c78-ad81-42a1-a304-8b696750716d/shutterstock_611011652-222.jpg",
              title: "Backpacking Europe in 30 Days",
            },
            {
              img: "https://ttg.com.bd//uploads/widget/15631014052911987_27_meaning-of-travellingjpg.jpg",
              title: "Hidden Villages in the Alps",
            },
          ].map((blog, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img src={blog.img} alt={blog.title} className="w-full h-60 object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-lg font-semibold text-white">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Wander Beyond. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
