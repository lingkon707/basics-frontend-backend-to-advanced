"use client";
import { useState } from "react";
import { FiSearch, FiMail, FiHeart, FiActivity, FiSmile, FiCoffee, FiMenu } from "react-icons/fi";

const articles = [
  {
    title: "10 Tips for a Healthy Lifestyle",
    summary:
      "Discover simple and effective ways to improve your health every day.",
    date: "2025-10-08",
    category: "Fitness",
    image:
      "https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg",
  },
  {
    title: "The Importance of Mental Health",
    summary:
      "Mental health is as important as physical health. Learn how to care for your mind.",
    date: "2025-10-06",
    category: "Wellness",
    image:
      "https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg",
  },
  {
    title: "Healthy Eating: Foods to Boost Immunity",
    summary:
      "A guide to foods rich in vitamins, minerals, and antioxidants for better immunity.",
    date: "2025-10-05",
    category: "Nutrition",
    image:
      "https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg",
  },
  {
    title: "Morning Exercise Routine for Beginners",
    summary: "Start your day with these easy exercises to boost energy.",
    date: "2025-10-04",
    category: "Fitness",
    image:
      "https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg",
  },
];

const categories = [
  { name: "Nutrition", icon: FiCoffee },
  { name: "Fitness", icon: FiActivity },
  { name: "Mental Health", icon: FiSmile },
  { name: "Wellness", icon: FiHeart },
];

export default function ProfessionalHealthBlog() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight">
            HealthPulse
          </h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8 font-semibold text-gray-700">
            <a href="#" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Articles
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-md border-t border-gray-200">
            <ul className="flex flex-col space-y-3 p-4 font-semibold text-gray-700">
              <li>
                <a href="#" className="hover:text-blue-600 transition block">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition block">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition block">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition block">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Your Daily Health Insights
          </h2>
          <p className="mb-8 text-lg md:text-xl font-light drop-shadow-md">
            Stay informed, stay healthy. Explore our professional health
            articles.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex max-w-xl mx-auto shadow-lg rounded-full overflow-hidden bg-white"
            role="search"
            aria-label="Search articles"
          >
            <input
              type="text"
              placeholder="Search articles..."
              className="flex-grow px-6 py-4 text-gray-900 text-lg focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search articles"
            />
            <button
              type="submit"
              className="bg-blue-700 px-6 flex items-center justify-center text-white hover:bg-blue-800 transition"
              aria-label="Search"
            >
              <FiSearch size={24} />
            </button>
          </form>
        </div>
      </section>

      {/* Main content grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid md:grid-cols-4 gap-10 flex-grow">
        {/* Articles */}
        <section className="md:col-span-3 space-y-10">
          {filteredArticles.length === 0 ? (
            <p className="text-gray-500 text-center text-lg">No articles found.</p>
          ) : (
            filteredArticles.map((article, i) => (
              <article
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <time
                    className="text-xs text-gray-400 tracking-wide uppercase"
                    dateTime={article.date}
                  >
                    {article.date}
                  </time>
                  <h3 className="text-2xl font-semibold mt-2 mb-3 text-gray-900">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-5">{article.summary}</p>
                  <span className="inline-block text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                    {article.category}
                  </span>
                </div>
              </article>
            ))
          )}
        </section>

        {/* Sidebar */}
        <aside className="sticky top-32 space-y-12">
          {/* Categories */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">
              Categories
            </h4>
            <ul className="space-y-4">
              {categories.map(({ name, icon: Icon }) => (
                <li key={name}>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition font-medium"
                    aria-label={`Browse articles in ${name}`}
                  >
                    <Icon className="text-blue-600" size={20} />
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">
              Subscribe
            </h4>
            <p className="text-gray-600 mb-5 text-sm font-light">
              Get weekly health tips in your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex rounded-full overflow-hidden border border-gray-300"
              aria-label="Subscribe to newsletter"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-5 py-3 text-gray-700 focus:outline-none"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 px-6 flex items-center justify-center text-white hover:bg-blue-700 transition"
                aria-label="Subscribe"
              >
                <FiMail size={24} />
              </button>
            </form>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
          &copy; 2025 HealthPulse. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
