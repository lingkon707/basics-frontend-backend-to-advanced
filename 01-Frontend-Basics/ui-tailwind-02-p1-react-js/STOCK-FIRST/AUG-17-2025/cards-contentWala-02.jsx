import React from "react";

const Card = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex items-center gap-6 max-w-4xl mx-auto">
    <div className="flex-shrink-0 w-16 h-16 flex justify-center items-center bg-orange-100 rounded-full">
      <img src={icon} alt={title} className="w-10 h-10" />
    </div>
    <div>
      <h3 className="font-bold text-xl text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2 leading-relaxed">{description}</p>
      <button className="text-orange-500 mt-4 font-semibold hover:underline">
        Learn more
      </button>
    </div>
  </div>
);

export default function App() {
  const cards = [
    {
      icon:
        "https://cdn-icons-png.flaticon.com/256/6994/6994770.png",
      title: "Create your profile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon:
        "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/link-66.png",
      title: "Add your friends",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Echo_link-blue_icon_slanted.svg/2048px-Echo_link-blue_icon_slanted.svg.png",
      title: "Share with friends",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-50 to-orange-100 flex flex-col justify-center gap-12 py-12 px-6">
      {cards.map(({ icon, title, description }) => (
        <Card
          key={title}
          icon={icon}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
}
