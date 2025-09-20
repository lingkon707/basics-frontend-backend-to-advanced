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

export default function JobPortalPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");

  // Filter jobs based on search inputs
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-indigo-900 text-white flex justify-between items-center px-6 py-4 shadow">
        <h1 className="text-2xl font-bold">Job Portal</h1>
        <nav className="space-x-4">
          <button className="hover:underline">Login</button>
          <button className="bg-white text-indigo-900 px-4 py-1 rounded hover:bg-gray-200">
            Register
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white text-center py-20 px-6">
        <h2 className="text-5xl font-extrabold mb-4">Find Your Dream Job</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Search thousands of jobs, create profiles, and connect with top
          employers.
        </p>
        <button className="bg-white text-indigo-900 font-semibold px-8 py-3 rounded shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Job Search Filters */}
      <section className="bg-gray-100 p-6 md:p-10">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Search Jobs
        </h3>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4"
        >
          <input
            type="text"
            placeholder="Job title or keyword"
            className="flex-grow p-3 rounded border border-gray-300 focus:outline-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="p-3 rounded border border-gray-300 focus:outline-indigo-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            className="p-3 rounded border border-gray-300 focus:outline-indigo-500"
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
            className="bg-indigo-700 text-white px-6 rounded hover:bg-indigo-800 transition"
          >
            Search
          </button>
        </form>
      </section>

      {/* Job Listings */}
      <section className="p-6 md:p-10 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 text-center">Job Listings</h3>
        {filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500">No jobs found.</p>
        ) : (
          <ul className="space-y-6">
            {filteredJobs.map((job) => (
              <li
                key={job.id}
                className="border rounded p-5 hover:shadow-lg transition bg-white"
              >
                <h4 className="text-xl font-bold mb-1">{job.title}</h4>
                <p className="text-indigo-700 font-semibold">
                  {job.company} &mdash; {job.location}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="italic">{job.type}</span> |{" "}
                  <span>{job.salary}</span>
                </p>
                <p className="text-gray-600 mb-3">{job.description}</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                  Apply Now
                </button>
                <button className="ml-3 border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50 transition">
                  Save Job
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Job Seeker Profile Summary */}
      <section className="bg-indigo-50 p-6 md:p-10 max-w-4xl mx-auto rounded my-10">
        <h3 className="text-3xl font-semibold mb-4 text-center">Job Seeker Profile</h3>
        <div className="space-y-3 max-w-xl mx-auto text-center">
          <p><strong>Name:</strong> Jane Doe</p>
          <p><strong>Skills:</strong> React, JavaScript, Tailwind CSS</p>
          <p><strong>Experience:</strong> 3 Years</p>
          <p><strong>Resume:</strong> <a href="#" className="text-indigo-600 underline">Download</a></p>
          <button className="mt-4 bg-indigo-700 text-white px-6 py-2 rounded hover:bg-indigo-800 transition">
            Edit Profile
          </button>
        </div>
      </section>

      {/* Employer Dashboard Summary */}
      <section className="bg-white p-6 md:p-10 max-w-4xl mx-auto rounded shadow my-10">
        <h3 className="text-3xl font-semibold mb-4 text-center">Employer Dashboard</h3>
        <div className="space-y-3 max-w-xl mx-auto text-center">
          <p><strong>Company:</strong> Acme Inc.</p>
          <p><strong>Jobs Posted:</strong> 5</p>
          <p><strong>Applications Received:</strong> 32</p>
          <button className="mt-4 bg-indigo-700 text-white px-6 py-2 rounded hover:bg-indigo-800 transition">
            Post a New Job
          </button>
        </div>
      </section>

      {/* Application Form (snippet) */}
      <section className="bg-indigo-100 p-6 md:p-10 max-w-3xl mx-auto rounded my-10">
        <h3 className="text-3xl font-semibold mb-6 text-center">Job Application</h3>
        <form className="space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded border border-gray-300 focus:outline-indigo-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded border border-gray-300 focus:outline-indigo-500"
          />
          <input
            type="file"
            className="w-full p-1 rounded border border-gray-300 focus:outline-indigo-500"
          />
          <textarea
            placeholder="Cover Letter"
            rows={4}
            className="w-full p-3 rounded border border-gray-300 focus:outline-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-700 text-white px-6 py-3 rounded hover:bg-indigo-800 transition w-full"
          >
            Submit Application
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-indigo-200 text-center py-6 mt-auto">
        &copy; 2025 Job Portal. All rights reserved.
      </footer>
    </div>
  );
}
