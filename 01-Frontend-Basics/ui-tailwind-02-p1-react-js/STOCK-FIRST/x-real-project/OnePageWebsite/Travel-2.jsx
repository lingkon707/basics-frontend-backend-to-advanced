import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden font-sans">

      {/* Sticky Minimal Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-extrabold text-blue-600">VoyageX</h1>
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            <li className="hover:text-blue-500 cursor-pointer">Explore</li>
            <li className="hover:text-blue-500 cursor-pointer">Trips</li>
            <li className="hover:text-blue-500 cursor-pointer">Blog</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Split-Screen Hero */}
      <section className="relative h-screen grid md:grid-cols-2 mt-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-10 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Discover <span className="text-blue-600">Hidden</span> Places <br /> & Unique Adventures
          </h1>
          <p className="text-gray-600 mb-6 max-w-md">
            Travel beyond the usual. Explore hidden gems, rare spots, and immersive journeys curated for true explorers.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg w-fit">
            Start Exploring
          </button>
        </div>

        {/* Right Image Slideshow */}
        <div className="relative overflow-hidden">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5f24290fd0d0910ecab2b02e/b2b65c78-ad81-42a1-a304-8b696750716d/shutterstock_611011652-222.jpg"
            alt="Travel"
            className="absolute w-full h-full object-cover animate-fade"
          />
          <img
            src="https://newsroom.aaa.com/wp-content/uploads/2021/06/Plane-taking-off-twilight-1024x684.jpg"
            alt="Travel 2"
            className="absolute w-full h-full object-cover opacity-0 animate-fade-delay"
          />
        </div>
      </section>

      {/* Unique Destination Cards */}
      <section className="py-20 px-6 bg-gradient-to-t from-blue-100 to-white relative">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Uncommon Destinations</h2>
          <p className="text-gray-600">Discover rare places most tourists never see.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { img: "https://www.euromonitor.com/globalassets/new-industry-pages/travel-and-mobility/travel-block-1.png", title: "Hidden Island" },
            { img: "https://ttg.com.bd//uploads/widget/15631014052911987_27_meaning-of-travellingjpg.jpg", title: "Mountain Village" },
            { img: "https://www.sunderland.edu.hk/wp-content/uploads/2023/10/Blog-2-01.jpg", title: "Secret Beach" },
          ].map((dest, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={dest.img}
                alt={dest.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{dest.title}</h3>
                  <p className="text-sm">Explore Now →</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Combined Blog & Travel Tips */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Travel Stories & Tips</h2>
          <p className="text-gray-600">Learn from our journeys and make your adventures smarter.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              img: "https://www.sunderland.edu.hk/wp-content/uploads/2023/10/Blog-2-01.jpg",
              title: "Top 5 Secret Islands to Visit",
              desc: "Uncover hidden islands where nature thrives untouched.",
            },
            {
              img: "https://newsroom.aaa.com/wp-content/uploads/2021/06/Plane-taking-off-twilight-1024x684.jpg",
              title: "Travel Smarter in 2025",
              desc: "Tips to maximize your travel experience and safety.",
            },
            {
              img: "https://ttg.com.bd//uploads/widget/15631014052911987_27_meaning-of-travellingjpg.jpg",
              title: "Cultural Journeys You Can't Miss",
              desc: "Engage with authentic local traditions and cultures.",
            },
          ].map((blog, i) => (
            <div key={i} className="bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden transition">
              <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} VoyageX. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
