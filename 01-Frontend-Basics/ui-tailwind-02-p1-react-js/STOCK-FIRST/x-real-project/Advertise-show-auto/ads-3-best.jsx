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
        {/* <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">1. The Root Causes</h2>
        <p className="mb-4 text-gray-700">
          A crisis never emerges in isolation. Economic mismanagement,
          corruption, inequality, and political instability are often the
          silent builders of national turmoil. Identifying these roots is the
          first step toward resolution.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">2. The Human Toll</h2>
        <p className="mb-4 text-gray-700">
          Behind every statistic are real human stories: families displaced,
          workers unemployed, students deprived of education, and communities
          losing trust in governance. Empathy must remain at the heart of any
          solution.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">3. Role of Leadership</h2>
        <p className="mb-4 text-gray-700">
          In times of crisis, leadership determines whether a nation collapses
          or rebuilds stronger. Transparency, accountability, and vision are
          non-negotiable qualities.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">4. Collective Responsibility</h2>
        <p className="mb-4 text-gray-700">
          Citizens too play a role. From grassroots movements to civic
          participation, every voice contributes to shaping the response.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">5. Path Toward Resolution</h2>
        <p className="mb-4 text-gray-700">
          Healing from crisis requires reform, dialogue, and rebuilding trust
          in institutions. True resolution is measured not by returning to the
          past, but by ensuring such instability never repeats.
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
          "A nation’s greatest strength is not its wealth or armies, but its
          people’s ability to rise stronger from its darkest hours."
        </blockquote>
        <p className="text-gray-700 leading-relaxed">
          Ultimately, every national crisis offers a lesson — a painful yet
          powerful opportunity to correct wrongs and build anew. The future of
          any nation depends on whether it chooses denial and division, or
          unity and transformation.
        </p> */}
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
