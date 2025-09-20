import React from "react";

const post = {
  title: "10 Tips for Effective Remote Work",
  excerpt:
    "Discover practical tips to boost your productivity and maintain work-life balance while working remotely.",
  readTime: "5 min read",
  categories: ["Productivity", "Remote Work", "Tips"],
  image:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <article className="max-w-xl bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <time className="text-sm text-gray-500">{post.readTime}</time>
            <div className="flex space-x-2">
              {post.categories.map((cat, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-semibold text-indigo-700 bg-indigo-100 cursor-default
                    transition-shadow duration-300 hover:shadow-md hover:shadow-indigo-300"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
          <p className="text-gray-700">{post.excerpt}</p>
        </div>
      </article>
    </div>
  );
}
