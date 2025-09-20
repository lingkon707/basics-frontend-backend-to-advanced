"use client";
import React from "react";


// @keyframes marquee {
//   0% {
//     transform: translateX(0%);
//   }
//   100% {
//     transform: translateX(-60%);
//   }
// }
// .animate-marquee {
//   animation: marquee 10s linear infinite;
// }

const images = [
  // Chanachur
  "https://gbegbe.com/images/thumbs/0002574_ruchi-bbq-chanachur-150-gm_510.png",
  "https://d2n7tchuu1wmsv.cloudfront.net/uploads/12505/products/1589121357_ruchi-bbq-chanachur-350-gm.jpg",
  "https://freshbazarbd.com/wp-content/uploads/2020/04/RUCHI.jpg",
  // Chips
  "https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFUTEZVNVlqNkwuX1NMMTUwMF8uanBn.jpg",
  "https://www.dccbazar.com.bd/images/detailed/8/71Drb_lWlfL._SL1500_.jpg",
  "https://www.lays.com/sites/lays.com/files//2019-09/Lightly%20Salted%20Classic.png",
  // Agro
  "https://www.janathaagro.com/cdn/shop/files/3194-Janatha-Agro-Home-Banner-03.jpg?v=1715621427&width=3840",
  "https://www.milifestylemarketing.com/Assets/Images/MI-Lifestyle_Blog-Banner_1280x540_29-Jan_001.PNG",
];

export default function MiniAutoSliderSimple() {
  return (
    <div className="w-full bg-white py-4 overflow-hidden">
      <div className="flex gap-2 animate-marquee whitespace-nowrap">
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="w-[80px] h-[60px] flex items-center justify-center border border-gray-200 rounded-lg bg-green-50 shadow-sm p-1"
          >
            <img
              src={src}
              alt=""
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
