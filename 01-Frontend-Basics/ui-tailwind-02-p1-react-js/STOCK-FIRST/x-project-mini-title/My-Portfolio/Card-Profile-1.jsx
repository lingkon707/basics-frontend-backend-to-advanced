import React from "react";

const tailwindColors = {
  primary: "bg-red-600",
  secondary: "bg-white",
  accent: "text-red-600",
  textPrimary: "text-white",
  textSecondary: "text-gray-900",
};

const InfoBadge = ({ text }) => (
  <span className="inline-block px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-md">
    {text}
  </span>
);

const SkillBadge = ({ icon, title }) => (
  <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg p-2 shadow-sm hover:shadow-md transition cursor-default text-xs">
    <div className="text-xl text-red-600">{icon}</div>
    <p className="font-semibold text-red-700">{title}</p>
  </div>
);

const DeveloperProfile = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-[#088F8F] bg-center px-4 py-12"
      // style={{
      //   backgroundImage:
      //     "url('https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg')",
      // }}
    >
      <div className="max-w-4xl w-full bg-[#0047AB] rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://learn.g2.com/hubfs/app-developer.jpg"
            alt="Frontend Developer"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center space-y-5 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-extrabold leading-tight max-w-[280px]">
              Frontend Developer <br /> Lingkon Islam
            </h2>
            <InfoBadge text="Available for Hire" />
          </div>

          <p className="text-sm font-semibold max-w-xl">
            Passionate about building responsive, modern web applications using React, Next.js, and Tailwind CSS. Experienced in crafting clean UI/UX and optimizing performance for seamless user experiences.
          </p>

          <div className="grid grid-cols-2 gap-3 max-w-xl">
            <SkillBadge icon="⚛️" title="React.js" />
            <SkillBadge icon="⚡" title="Next.js" />
            <SkillBadge icon="🎨" title="Tailwind CSS" />
            <SkillBadge icon="🖥️" title="JavaScript" />
          </div>

          <button className="mt-4 px-6 py-2 bg-white text-red-700 rounded-full font-bold text-sm shadow-md hover:scale-105 transition-transform">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
