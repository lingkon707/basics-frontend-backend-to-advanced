import {
  ChatBubbleLeftIcon,
  PhotoIcon,
  VideoCameraIcon,
  SpeakerWaveIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const tabs = [
  { label: "Featured", icon: ChatBubbleLeftIcon, active: true },
  { label: "Image", icon: PhotoIcon },
  { label: "Video", icon: VideoCameraIcon },
  { label: "Audio", icon: SpeakerWaveIcon },
  { label: "Vector", icon: CursorArrowRaysIcon },
];

const cards = [
  {
    title: "Text to image",
    desc: "Generate high-quality images using text with latest Image 4 Model.",
    img: "https://4.imimg.com/data4/VB/JI/MY-22345174/natural-agro-products.png",
  },
  {
    title: "Text to video",
    desc: "Generate video clips from a detailed description.",
    img: "https://www.shyamgroup.org/images/slider/slider3.jpg",
  },
  {
    title: "Boards (beta)",
    desc: "Generate images or upload your own and start remixing on a board.",
    img: "https://www.shyamgroup.org/images/agro/003.jpg",
    tag: "New",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8">
      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm
              ${
                tab.active
                  ? "bg-black text-white shadow-md ring-1 ring-black"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 relative"
          >
            {/* Card Image */}
            <div className="relative overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {card.tag && (
                <span className="absolute top-3 left-3 bg-black text-white text-xs font-medium px-3 py-1 rounded-full shadow">
                  {card.tag}
                </span>
              )}
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{card.desc}</p>

              <button className="mt-6 flex items-center gap-2 text-sm text-blue-600 font-medium hover:underline">
                Learn more
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
