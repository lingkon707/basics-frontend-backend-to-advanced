// app/page.jsx (Next.js) or src/App.jsx (CRA)
"use client";
import React, { useState, useEffect } from "react";

export default function NewsPage() {
  const ads = [
    "https://m.media-amazon.com/images/I/61+FNZ7DptL._UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/61j-lpgB9+L._UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/61BGLZw9P1L._UF1000,1000_QL80_.jpg",
    "https://bizimages.withfloats.com/actual/5a8cf13ba3f9b90be0025abb.jpg"
  ];

  const [currentAd, setCurrentAd] = useState(ads[0]);

  useEffect(() => {
    const changeAdRandomly = () => {
      const randomAd = ads[Math.floor(Math.random() * ads.length)];
      setCurrentAd(randomAd);

      // Random interval between 3s to 8s
      const nextChange = Math.floor(Math.random() * (8000 - 3000 + 1)) + 3000;
      setTimeout(changeAdRandomly, nextChange);
    };

    changeAdRandomly();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 rounded-lg mb-6 shadow">
        <h1 className="text-2xl font-bold">Daily News</h1>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* News Section */}
        <main className="md:col-span-3 space-y-4">
          <article className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Breaking News Headline</h2>
            <p className="text-gray-700">
              This is a sample news article. You can add multiple articles here and
              fetch them dynamically from an API later.
            </p>
          </article>
          <article className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Technology Update</h2>
            <p className="text-gray-700">
              Latest updates from the tech world — gadgets, AI, and more.
            </p>
          </article>
        </main>

        {/* Ad Section */}
        <aside className="space-y-4">
          <div className="bg-white p-3 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Sponsored</h3>
            <img
              src={currentAd}
              alt="Advertisement"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
