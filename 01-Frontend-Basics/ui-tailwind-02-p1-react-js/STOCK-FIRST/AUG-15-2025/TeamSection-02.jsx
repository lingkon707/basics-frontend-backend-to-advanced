import React from "react";

// Updated team member data
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
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl p-6 flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-300 mb-6 transition-all hover:scale-110"
            />
            <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-md text-gray-500 mb-4">{member.role}</p>
            <div className="flex space-x-6 mt-4">
              {Object.keys(member.socialLinks).map((social, idx) => (
                <a
                  key={idx}
                  href={member.socialLinks[social]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-all hover:scale-110"
                >
                  <i className={`fab fa-${social} text-lg`} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
