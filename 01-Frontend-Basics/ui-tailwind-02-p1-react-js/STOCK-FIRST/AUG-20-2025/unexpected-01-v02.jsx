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

export default function FragmentedUI() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-yellow-100 via-red-200 to-pink-300 font-exo">
      {/* Vertical Sidebar Tabs */}
      <nav className="w-24 bg-white/90 backdrop-blur-lg flex flex-col items-center py-12 gap-14 border-r border-gray-300 relative z-20">
        {tabs.map((tab, idx) => (
          <div
            key={tab.label}
            className={`transform -rotate-90 origin-left cursor-pointer select-none
              text-xl font-black uppercase tracking-wide transition-colors duration-300
              ${tab.active ? "text-red-700" : "text-gray-400 hover:text-red-400"}`}
            style={{ marginTop: idx === 0 ? 0 : 40 }}
          >
            {tab.label}
          </div>
        ))}
      </nav>

      {/* Cards Collage */}
      <main className="relative flex-1 p-10 grid place-items-center overflow-visible">
        <div className="relative w-full max-w-7xl h-[600px]">
          {cards.map((card, i) => {
            // Random-ish rotations & positions for collage feel
            const rotations = [15, -10, 20];
            const positions = [
              { top: 30, left: "15%" },
              { top: 180, left: "45%" },
              { top: 90, left: "70%" },
            ];
            const colors = ["#FF6F61", "#6B5B95", "#88B04B"];
            const pos = positions[i];
            const rotate = rotations[i];
            const color = colors[i];
            return (
              <div
                key={card.title}
                className="absolute rounded-xl shadow-2xl overflow-hidden cursor-pointer perspective-800"
                style={{
                  top: pos.top,
                  left: pos.left,
                  width: 300,
                  height: 380,
                  transform: `rotate(${rotate}deg)`,
                  zIndex: i + 10,
                }}
              >
                {/* Flip card */}
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-xl bg-white shadow-lg overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 10%, 90% 100%, 10% 90%)", // torn paper shape
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <h3
                        className="text-2xl font-extrabold"
                        style={{ color }}
                      >
                        {card.title}
                      </h3>
                      <p className="mt-2 text-gray-700 text-sm font-semibold">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-xl bg-gradient-to-tr from-pink-500 to-yellow-400 flex flex-col items-center justify-center px-6 text-white"
                    style={{
                      clipPath:
                        "polygon(10% 0, 100% 10%, 90% 100%, 0 90%)", // flipped torn paper shape
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3 className="text-3xl font-black mb-4">More info</h3>
                    <p className="text-center mb-8 font-semibold tracking-wide">
                      This feature will blow your mind! Tap explore and start
                      creating.
                    </p>
                    <button className="bg-white text-pink-600 font-black px-6 py-3 rounded-full hover:scale-110 transform transition">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Background grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            zIndex: 0,
          }}
        />
      </main>
    </div>
  );
}
