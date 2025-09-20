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
    <div className="min-h-screen bg-gray-50 font-serif text-gray-900">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-8 border-b border-gray-300">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xl font-extrabold shadow-sm">
            R
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">Rasalina</h1>
        </div>
        <nav className="mt-4 md:mt-0 space-x-6 text-sm font-semibold uppercase tracking-wide text-gray-700">
          {["Home", "About", "Portfolio", "Services", "Blog", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className={`relative inline-block py-2 px-1 hover:text-orange-500 transition ${
                  item === "Blog"
                    ? "text-orange-500 after:absolute after:-bottom-2 after:left-0 after:w-2 after:h-2 after:bg-orange-400 after:rotate-45 after:rounded-sm"
                    : ""
                }`}
              >
                {item}
              </a>
            )
          )}
        </nav>
        <button className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold shadow-sm transition">
          Contact Me
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Featured Blog */}
        <article className="lg:col-span-3 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src={blogThumbnail}
            alt="Featured Blog"
            className="w-full h-64 object-cover brightness-95 hover:brightness-100 transition"
            loading="lazy"
          />
          <div className="p-8">
            <div className="flex flex-wrap items-center space-x-2 text-xs text-blue-600 font-semibold mb-3">
              <span>Rasalina</span>
              <span className="text-gray-300">&bull;</span>
              <time>February 10, 2022</time>
              <span className="text-gray-300">&bull;</span>
              <span>No Comments</span>
            </div>
            <h2 className="text-3xl font-extrabold leading-tight mb-4 hover:text-orange-500 cursor-pointer transition">
              Businesses Are Thriving, Societies Are Not. Time for a Change.
            </h2>
            <p className="text-gray-700 text-base leading-relaxed tracking-wide">
              Business is about maximizing profits. But what happens when
              profits come at the expense of society? How do we reconcile
              thriving companies with struggling communities? Explore this
              paradox and ideas for responsible growth.
            </p>
            <button className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
              Read More
            </button>
          </div>
        </article>

        {/* Sidebar - Recent Posts */}
        <aside className="space-y-6">
          <h3 className="text-2xl font-extrabold border-b-4 border-orange-400 inline-block pb-2 mb-6">
            Recent Posts
          </h3>
          <ul className="space-y-4">
            {recentPosts.map(({ title, date, img }, idx) => (
              <li
                key={idx}
                className="flex items-center space-x-4 cursor-pointer hover:text-orange-500 transition"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-14 h-14 rounded-md object-cover flex-shrink-0 shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-semibold">{title}</h4>
                  <time className="text-xs text-gray-500">{date}</time>
                </div>
              </li>
            ))}
          </ul>
          <button className="w-full mt-4 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition">
            View All Posts
          </button>
        </aside>
      </main>
    </div>
  );
}
