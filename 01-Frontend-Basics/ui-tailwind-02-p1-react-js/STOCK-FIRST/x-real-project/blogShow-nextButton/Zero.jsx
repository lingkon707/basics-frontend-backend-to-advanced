import React, { useEffect, useState } from "react";
import BlogDetails from "./BlogDetails";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Navigation handlers
  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blogs.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  return (
    <main className="bg-indigo-50 min-h-screen py-12">
      <BlogDetails
        blog={blogs[currentIndex]}
        onNext={goNext}
        onPrev={goPrev}
        currentIndex={currentIndex}
        totalBlogs={blogs.length}
      />
    </main>
  );
}
