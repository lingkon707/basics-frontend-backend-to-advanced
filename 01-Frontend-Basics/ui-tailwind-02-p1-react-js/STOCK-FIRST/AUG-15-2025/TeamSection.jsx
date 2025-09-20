import React from "react";

const teamMembers = [
  {
    name: "Rosalina D. William",
    role: "Founder",
    image: "https://img.freepik.com/free-photo/expressive-bearded-man-wearing-shirt_273609-5894.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Hilixer D. Browni",
    role: "CEO",
    image: "https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Yokoloko Y. Pakura",
    role: "Founder",
    image: "https://images.pexels.com/photos/13299469/pexels-photo-13299469.jpeg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Miranda D. Kilixer",
    role: "Cleaner",
    image: "https://img.freepik.com/free-photo/expressive-bearded-man-wearing-shirt_273609-5894.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const TeamSection = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{member.role}</p>
            <div className="flex space-x-4">
              <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook rounded-full bg-blue-500 p-2 text-white"></i>
              </a>
              <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter rounded-full bg-blue-400 p-2 text-white"></i>
              </a>
              <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram rounded-full bg-pink-500 p-2 text-white"></i>
              </a>
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin rounded-full bg-blue-700 p-2 text-white"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
