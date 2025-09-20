"use client";
import React, { useState, useEffect } from "react";

export default function NewsPage() {
  const ads = [
    "https://m.media-amazon.com/images/I/61+FNZ7DptL._UF1000,1000_QL80_.jpg",
    "https://freshbazarbd.com/wp-content/uploads/2020/04/RUCHI.jpg",
    "https://www.wellfoodbd.com/documents/products/202402/WF-Plain-Toast.png",
    "https://m.media-amazon.com/images/I/61j-lpgB9+L._UF1000,1000_QL80_.jpg",
    "https://wellfoodonline.com/wp-content/uploads/2020/10/Sugar-Free-1-600x600.jpg",
    "https://m.media-amazon.com/images/I/61BGLZw9P1L._UF1000,1000_QL80_.jpg",
    "https://bizimages.withfloats.com/actual/5a8cf13ba3f9b90be0025abb.jpg",
    "https://d2n7tchuu1wmsv.cloudfront.net/uploads/12505/products/1589121357_ruchi-bbq-chanachur-350-gm.jpg",
    "https://wellfoodonline.com/wp-content/uploads/2020/10/Sugar-Free-2-600x600.jpg"
    
  ];

  const [ad, setAd] = useState({ img: ads[0], top: 50, left: 50 });

  useEffect(() => {
    const changeAd = () => {
      setAd({
        img: ads[Math.floor(Math.random() * ads.length)],
        top: Math.random() * 90,
        left: Math.random() * 90
      });
      setTimeout(changeAd, Math.random() * 5000 + 3000);
    };
    changeAd();
  }, []);

  return (
    <div className="relative bg-gray-100 min-h-screen h-screen">
      <h1 className="text-center text-3xl font-bold p-4 bg-blue-600 text-white">
        Daily News with Random Ads
      </h1>

      <p className="p-4 max-w-3xl mx-auto">
        Sample news text here. Ads will randomly appear anywhere without being cropped.
      </p>

      {/* Floating Ad */}
      <div
        className="absolute bg-white rounded-lg shadow-lg p-1"
        style={{
          top: `${ad.top}%`,
          left: `${ad.left}%`,
          transform: "translate(-50%, -50%)"
        }}
      >
        <img
          src={ad.img}
          alt="Ad"
          className="max-w-[200px] max-h-[200px] object-contain"
        />
      </div>
    </div>
  );
}
