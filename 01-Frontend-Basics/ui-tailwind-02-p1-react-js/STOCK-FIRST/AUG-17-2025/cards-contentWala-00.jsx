import React from "react";

const Card = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-md p-5 flex items-center max-w-4xl mx-auto">
    <div className="flex-shrink-0 w-14 h-14 flex justify-center items-center bg-pink-50 rounded-md">
      <img src={icon} alt={title} className="w-8 h-8" />
    </div>
    <div className="ml-6 flex flex-col">
      <h3 className="font-semibold text-gray-900 text-base">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
      <button className="text-orange-500 text-sm mt-2 hover:underline self-start">
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
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-50 to-orange-100 py-12 px-6 space-y-6">
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
