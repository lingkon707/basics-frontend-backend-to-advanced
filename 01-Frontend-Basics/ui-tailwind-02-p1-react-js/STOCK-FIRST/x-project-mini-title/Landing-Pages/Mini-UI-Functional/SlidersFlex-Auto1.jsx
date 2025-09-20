"use client";
import React from "react";

/* globals.css or inside tailwind.config.js using safelist */

// @keyframes slide {
//   0% {
//     transform: translateX(0%);
//   }
//   100% {
//     transform: translateX(-200%);
//   }
// }

// .animate-slide {
//   animation: slide 10s linear infinite;
// }


const sliders = {
  chanachur: [
    "https://gbegbe.com/images/thumbs/0002574_ruchi-bbq-chanachur-150-gm_510.png",
    "https://d2n7tchuu1wmsv.cloudfront.net/uploads/12505/products/1589121357_ruchi-bbq-chanachur-350-gm.jpg",
    "https://freshbazarbd.com/wp-content/uploads/2020/04/RUCHI.jpg",
    "https://www.wellfoodbd.com/documents/products/202402/WF-Plain-Toast.png",
    "https://wellfoodonline.com/wp-content/uploads/2020/10/Sugar-Free-2-600x600.jpg",
    "https://wellfoodonline.com/wp-content/uploads/2020/10/Sugar-Free-1-600x600.jpg",
     "https://gbegbe.com/images/thumbs/0002574_ruchi-bbq-chanachur-150-gm_510.png",
    "https://d2n7tchuu1wmsv.cloudfront.net/uploads/12505/products/1589121357_ruchi-bbq-chanachur-350-gm.jpg"
    
  ],
  chips: [
    "https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFUTEZVNVlqNkwuX1NMMTUwMF8uanBn.jpg",
    "https://www.dccbazar.com.bd/images/detailed/8/71Drb_lWlfL._SL1500_.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/608588179928623.6501f0213467b.jpg",
    "https://www.lays.com/sites/lays.com/files//2019-09/Lightly%20Salted%20Classic.png",
    "https://www.yellowdiamond.in/wp-content/uploads/2024/07/Chips_Classic_Salted-e1722353260254.png",
    "https://www.yellowdiamond.in/wp-content/uploads/2024/07/Chips.png",
  ],
  agro: [
    "https://www.janathaagro.com/cdn/shop/files/3194-Janatha-Agro-Home-Banner-03.jpg?v=1715621427&width=3840",
    "https://www.arpitaagro.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-02-at-4.45.21-PM.jpeg",
    "https://www.milifestylemarketing.com/Assets/Images/MI-Lifestyle_Blog-Banner_1280x540_29-Jan_001.PNG",
    "https://4.imimg.com/data4/VB/JI/MY-22345174/natural-agro-products.png",
  ],
};

const AutoSlider = ({ title, images }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-green-700 mb-2">{title}</h2>
    <div className="overflow-hidden relative w-full border rounded-xl shadow bg-white">
      <div className="flex animate-slide gap-3 py-3 px-2">
        {images.concat(images).map((img, i) => (
          <div
            key={i}
            className="min-w-[100px] h-[80px] flex items-center justify-center border border-green-200 bg-green-50 rounded-lg p-1"
          >
            <img src={img} alt="" className="h-full w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function MiniAutoSlider() {
  return (
    <div className="bg-green-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <AutoSlider title="Chanachur" images={sliders.chanachur} />
        <AutoSlider title="Chips" images={sliders.chips} />
        <AutoSlider title="Agro Products" images={sliders.agro} />
      </div>
    </div>
  );
}
