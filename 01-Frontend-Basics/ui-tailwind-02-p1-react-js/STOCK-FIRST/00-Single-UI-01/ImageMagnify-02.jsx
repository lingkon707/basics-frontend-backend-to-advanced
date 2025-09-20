import React, { useState } from "react";

const images = [
  "https://5.imimg.com/data5/SELLER/Default/2024/4/413978919/JU/CF/RH/57183086/model-portfolio-photography.jpg",
  "https://www.mgfilmproductions.com/uploads/1/4/5/8/145812880/389783587_3.jpg",
  "https://live.staticflickr.com/2627/4117177600_8e70c6d49a.jpg"
];

export default function App() {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Main Image */}
        <div className="w-full">
          <img
            src={mainImage}
            alt="Main Display"
            className="w-full h-96 object-cover transition-all duration-300"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center items-center gap-3 p-4 bg-white">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setMainImage(img)}
              alt={`Thumbnail ${idx + 1}`}
              className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition hover:opacity-80 ${
                mainImage === img ? "border-blue-500" : "border-gray-200"
              }`}
            />
          ))}

          {/* Add Photo Button */}
          <div className="w-16 h-16 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 cursor-pointer hover:bg-gray-100 transition">
            +
          </div>
        </div>
      </div>
    </div>
  );
}
