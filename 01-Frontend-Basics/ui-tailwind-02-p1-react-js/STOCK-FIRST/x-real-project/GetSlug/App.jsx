import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBlogSection from "./AllBlogSection";
import BlogDetails from "./BlogDetails";
import blogData from "./content.json";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllBlogSection blogs={blogData} />} />
        <Route path="/blog/:slug" element={<BlogDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

// Helper component to get blog by slug
const BlogDetailsWrapper = () => {
  const { slug } = useParams();
  const blog = blogData.find((b) => b.slug === slug);
  return blog ? (
    <BlogDetails blog={blog} currentIndex={0} totalBlogs={0} />
  ) : (
    <div className="text-center text-red-600 mt-10 text-xl">Blog Not Found</div>
  );
};

import { useParams } from "react-router-dom";
