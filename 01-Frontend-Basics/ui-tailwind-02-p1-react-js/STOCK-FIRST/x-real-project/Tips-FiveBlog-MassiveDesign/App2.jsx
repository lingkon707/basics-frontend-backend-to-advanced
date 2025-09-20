import React, { useEffect, useState } from "react";

export default function BlogDetails() {
  const [blogData, setBlogData] = useState(null);

  // keep json in public folder must
  useEffect(() => {
    fetch("/contentx.json")
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .catch((err) => console.error("Failed to load content:", err));
  }, []);

  if (!blogData)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-indigo-600 text-xl font-semibold">Loading...</p>
      </div>
    );

  return (
    <article className="max-w-5xl mx-auto px-6 py-16 bg-gradient-to-tr from-indigo-50 via-white to-indigo-50 rounded-3xl shadow-xl">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-indigo-900 drop-shadow-md mb-8 tracking-tight leading-tight">
        {blogData.title}
      </h1>

      {/* Author & Date */}
      <div className="flex items-center space-x-4 mb-12">
        <img
          src={blogData.author.image}
          alt={`${blogData.author.name} avatar`}
          className="w-16 h-16 rounded-full object-cover border-4 border-indigo-300 shadow-md"
          loading="lazy"
        />
        <div>
          <p className="text-lg font-semibold text-indigo-900">
            {blogData.author.name}
          </p>
          <time
            className="text-sm text-indigo-600 font-medium"
            dateTime={new Date(blogData.publishDate).toISOString()}
          >
            {blogData.publishDate}
          </time>
        </div>
      </div>

      {/* Blog Thumbnail */}
      <div className="relative mb-12 rounded-2xl overflow-hidden shadow-lg ring-1 ring-indigo-200">
        <img
          src={blogData.blogThumbnail.url}
          alt={blogData.blogThumbnail.alt}
          className="w-full h-72 object-cover brightness-90 transition duration-300 hover:brightness-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent" />
      </div>

      {/* Intro */}
      <p className="max-w-3xl mx-auto text-xl text-indigo-800 mb-16 font-light leading-relaxed tracking-wide drop-shadow-sm">
        {blogData.intro}
      </p>

      {/* Tips */}
      <section className="space-y-14">
        {blogData.tips.map((tip) => (
          <section
            key={tip.id}
            className="relative bg-white rounded-3xl p-10 shadow-2xl border border-indigo-100 hover:shadow-indigo-400 transition-shadow duration-500 cursor-pointer"
            tabIndex={0}
          >
            <div className="absolute -top-6 left-6 bg-indigo-600 text-white font-extrabold rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-lg select-none">
              {tip.id}
            </div>
            <h2 className="text-3xl font-bold text-indigo-700 ml-14 mb-4 tracking-wide">
              {tip.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed font-medium tracking-wide">
              {tip.content}
            </p>
          </section>
        ))}
      </section>
    </article>
  );
}
