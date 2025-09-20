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
      <h2 className="text-3xl font-bold mb-8">All Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {content.blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={blog.blogThumbnail.url}
              alt={blog.blogThumbnail.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 flex-1">{blog.intro}</p>
              <button
                onClick={() => router.push(`/blog/${slugify(blog.title)}`)}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Details Blog
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
