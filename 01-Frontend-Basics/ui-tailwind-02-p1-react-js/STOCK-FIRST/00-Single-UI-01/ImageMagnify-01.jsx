import React from "react";

const images = [
  "https://5.imimg.com/data5/SELLER/Default/2024/4/413978919/JU/CF/RH/57183086/model-portfolio-photography.jpg",
  "https://www.mgfilmproductions.com/uploads/1/4/5/8/145812880/389783587_3.jpg",
  "https://live.staticflickr.com/2627/4117177600_8e70c6d49a.jpg"
];

export default function App() {
  const [mainImage, setMainImage] = React.useState(images[0]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="relative w-full max-w-sm bg-white rounded-xl shadow-xl p-4 sm:p-6">
        
        {/* Top-left small preview */}
        <div className="absolute top-4 left-4 w-14 h-14 rounded-md shadow-md border border-gray-200 overflow-hidden z-10 bg-white">
          <img src={mainImage} alt="Small Preview" className="w-full h-full object-cover" />
        </div>

        {/* Main image */}
        <div className="mt-6 sm:mt-4">
          <img
            src={mainImage}
            alt="Main"
            className="rounded-lg w-full object-cover aspect-square sm:aspect-[4/5] shadow-sm transition duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* Thumbnails + Add */}
        <div className="flex justify-center mt-4 gap-3">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setMainImage(img)}
              className={`w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md cursor-pointer border ${
                mainImage === img ? "border-blue-500" : "border-transparent"
              } hover:opacity-90 transition`}
              alt={`Thumbnail ${idx + 1}`}
            />
          ))}

          {/* Add Photo Placeholder */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-xs text-gray-500 cursor-pointer hover:bg-gray-100">
            Add
          </div>
        </div>
      </div>
    </div>
  );
}
