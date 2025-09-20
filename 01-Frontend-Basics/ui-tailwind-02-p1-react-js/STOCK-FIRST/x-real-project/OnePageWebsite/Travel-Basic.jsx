import React from "react";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white text-gray-800 font-sans overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-600">Travel & Blog</h1>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">Blog</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/5f24290fd0d0910ecab2b02e/b2b65c78-ad81-42a1-a304-8b696750716d/shutterstock_611011652-222.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore The World With Us
          </h1>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Discover unique destinations, read our travel blogs, and book your next adventure today!
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg">
            Book a Trip
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide top-notch tourism services, ensuring your travel experience is seamless and memorable.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              img: "https://newsroom.aaa.com/wp-content/uploads/2021/06/Plane-taking-off-twilight-1024x684.jpg",
              title: "Flight Booking",
              desc: "Affordable and convenient flight bookings for all destinations.",
            },
            {
              img: "https://ttg.com.bd//uploads/widget/15631014052911987_27_meaning-of-travellingjpg.jpg",
              title: "Tour Packages",
              desc: "Exciting domestic and international tour packages with guides.",
            },
            {
              img: "https://www.euromonitor.com/globalassets/new-industry-pages/travel-and-mobility/travel-block-1.png",
              title: "Hotel Reservations",
              desc: "Hassle-free hotel bookings with the best rates guaranteed.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
            >
              <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Travel Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read our latest articles to find travel tips, destination guides, and inspiration for your next adventure.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              img: "https://www.sunderland.edu.hk/wp-content/uploads/2023/10/Blog-2-01.jpg",
              title: "Top 10 Beaches in Asia",
              desc: "Explore the most beautiful and relaxing beach destinations in Asia.",
            },
            {
              img: "https://images.squarespace-cdn.com/content/v1/5f24290fd0d0910ecab2b02e/b2b65c78-ad81-42a1-a304-8b696750716d/shutterstock_611011652-222.jpg",
              title: "Backpacking in Europe",
              desc: "A complete guide to affordable and adventurous European travel.",
            },
            {
              img: "https://www.euromonitor.com/globalassets/new-industry-pages/travel-and-mobility/travel-block-1.png",
              title: "Best Food Cities to Visit",
              desc: "Experience world-class cuisine and local flavors in these cities.",
            },
          ].map((blog, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden transition"
            >
              <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://newsroom.aaa.com/wp-content/uploads/2021/06/Plane-taking-off-twilight-1024x684.jpg"
            alt="Travel"
            className="rounded-3xl shadow-lg hover:scale-105 transition-transform"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
            <p className="text-gray-600 mb-6">
              Travel & Blog is your ultimate partner for hassle-free tourism services combined with
              inspiring travel content. Our mission is to make travel enjoyable, affordable, and
              accessible to everyone.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✔ 10+ Years in Tourism</li>
              <li>✔ 500+ Destinations Covered</li>
              <li>✔ Professional Travel Blogs & Guides</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Next Adventure</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Start your journey today with our travel packages and tips from our expert travel blogs.
        </p>
        <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-200 rounded-full font-semibold shadow-lg">
          Explore Packages
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Travel & Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
