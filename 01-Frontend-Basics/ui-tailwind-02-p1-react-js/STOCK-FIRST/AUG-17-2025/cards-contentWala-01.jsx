import React from "react";

const Card = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4">
    <div className="w-12 h-12 flex justify-center items-center">
      <img src={icon} alt={title} className="w-8 h-8" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
      <button className="text-orange-500 text-sm mt-2 hover:underline">
        Learn more
      </button>
    </div>
  </div>
);

export default function App() {
  const cards = [
    {
      icon:
        "https://cdn-icons-png.flaticon.com/256/6994/6994770.png", // example icon from your links
      title: "Create your profile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    },
    {
      icon:
        "https://icons.veryicon.com/png/o/miscellaneous/simple-icon/link-66.png",
      title: "Add your friends",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    },
    {
      icon:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Echo_link-blue_icon_slanted.svg/2048px-Echo_link-blue_icon_slanted.svg.png",
      title: "Share with friends",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-pink-100 to-orange-100 min-h-screen flex flex-col justify-center items-center space-y-6 p-4">
      <div className="max-w-md w-full space-y-6">
        {cards.map(({ icon, title, description }) => (
          <Card
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
