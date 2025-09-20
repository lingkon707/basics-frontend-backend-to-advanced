import {
  ChatBubbleLeftIcon,
  PhotoIcon,
  VideoCameraIcon,
  SpeakerWaveIcon,
  CursorArrowRaysIcon,
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

export default function UnexpectedUI() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-900 via-pink-700 to-red-700 text-white p-10 overflow-x-hidden">
      {/* Tabs as floating bubbles */}
      <div className="flex gap-8 mb-20 justify-center relative z-10">
        {tabs.map((tab, i) => (
          <div
            key={tab.label}
            className={`relative cursor-pointer select-none 
              rounded-full px-6 py-3 shadow-lg 
              bg-white bg-opacity-20 backdrop-blur-md 
              flex items-center gap-3 font-extrabold tracking-wide text-sm
              transition-transform duration-400
              hover:scale-110 hover:bg-opacity-40
              ${tab.active ? "bg-opacity-70 scale-125 shadow-xl" : ""}
              `}
            style={{ transformOrigin: i === 0 ? "left" : i === tabs.length - 1 ? "right" : "center" }}
          >
            <tab.icon className="h-5 w-5 text-white" />
            {tab.label}
          </div>
        ))}
      </div>

      {/* Asymmetric card stack */}
      <div className="relative max-w-7xl mx-auto h-[520px]">
        {cards.map((card, idx) => {
          // Position cards with overlap & rotation for unexpected feel
          const positions = [
            { top: 0, left: "15%", rotate: "-6deg", scale: 0.9, z: 10 },
            { top: "60px", left: "45%", rotate: "3deg", scale: 1.1, z: 20 },
            { top: "120px", left: "75%", rotate: "-4deg", scale: 1, z: 15 },
          ];
          const pos = positions[idx];
          return (
            <div
              key={idx}
              className="absolute rounded-3xl shadow-2xl cursor-pointer overflow-hidden
              bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600
              transition-transform duration-500 hover:scale-110 hover:rotate-0"
              style={{
                top: pos.top,
                left: pos.left,
                transform: `rotate(${pos.rotate}) scale(${pos.scale})`,
                zIndex: pos.z,
                width: 320,
                height: 440,
              }}
            >
              <div className="relative h-full flex flex-col">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 object-cover brightness-90 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <h2 className="text-3xl font-extrabold tracking-wide drop-shadow-lg mb-2">
                    {card.title}
                  </h2>
                  <p className="text-lg font-light tracking-wide drop-shadow-sm mb-6">
                    {card.desc}
                  </p>
                  <button
                    className="self-start bg-white text-indigo-700 font-bold px-5 py-2 rounded-full shadow-lg
                      hover:bg-indigo-100 hover:shadow-xl transition"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fun floating shapes */}
      <svg
        className="absolute top-20 left-10 opacity-40 animate-pulse"
        width="150"
        height="150"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="50" fill="white" />
      </svg>
      <svg
        className="absolute bottom-20 right-10 opacity-30 animate-bounce"
        width="120"
        height="120"
        viewBox="0 0 100 100"
        fill="none"
      >
        <rect width="100" height="100" fill="white" rx="20" />
      </svg>
    </div>
  );
}
