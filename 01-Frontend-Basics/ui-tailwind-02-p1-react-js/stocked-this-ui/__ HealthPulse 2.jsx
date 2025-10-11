"use client";
import { useState } from "react";
import { FiSearch, FiMail } from "react-icons/fi";

const articles = [
  {
    title: "10 Tips for a Healthy Lifestyle",
    summary:
      "Discover simple and effective ways to improve your health every day.",
    date: "2025-10-08",
    category: "Fitness",
    image: "https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg"
  },
  {
    title: "The Importance of Mental Health",
    summary:
      "Mental health is as important as physical health. Learn how to care for your mind.",
    date: "2025-10-06",
    category: "Wellness",
    image: "https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg"
  },
  {
    title: "Healthy Eating: Foods to Boost Immunity",
    summary:
      "A guide to foods rich in vitamins, minerals, and antioxidants for better immunity.",
    date: "2025-10-05",
    category: "Nutrition",
    image: "https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg"
  },
  {
    title: "Morning Exercise Routine for Beginners",
    summary: "Start your day with these easy exercises to boost energy.",
    date: "2025-10-04",
    category: "Fitness",
    image: "https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg"
  }
];

export default function ProfessionalHealthBlog() {
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
            HealthPulse
          </h1>
          <nav className="space-x-6 font-medium text-gray-700 hidden md:flex">
            <a href="#" className="hover:text-blue-600 transition">Home</a>
            <a href="#" className="hover:text-blue-600 transition">Articles</a>
            <a href="#" className="hover:text-blue-600 transition">About</a>
            <a href="#" className="hover:text-blue-600 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Your Daily Health Insights
          </h2>
          <p className="text-gray-700 mb-6 text-lg md:text-xl">
            Stay informed, stay healthy. Explore our professional health articles.
          </p>
          <div className="flex justify-center max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="px-4 py-2 w-full rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-lg text-white hover:bg-blue-700 transition">
              <FiSearch />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Articles */}
        <div className="md:col-span-2 space-y-8">
          {filteredArticles.length === 0 && (
            <p className="text-gray-500">No articles found.</p>
          )}
          {filteredArticles.map((article, i) => (
            <article
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-gray-500">{article.date}</span>
                <h3 className="text-xl font-bold mt-2 mb-2">{article.title}</h3>
                <p className="text-gray-700 mb-3">{article.summary}</p>
                <span className="inline-block text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {article.category}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Categories */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold mb-4 text-gray-800">Categories</h4>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#" className="hover:text-blue-600 transition">Nutrition</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Fitness</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Mental Health</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Wellness</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold mb-2 text-gray-800">Subscribe</h4>
            <p className="text-gray-700 text-sm mb-3">
              Get weekly health tips in your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-full rounded-l border border-gray-300 focus:outline-none"
              />
              <button className="bg-blue-600 px-3 py-2 rounded-r text-white hover:bg-blue-700 transition">
                <FiMail />
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          &copy; 2025 HealthPulse. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
