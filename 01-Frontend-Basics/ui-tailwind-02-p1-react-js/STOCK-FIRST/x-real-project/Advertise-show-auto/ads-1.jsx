import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function App() {
  const ads = [
    "https://img.freepik.com/free-psd/delicious-burger-food-menu-instagram-facebook-story-template_106176-1402.jpg?semt=ais_hybrid&w=740&q=80",
    "https://www.gourmetads.com/wp-content/uploads/2019/05/fast-food-ads-burger-king-300x600.jpg",
    "https://i.pinimg.com/736x/48/fd/d5/48fdd54398bac199f778ed4ccd515fc7.jpg",
    "https://adsofbd.com/wp-content/uploads/2024/08/Pusti-Ghee-800x615.jpg",
    "https://adsofbd.com/wp-content/uploads/2019/03/Drinko.jpg",
    "https://adsofbd.com/wp-content/uploads/2019/03/Drinko1.jpg",
  ];

  const [currentAd, setCurrentAd] = useState(null);
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    let timer;

    const showRandomAd = () => {
      const randomIndex = Math.floor(Math.random() * ads.length);
      setCurrentAd(ads[randomIndex]);
      setShowAd(true);
    };

    if (!showAd) {
      timer = setTimeout(showRandomAd, Math.random() * 2000 + 3000); // 3-5s
    }

    return () => clearTimeout(timer);
  }, [showAd]);

  const handleCancel = () => {
    setShowAd(false);
    setCurrentAd(null);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="grid grid-cols-3 gap-6">
        {/* First 2 Grids */}
        <div className="bg-white shadow-md rounded-2xl p-4">Content 1</div>
        <div className="bg-white shadow-md rounded-2xl p-4">Content 2</div>

        {/* Advertisement Grid */}
        <div className="bg-white shadow-md rounded-2xl p-4 flex items-center justify-center relative min-h-[300px]">
          {showAd && currentAd ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={currentAd}
                alt="Advertisement"
                className="max-h-[400px] max-w-full rounded-lg shadow"
              />
              <button
                onClick={handleCancel}
                className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <p className="text-gray-400">No Advertisement</p>
          )}
        </div>
      </div>
    </div>
  );
}
