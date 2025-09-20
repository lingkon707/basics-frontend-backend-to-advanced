const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    img: "https://t4.ftcdn.net/jpg/05/45/89/41/360_F_545894172_fLINXPGJs19SgFvA3P6vTvXN59iScZJ0.jpg",
  },
  {
    name: "Sara Khan",
    role: "Project Manager",
    img: "https://watermark.lovepik.com/photo/20211204/large/lovepik-president-office-boss-portrait-picture_501527654.jpg",
  },
  {
    name: "Mark Smith",
    role: "Lead Developer",
    img: "https://thumbs.dreamstime.com/b/business-man-boss-office-happy-37505013.jpg",
  },
];

const TeamGrid = () => {
  return (
    <section className="py-16 bg-gray-50 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-semibold text-center mb-12">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map(({ name, role, img }) => (
          <div
            key={name}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img
              src={img}
              alt={name}
              className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-blue-500"
            />
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-blue-600 font-semibold">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGrid;
