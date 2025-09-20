// components/TeamSection.jsx
import React from "react";

const teamMembers = [
  {
    name: "Alexandra Deff",
    avatar: "https://i.pravatar.cc/40?img=32",
    task: "Working on Github Project Repository",
    status: "Completed",
  },
  {
    name: "Edwin Adenike",
    avatar: "https://i.pravatar.cc/40?img=35",
    task: "Working on Integrate User Authentication System",
    status: "In Progress",
  },
  {
    name: "Isaac Oluwatemilorun",
    avatar: "https://i.pravatar.cc/40?img=12",
    task: "Working on Develop Search and Filter Functionality",
    status: "Pending",
  },
  {
    name: "David Oshodi",
    avatar: "https://i.pravatar.cc/40?img=29",
    task: "Working on Responsive Layout for Homepage",
    status: "In Progress",
  },
];

const statusColors = {
  Completed: "bg-green-100 text-green-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  Pending: "bg-red-100 text-red-700",
};

export default function TeamSection() {
  return (
    <section className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-xl text-gray-900">Team Collaboration</h2>
        <button className="text-green-700 font-semibold text-sm hover:underline">
          + Add Member
        </button>
      </div>

      <ul className="space-y-4">
        {teamMembers.map(({ name, avatar, task, status }) => (
          <li key={name} className="flex items-center space-x-4">
            <img
              src={avatar}
              alt={name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{name}</p>
              <p className="text-xs text-gray-500">
                Working on <span className="font-semibold">{task}</span>
              </p>
            </div>
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full select-none ${statusColors[status]}`}
            >
              {status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
