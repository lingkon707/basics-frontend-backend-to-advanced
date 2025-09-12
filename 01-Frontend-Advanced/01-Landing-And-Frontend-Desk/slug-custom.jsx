'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const DynamicButtons = () => {
  const router = useRouter();

  // Button data: label + URL
  const buttons = [
    { label: 'Blog 1', url: '/blog1' },
    { label: 'Blog 2', url: '/blog2' },
    { label: 'Blog 3', url: '/blog3' },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          onClick={() => router.push(btn.url)}
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition shadow-lg"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default function SpeakingListeningBlog() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">
        Speaking & Listening Blogs
      </h1>

      {/* Dynamic Buttons */}
      <DynamicButtons />
    </main>
  );
}
