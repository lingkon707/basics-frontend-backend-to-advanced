import React, { useState } from "react";

const sampleJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    type: "Full-time",
    salary: "$70k - $90k",
    description:
      "Build amazing user interfaces with React and Tailwind. Experience 3+ years.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataWorks",
    location: "New York, NY",
    type: "Part-time",
    salary: "$60k - $80k",
    description:
      "Design and implement APIs. Knowledge of Node.js and databases required.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "San Francisco, CA",
    type: "Contract",
    salary: "$50/hr",
    description:
      "Design intuitive user experiences. Proficient in Figma and Adobe XD.",
  },
];

const IconBriefcase = () => (
  <svg
    className="w-5 h-5 inline-block mr-2 text-indigo-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12v.01M16 12v.01M8 12v.01M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 12V7a4 4 0 0 1 8 0v5"
    ></path>
  </svg>
);

const IconUser = () => (
  <svg
    className="w-5 h-5 inline-block mr-2 text-indigo-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.121 17.804A9 9 0 1 1 18.88 6.196M12 12v.01"
    ></path>
  </svg>
);

export default function JobPortalPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = sampleJobs.filter((job) => {
    const matchesTitle = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation = location
      ? job.location.toLowerCase().includes(location.toLowerCase())
      : true;
    const matchesType = jobType ? job.type === jobType : true;
    return matchesTitle && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white shadow-md flex justify-between items-center px-8 py-4">
        <h1 className="text-3xl font-bold text-indigo-700 tracking-wide cursor-pointer">
          JobPortal
        </h1>
        <nav className="space-x-6 text-indigo-700 font-semibold text-lg">
          <button className="hover:text-indigo-900 transition">Login</button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg shadow-md transition">
            Register
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white text-center py-24 px-6 md:px-12">
        <h2 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Find Your Dream Job
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 drop-shadow-md">
          Thousands of opportunities from top companies waiting for you.
          Create your profile, apply easily, and get hired faster.
        </p>
        <button className="bg-white text-indigo-900 font-semibold px-10 py-4 rounded-xl shadow-xl hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
      </section>

      {/* Job Search Filters */}
      <section className="bg-white p-8 md:p-12 max-w-6xl mx-auto rounded-lg shadow-lg -mt-20 mb-12">
        <h3 className="text-3xl font-semibold mb-8 text-center text-indigo-700">
          Search Jobs
        </h3>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row gap-5 max-w-5xl mx-auto"
        >
          <input
            type="text"
            placeholder="Job title or keyword"
            className="flex-grow p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 rounded-lg shadow-md font-semibold transition"
          >
            Search
          </button>
        </form>
      </section>

      {/* Job Listings */}
      <section className="max-w-6xl mx-auto px-6 md:px-0 mb-20">
        <h3 className="text-4xl font-bold mb-10 text-indigo-800 text-center">
          Job Listings
        </h3>
        {filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Sorry, no jobs found matching your criteria.
          </p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <li
                key={job.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition cursor-pointer"
                tabIndex={0}
              >
                <h4 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {job.title}
                </h4>
                <p className="text-indigo-600 font-medium mb-1">
                  {job.company} — {job.location}
                </p>
                <p className="text-sm text-gray-500 mb-3 italic">
                  {job.type} | {job.salary}
                </p>
                <p className="text-gray-700 mb-6">{job.description}</p>
                <div className="flex space-x-4">
                  <button className="flex items-center bg-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-700 transition font-semibold">
                    <IconBriefcase />
                    Apply Now
                  </button>
                  <button className="flex items-center border border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-100 transition font-semibold">
                    Save Job
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Job Seeker Profile Summary */}
      <section className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg p-10 mb-20">
        <h3 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center justify-center">
          <IconUser /> Job Seeker Profile
        </h3>
        <div className="max-w-xl mx-auto text-center space-y-4 text-gray-700 text-lg">
          <p>
            <strong>Name:</strong> Jane Doe
          </p>
          <p>
            <strong>Skills:</strong> React, JavaScript, Tailwind CSS
          </p>
          <p>
            <strong>Experience:</strong> 3 Years
          </p>
          <p>
            <strong>Resume:</strong>{" "}
            <a
              href="#"
              className="text-indigo-600 underline hover:text-indigo-800 transition"
            >
              Download
            </a>
          </p>
          <button className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Edit Profile
          </button>
        </div>
      </section>

      {/* Employer Dashboard Summary */}
      <section className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg p-10 mb-20">
        <h3 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center justify-center">
          <IconBriefcase /> Employer Dashboard
        </h3>
        <div className="max-w-xl mx-auto text-center space-y-4 text-gray-700 text-lg">
          <p>
            <strong>Company:</strong> Acme Inc.
          </p>
          <p>
            <strong>Jobs Posted:</strong> 5
          </p>
          <p>
            <strong>Applications Received:</strong> 32
          </p>
          <button className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Post a New Job
          </button>
        </div>
      </section>
    </div>
  );
}
