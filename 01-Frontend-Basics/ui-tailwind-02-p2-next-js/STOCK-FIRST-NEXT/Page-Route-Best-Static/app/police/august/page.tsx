'use client';

import { useRouter } from 'next/navigation';
import { slugify } from '@/slugify'; // ✅ Import utility
import React from 'react';

const blogs = [
  { title: 'Crime in Sector 21', content: 'Details about Sector 21 incident' },
  { title: 'Robbery in Market', content: 'Details about the robbery' },
  { title: 'Cyber Crime Increase', content: 'Details on cyber crimes' }
];

export default function August() {
  const router = useRouter();

  const handleDetailsClick = (title: string) => {
    const slug = slugify(title);
    router.push(`/police/august/${slug}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">August Blog Posts</h1>
      {blogs.map((blog, index) => (
        <div key={index} className="border p-4 mb-4 rounded shadow">
          <h2 className="text-xl font-semibold">{blog.title}</h2>
          <button
            onClick={() => handleDetailsClick(blog.title)}
            className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Details
          </button>
        </div>
      ))}
    </div>
  );
}
