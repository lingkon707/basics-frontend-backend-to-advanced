import React, { useEffect, useState } from "react";
import BlogDetails from "./BlogDetails";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    import("./content.json")
      .then((module) => {
        setBlogs(module.default);
      })
      .catch((err) => {
        console.error("Failed to load blogs:", err);
      });
  }, []);

  if (!blogs.length)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-indigo-600 text-xl font-semibold">Loading blogs...</p>
      </div>
    );

  return (
    <main className="bg-indigo-50 min-h-screen py-12">
      {blogs.map((blog) => (
        <BlogDetails key={blog.id} blog={blog} />
      ))}
    </main>
  );
}
