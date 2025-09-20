import React from "react";
import BlogCard from "./BlogCard";

export default function AllBlogSection({ blogs }) {
  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-800 mb-12 text-center">
        All Blog Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
  );
}
