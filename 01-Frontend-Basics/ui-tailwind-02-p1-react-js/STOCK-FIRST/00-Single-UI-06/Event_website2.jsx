import React from "react";

const EventServicePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 text-gray-900 font-sans">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        {/* Hero Section */}
        <header className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-6xl font-extrabold mb-5 tracking-tight leading-tight text-indigo-900 drop-shadow-md">
            Join Us at TechWave 2025
          </h1>
          <p className="text-xl md:text-2xl text-indigo-700 mb-10">
            The premier technology conference for innovators, creators, and disruptors.
          </p>
          <a
            href="#register"
            className="inline-block bg-indigo-700 text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-indigo-800 transition"
          >
            Register Now
          </a>
        </header>

        {/* About Section */}
        <section className="max-w-4xl mx-auto mb-24 bg-indigo-100 rounded-3xl p-12 shadow-lg">
          <h2 className="text-4xl font-bold mb-8 border-b-4 border-indigo-400 pb-3 text-indigo-900">
            About TechWave 2025
          </h2>
          <p className="text-lg leading-relaxed text-indigo-800">
            TechWave 2025 brings together the brightest minds in AI, blockchain, and web3 to explore the future of technology. Expect inspiring keynotes, hands-on workshops, and networking opportunities with industry leaders.
          </p>
        </section>

        {/* Services / Features */}
        <section className="max-w-5xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Keynote Speakers",
              desc: "Listen to top industry experts share insights and breakthroughs.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 text-indigo-500 mb-6"
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
                  className="h-14 w-14 text-indigo-500 mb-6"
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
                  className="h-14 w-14 text-indigo-500 mb-6"
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
              className="bg-white rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
            >
              {icon}
              <h3 className="text-2xl font-semibold mb-4 text-indigo-900">{title}</h3>
              <p className="text-indigo-700 text-base max-w-xs">{desc}</p>
            </div>
          ))}
        </section>

        {/* Schedule */}
        <section className="max-w-4xl mx-auto mb-24 bg-indigo-100 rounded-3xl p-12 shadow-lg">
          <h2 className="text-4xl font-bold mb-8 border-b-4 border-indigo-400 pb-3 text-indigo-900">
            Event Schedule
          </h2>
          <ul className="space-y-8 text-indigo-800 text-lg font-medium">
            {[
              { time: "09:00 AM", activity: "Opening Ceremony" },
              { time: "10:00 AM", activity: "Keynote by Jane Doe" },
              { time: "11:30 AM", activity: "Workshop: Building with React" },
              { time: "01:00 PM", activity: "Lunch & Networking" },
              { time: "02:30 PM", activity: "Panel Discussion: The Future of AI" },
              { time: "04:00 PM", activity: "Closing Remarks & Awards" },
            ].map(({ time, activity }, i) => (
              <li
                key={i}
                className="flex justify-between border-b border-indigo-300 pb-3 last:border-b-0"
              >
                <span className="font-mono">{time}</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact & Registration */}
        <section
          id="register"
          className="max-w-4xl mx-auto bg-indigo-700 rounded-3xl p-12 shadow-2xl text-white"
        >
          <h2 className="text-4xl font-bold mb-8 border-b-4 border-indigo-400 pb-3">
            Register Now
          </h2>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-lg font-semibold text-indigo-900"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-4 rounded-lg font-semibold text-indigo-900"
              required
            />
            <select
              className="p-4 rounded-lg font-semibold text-indigo-900 md:col-span-2"
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
              className="md:col-span-2 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-600 text-white font-bold py-4 rounded-full shadow-lg transition"
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
