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
    <div className="min-h-screen bg-white font-serif text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b">
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            R
          </div>
          <h1 className="text-2xl font-bold">Rasalina</h1>
        </div>
        {/* Nav */}
        <nav className="space-x-6 text-sm font-semibold uppercase">
          <a href="#" className="hover:text-orange-500">
            Home
          </a>
          <a href="#" className="hover:text-orange-500">
            About
          </a>
          <a href="#" className="hover:text-orange-500">
            Portfolio
          </a>
          <a href="#" className="hover:text-orange-500">
            Services
          </a>
          <a
            href="#"
            className="relative text-orange-500 after:absolute after:-bottom-2 after:left-0 after:w-3 after:h-3 after:bg-orange-400 after:rotate-45 after:rounded-sm"
          >
            Blog
          </a>
          <a href="#" className="hover:text-orange-500">
            Contact
          </a>
        </nav>
        <button className="bg-blue-600 text-white px-5 py-2 rounded font-semibold hover:bg-blue-700 transition">
          Contact Me
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Featured Blog */}
        <article className="md:col-span-2">
          <img
            src={blogThumbnail}
            alt="Featured Blog"
            className="w-full rounded-lg mb-6"
          />
          <div className="flex items-center space-x-4 text-sm text-blue-600">
            <div>Rasalina</div>
            <div>&#8226;</div>
            <div>February 10, 2022</div>
            <div>&#8226;</div>
            <div>No Comments</div>
          </div>
          <h2 className="text-3xl font-bold mt-4 mb-4">
            Businesses Are Thriving, Societies Are Not. Time for
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Business is about maximizing profits. But what happens when profits
            come at the expense of society? How do we reconcile thriving
            companies with struggling communities? Explore this paradox and
            ideas for responsible growth.
          </p>
        </article>

        {/* Sidebar - Recent Posts */}
        <aside>
          <h3 className="text-xl font-bold mb-4 border-b border-orange-400 pb-2">
            Recent Post
          </h3>
          <ul className="space-y-6">
            {recentPosts.map(({ title, date, img }, idx) => (
              <li key={idx} className="flex space-x-4">
                <img
                  src={img}
                  alt={title}
                  className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{title}</h4>
                  <time className="text-gray-500 text-sm">{date}</time>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  );
}
