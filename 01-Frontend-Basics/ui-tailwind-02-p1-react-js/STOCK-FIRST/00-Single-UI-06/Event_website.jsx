import React from "react";

const EventServicePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-600 text-white font-sans">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        {/* Hero Section */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Join Us at TechWave 2025
          </h1>
          <p className="text-lg md:text-xl text-indigo-200 mb-8">
            The premier technology conference for innovators, creators, and disruptors.
          </p>
          <a
            href="#register"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-50 transition"
          >
            Register Now
          </a>
        </header>

        {/* About Section */}
        <section className="max-w-4xl mx-auto mb-20 bg-indigo-800 bg-opacity-70 rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 border-b border-indigo-400 pb-2">
            About TechWave 2025
          </h2>
          <p className="text-indigo-200 leading-relaxed text-lg">
            TechWave 2025 brings together the brightest minds in AI, blockchain, 
            and web3 to explore the future of technology. Expect inspiring keynotes, 
            hands-on workshops, and networking opportunities with industry leaders.
          </p>
        </section>

        {/* Services / Features */}
        <section className="max-w-5xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Keynote Speakers",
              desc: "Listen to top industry experts share insights and breakthroughs.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-indigo-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"
                  />
                </svg>
              ),
            },
            {
              title: "Workshops",
              desc: "Participate in hands-on sessions to build your skills and projects.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-indigo-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              ),
            },
            {
              title: "Networking",
              desc: "Connect with professionals and enthusiasts from all over the world.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-indigo-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 8h10M7 12h4m1 4h5"
                  />
                </svg>
              ),
            },
          ].map(({ title, desc, icon }, i) => (
            <div
              key={i}
              className="bg-indigo-900 bg-opacity-80 rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:scale-105 transform transition"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-indigo-300">{desc}</p>
            </div>
          ))}
        </section>

        {/* Schedule */}
        <section className="max-w-4xl mx-auto mb-20 bg-indigo-800 bg-opacity-70 rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 border-b border-indigo-400 pb-2">
            Event Schedule
          </h2>
          <ul className="space-y-6 text-indigo-200 text-lg">
            {[
              { time: "09:00 AM", activity: "Opening Ceremony" },
              { time: "10:00 AM", activity: "Keynote by Jane Doe" },
              { time: "11:30 AM", activity: "Workshop: Building with React" },
              { time: "01:00 PM", activity: "Lunch & Networking" },
              { time: "02:30 PM", activity: "Panel Discussion: The Future of AI" },
              { time: "04:00 PM", activity: "Closing Remarks & Awards" },
            ].map(({ time, activity }, i) => (
              <li key={i} className="flex justify-between border-b border-indigo-600 pb-2">
                <span className="font-mono">{time}</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact & Registration */}
        <section
          id="register"
          className="max-w-4xl mx-auto bg-indigo-900 bg-opacity-90 rounded-2xl p-10 shadow-xl text-white"
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-indigo-400 pb-2">
            Register Now
          </h2>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-md text-indigo-900 font-semibold"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-md text-indigo-900 font-semibold"
              required
            />
            <select
              className="p-3 rounded-md text-indigo-900 font-semibold md:col-span-2"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select Ticket Type
              </option>
              <option value="general">General Admission</option>
              <option value="vip">VIP Admission</option>
              <option value="student">Student Pass</option>
            </select>
            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-600 text-white font-bold py-3 rounded-full shadow-lg transition"
            >
              Submit Registration
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EventServicePage;
