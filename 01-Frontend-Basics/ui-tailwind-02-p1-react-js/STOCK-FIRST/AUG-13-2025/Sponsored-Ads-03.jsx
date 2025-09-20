"use client";
import React, { useState, useEffect } from "react";

export default function NewsPage() {
  const ads = [
    "https://m.media-amazon.com/images/I/61+FNZ7DptL._UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/61j-lpgB9+L._UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/61BGLZw9P1L._UF1000,1000_QL80_.jpg",
    "https://bizimages.withfloats.com/actual/5a8cf13ba3f9b90be0025abb.jpg",
    "https://d2n7tchuu1wmsv.cloudfront.net/uploads/12505/products/1589121357_ruchi-bbq-chanachur-350-gm.jpg",
    "https://freshbazarbd.com/wp-content/uploads/2020/04/RUCHI.jpg",
    "https://www.wellfoodbd.com/documents/products/202402/WF-Plain-Toast.png",
    "https://wellfoodonline.com/wp-content/uploads/2020/10/Sugar-Free-2-600x600.jpg",
    "https://wellfoodonline.com/wp-content/uploads/2020/10/Sugar-Free-1-600x600.jpg"
  ];

  const [currentAd, setCurrentAd] = useState(ads[0]);

  useEffect(() => {
    const changeAd = () => {
      setCurrentAd(ads[Math.floor(Math.random() * ads.length)]);
      setTimeout(changeAd, Math.random() * 5000 + 3000); // 3-8 sec
    };
    changeAd();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Daily News</h1>
        <p className="max-w-3xl">
          This is a sample news page. Scroll down to see that the ad stays fixed
          on the right side of the screen.
        </p>
        {Array.from({ length: 15 }).map((_, idx) => (
          <p key={idx} className="mt-4 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tincidunt nulla a turpis interdum, nec egestas nibh ultrices.
          </p>
        ))}
      </div>

      {/* Sidebar Ad (Fixed Position) */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 bg-white rounded-lg shadow-lg p-2">
        <img
          src={currentAd}
          alt="Ad"
          className="max-w-[200px] max-h-[200px] object-contain"
        />
      </div>
    </div>
  );
}
