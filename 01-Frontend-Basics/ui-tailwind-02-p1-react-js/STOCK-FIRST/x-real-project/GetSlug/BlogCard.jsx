import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-indigo-100 hover:shadow-xl transition">
      <img
        src={blog.blogThumbnail.url}
        alt={blog.blogThumbnail.alt}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 space-y-3">
        <p className="text-sm text-gray-500">{blog.publishDate}</p>
        <h2 className="text-xl font-bold text-indigo-800">{blog.title}</h2>
        <div className="flex items-center space-x-3">
          <img
            src={blog.author.image}
            alt={blog.author.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-gray-700 font-medium">{blog.author.name}</span>
        </div>
        <Link
          to={`/blog/${blog.slug}`}
          className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-sm"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
