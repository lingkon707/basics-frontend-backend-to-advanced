// app/components/AllBlogSection.jsx
'use client';

import React from 'react';
import content from '@/app/content.json';
import { slugify } from '@/app/utils/slugify';
import { useRouter } from 'next/navigation';

export default function AllBlogSection() {
  const router = useRouter();

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-indigo-800 mb-12">
         Our Latest Blogs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {content.blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col hover:shadow-indigo-300 transition-shadow duration-300"
          >
            {/* Thumbnail */}
            <img
              src={blog.blogThumbnail.url}
              alt={blog.blogThumbnail.alt}
              className="w-full h-48 object-cover"
              loading="lazy"
            />

            {/* Card Body */}
            <div className="flex flex-col flex-1 p-5">
              {/* Title */}
              <h3 className="text-xl font-semibold text-indigo-900 mb-1 line-clamp-2">
                {blog.title}
              </h3>

              {/* Publish Date */}
              <p className="text-sm text-gray-500 mb-4">{blog.publishDate}</p>

              {/* Author Info & Button */}
              <div className="mt-auto flex items-center justify-between gap-4">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={blog.author.image}
                    alt={blog.author.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-indigo-300 shadow"
                  />
                  <div>
                    <p className="text-sm font-medium text-indigo-800">{blog.author.name}</p>
                  </div>
                </div>

                {/* Details Button */}
                <button
                  onClick={() => router.push(`/blog/${slugify(blog.title)}`)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 whitespace-nowrap"
                >
                   Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
