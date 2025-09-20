import React from "react";

const Blog = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    id="blog"
    className="min-h-screen bg-gray-200 px-8 py-12"
  >
    <h2 className="text-3xl font-semibold mb-6">Blog Section</h2>
    {[...Array(15)].map((_, i) => (
      <article
        key={i}
        className="mb-6 p-4 bg-white rounded shadow"
      >
        <h3 className="text-xl font-bold mb-2">Blog Post #{i + 1}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </article>
    ))}
  </section>
));

export default Blog;
