import React from "react";

const skills = ["React.js", "Next.js", "Tailwind CSS", "JavaScript"];

const DeveloperCard = ({ name, role, img, bio, skillList }) => {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer flex flex-col overflow-hidden">
      <div className="flex items-center p-5 gap-4">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={img}
          alt={name}
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600 mt-1">{role}</p>
        </div>
      </div>

      <div className="px-5 pb-4 flex-1 flex flex-col">
        <p className="text-gray-700 text-sm mb-4">{bio}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {skillList.map((skill) => (
            <span
              key={skill}
              className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <button className="mt-auto bg-red-600 text-white py-2 rounded-md font-semibold text-sm hover:bg-red-700 transition-shadow shadow-md">
          Contact Me
        </button>
      </div>
    </div>
  );
};

const DeveloperGrid = () => {
  const developers = [
    {
      name: "Lingkon Islam",
      role: "Frontend Developer",
      img: "https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg",
      bio: "Building clean, performant, and responsive web apps with React & Next.js.",
      skillList: skills,
    },
    {
      name: "Jane Doe",
      role: "React Developer",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Specializes in React and UI design with Tailwind CSS.",
      skillList: ["React.js", "Tailwind CSS", "JavaScript"],
    },
    {
      name: "John Smith",
      role: "Fullstack Developer",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      bio: "Experienced in Next.js and backend APIs.",
      skillList: ["Next.js", "Node.js", "React.js"],
    },
    {
      name: "Sara Lee",
      role: "UI/UX Designer",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Focused on user-centered design and frontend implementation.",
      skillList: ["Figma", "Tailwind CSS", "React.js"],
    },
    {
      name: "Mike Brown",
      role: "JavaScript Developer",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
      bio: "Loves writing clean, efficient JavaScript code.",
      skillList: ["JavaScript", "React.js", "Vue.js"],
    },
    {
      name: "Emma Wilson",
      role: "Frontend Engineer",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "Passionate about building scalable frontend apps.",
      skillList: ["React.js", "Redux", "Tailwind CSS"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Meet the Developers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center max-w-7xl mx-auto">
        {developers.map((dev) => (
          <DeveloperCard key={dev.name} {...dev} />
        ))}
      </div>
    </div>
  );
};

export default DeveloperGrid;
