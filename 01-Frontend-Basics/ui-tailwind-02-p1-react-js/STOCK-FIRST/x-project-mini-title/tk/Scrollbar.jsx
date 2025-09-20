import React from "react";

const blogs = [
  {
    title: "How to Build a Modern React App",
    excerpt:
      "Learn the fundamentals of building a modern React app with hooks, context, and performance optimization.",
    date: "July 10, 2025",
  },
  {
    title: "Tailwind CSS: Utility-first Styling",
    excerpt:
      "Explore Tailwind CSS and how utility-first styling can speed up your UI development process.",
    date: "June 22, 2025",
  },
  {
    title: "Next.js for Server-Side Rendering",
    excerpt:
      "Discover Next.js features for server-side rendering and static site generation for better SEO.",
    date: "May 15, 2025",
  },
  {
    title: "JavaScript ES2025 Features",
    excerpt:
      "An overview of the latest JavaScript ES2025 features you should know to write cleaner code.",
    date: "April 30, 2025",
  },
  {
    title: "Optimizing Web Performance",
    excerpt:
      "Tips and tricks to improve your web app performance and deliver a smooth user experience.",
    date: "March 20, 2025",
  },
  {
    title: "State Management with Redux Toolkit",
    excerpt:
      "Manage complex state easily with Redux Toolkit and best practices in 2025.",
    date: "February 11, 2025",
  },
];

export default function BlogHub() {
  return (
    <>
     
 <style>{`
    .custom-scrollbar::-webkit-scrollbar {
      width: 36px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #e5e7eb;
      border-radius: 12px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: #22c55e;
      border-radius: 12px;
      border: 8px solid #e5e7eb;
    }
    .custom-scrollbar {
      scrollbar-width: auto;
      scrollbar-color: #22c55e #e5e7eb;
    }
  `}</style>

  <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 font-sans">
    <div
      className="w-full max-w-6xl h-[550px] overflow-y-auto space-y-6 pr-10 custom-scrollbar"
    >
      {blogs.map(({ title, excerpt, date }, index) => (
        <article
          key={index}
          className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h2>
          <p className="text-gray-700 mb-3">{excerpt}</p>
          <time className="text-sm text-green-600 font-medium">{date}</time>
        </article>
      ))}
    </div>
  </div>
</>
  );
}
