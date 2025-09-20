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
    let adTimer;

    const showRandomAd = () => {
      const randomIndex = Math.floor(Math.random() * ads.length);
      setCurrentAd(ads[randomIndex]);
      setShowAd(true);
    };

    // Initial ad display after 3-4 seconds
    const initialTimer = setTimeout(showRandomAd, Math.random() * 1000 + 3000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (showAd) {
      // Change ad every 3 seconds if not cancelled
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * ads.length);
        setCurrentAd(ads[randomIndex]);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [showAd]);

  const handleCancel = () => {
    setShowAd(false);
    setCurrentAd(null);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex">
      {/* Blog Section */}
      <div className="flex-1 bg-white shadow-xl rounded-2xl p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">National Crisis</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          A national crisis is not merely a political challenge but a defining
          moment that reshapes the collective conscience of a nation. It tests
          the resilience of its people, the accountability of its leaders, and
          the strength of its institutions. Throughout history, crises have
          come in many forms: political upheaval, natural disasters, economic
          recessions, or social unrest. Each has carried with it the potential
          to either divide a society or unite it toward a renewed vision of
          hope and progress.
        </p>
      </div>

      {/* Fixed Advertisement Section */}
      <div className="w-72 ml-6 relative">
        <div className="fixed top-6 right-6 w-72 bg-white shadow-md rounded-2xl p-4 flex items-center justify-center min-h-[300px]">
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
