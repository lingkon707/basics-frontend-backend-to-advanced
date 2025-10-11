"use client";
import { useState } from "react";
import { FiSearch, FiMail } from "react-icons/fi";

export default function HealthBlog() {
  const [search, setSearch] = useState("");

  // Example articles
  const articles = [
    {
      title: "10 Tips for a Healthy Lifestyle",
      summary:
        "Discover simple and effective ways to improve your health every day.",
      date: "2025-10-08",
      category: "Fitness"
    },
    {
      title: "The Importance of Mental Health",
      summary:
        "Mental health is as important as physical health. Learn how to care for your mind.",
      date: "2025-10-06",
      category: "Wellness"
    },
    {
      title: "Healthy Eating: Foods to Boost Immunity",
      summary:
        "A guide to foods rich in vitamins, minerals, and antioxidants for better immunity.",
      date: "2025-10-05",
      category: "Nutrition"
    }
  ];

  // Filter articles
  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold">HealthPulse</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Articles
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-12">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Daily Dose of Health Tips
          </h2>
          <p className="text-gray-700 mb-6">
            Stay informed, stay healthy, stay happy. Explore our articles for a
            healthier lifestyle.
          </p>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search articles..."
              className="px-4 py-2 w-full md:w-1/2 rounded-l-lg border border-gray-300 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-lg text-white hover:bg-blue-700">
              <FiSearch />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Articles */}
        <div className="md:col-span-2 space-y-6">
          {filteredArticles.length === 0 && (
            <p className="text-gray-500">No articles found.</p>
          )}
          {filteredArticles.map((article, i) => (
            <article
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <span className="text-sm text-gray-500">{article.date}</span>
              <h3 className="text-xl font-bold mt-2">{article.title}</h3>
              <p className="mt-2 text-gray-700">{article.summary}</p>
              <span className="inline-block mt-2 text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                {article.category}
              </span>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Categories */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold mb-2">Categories</h4>
            <ul className="space-y-1 text-gray-700">
              <li>
                <a href="#" className="hover:underline">
                  Nutrition
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Fitness
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mental Health
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wellness
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold mb-2">Subscribe</h4>
            <p className="text-gray-700 text-sm mb-2">
              Get weekly health tips in your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-full rounded-l border border-gray-300 focus:outline-none text-gray-800"
              />
              <button className="bg-blue-600 px-3 py-2 rounded-r text-white hover:bg-blue-700">
                <FiMail />
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-sm">
          &copy; 2025 HealthPulse. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
