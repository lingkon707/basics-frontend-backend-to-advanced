import React from "react";

const blogThumbnail =
  "https://wp.aqlova.com/rasalina/wp-content/uploads/2022/01/blog_thumb04.jpg";

const recentPosts = [
  {
    title: "Businesses Are Thriving, Societies Are Not.",
    date: "February 10, 2022",
    img: "https://m.media-amazon.com/images/I/61+FNZ7DptL._UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Importance of Instagram Metrics and",
    date: "January 29, 2022",
    img: "https://m.media-amazon.com/images/I/61j-lpgB9+L._UF1000,1000_QL80_.jpg",
  },
  {
    title: "TikTok Influencer Marketing: How to Work",
    date: "January 29, 2022",
    img: "https://m.media-amazon.com/images/I/61BGLZw9P1L._UF1000,1000_QL80_.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 font-serif text-gray-900">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-8 border-b border-gray-300">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-extrabold shadow-lg">
            R
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Rasalina
          </h1>
        </div>
        <nav className="mt-6 md:mt-0 space-x-8 text-sm font-semibold uppercase tracking-widest text-gray-700">
          {["Home", "About", "Portfolio", "Services", "Blog", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className={`relative inline-block py-2 px-1 hover:text-orange-500 transition ${
                  item === "Blog"
                    ? "text-orange-500 after:absolute after:-bottom-3 after:left-0 after:w-3 after:h-3 after:bg-orange-400 after:rotate-45 after:rounded-sm"
                    : ""
                }`}
              >
                {item}
              </a>
            )
          )}
        </nav>
        <button className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-lg font-semibold transition duration-300">
          Contact Me
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Featured Blog */}
        <article className="lg:col-span-3 bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
          <img
            src={blogThumbnail}
            alt="Featured Blog"
            className="w-full h-72 object-cover brightness-90 hover:brightness-100 transition"
          />
          <div className="p-10">
            <div className="flex items-center space-x-6 text-sm text-blue-600 font-semibold mb-3">
              <span>Rasalina</span>
              <span className="text-gray-300">&bull;</span>
              <time>February 10, 2022</time>
              <span className="text-gray-300">&bull;</span>
              <span>No Comments</span>
            </div>
            <h2 className="text-4xl font-extrabold leading-tight mb-6 hover:text-orange-500 cursor-pointer transition">
              Businesses Are Thriving, Societies Are Not. Time for a Change.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
              Business is about maximizing profits. But what happens when
              profits come at the expense of society? How do we reconcile
              thriving companies with struggling communities? Explore this
              paradox and ideas for responsible growth.
            </p>
            <button className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Read More
            </button>
          </div>
        </article>

        {/* Sidebar - Recent Posts */}
        <aside className="space-y-8">
          <h3 className="text-3xl font-extrabold border-b-4 border-orange-400 inline-block pb-2 mb-6">
            Recent Posts
          </h3>
          <ul className="space-y-8">
            {recentPosts.map(({ title, date, img }, idx) => (
              <li
                key={idx}
                className="flex space-x-6 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-28 h-28 object-cover rounded-l-2xl"
                />
                <div className="p-5 flex flex-col justify-center">
                  <h4 className="text-lg font-semibold text-gray-900 hover:text-orange-500 transition">
                    {title}
                  </h4>
                  <time className="mt-2 text-gray-500 text-sm">{date}</time>
                </div>
              </li>
            ))}
          </ul>
          <button className="w-full mt-4 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition duration-300">
            View All Posts
          </button>
        </aside>
      </main>
    </div>
  );
}
