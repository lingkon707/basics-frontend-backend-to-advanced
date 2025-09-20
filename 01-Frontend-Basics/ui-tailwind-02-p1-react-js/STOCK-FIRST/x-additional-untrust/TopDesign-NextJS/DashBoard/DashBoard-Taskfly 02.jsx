import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task Management Redesign", priority: "High", tags: ["UI", "Design"], status: "To-do", assigned: ["MD", "AI"] },
    { id: 2, title: "API Integration Project", priority: "Medium", tags: ["Backend", "API"], status: "In Progress", assigned: ["AI"] },
    { id: 3, title: "Mobile App Testing", priority: "Low", tags: ["App", "Testing"], status: "Completed", assigned: ["MD", "AI"] },
  ]);

  return (
    <div className="bg-gray-50 min-h-screen flex">
      <Head>
        <title>Taskfly - Project Dashboard</title>
        <meta name="description" content="Task Management Dashboard with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6 border-r border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-semibold">
            TF
          </div>
          <div className="text-xl font-semibold">Taskfly</div>
        </div>

        <nav className="mt-8 space-y-6">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-teal-300">
            <span className="text-xl">🏠</span>
            <span>Dashboard</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-teal-300">
            <span className="text-xl">📅</span>
            <span>Calendar</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-teal-300">
            <span className="text-xl">📁</span>
            <span>Projects</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-teal-300">
            <span className="text-xl">👥</span>
            <span>Teams</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-teal-300">
            <span className="text-xl">📈</span>
            <span>Integrations</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-teal-300">
            <span className="text-xl">📜</span>
            <span>Documents</span>
          </div>
        </nav>

        {/* User Profile */}
        <div className="mt-auto">
          <div className="text-gray-300 text-sm">
            <div className="font-semibold">Sophia Williams</div>
            <div>sophia@taskfly.com</div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-3xl font-semibold text-gray-900">Dice Projects</div>
          <div className="flex items-center space-x-6">
            <button className="text-teal-600 hover:underline">New Task</button>
            <input type="text" placeholder="Search..." className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500" />
            <button className="text-teal-600 hover:underline">Invite</button>
          </div>
        </div>

        {/* Task Cards (Kanban) */}
        <div className="flex space-x-12">
          {/* To-do */}
          <div className="w-1/3">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">To-do</h3>
            <div className="space-y-4">
              {tasks.filter(task => task.status === "To-do").map(task => (
                <div key={task.id} className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-800">{task.title}</h4>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">{task.priority}</span> | {task.tags.join(", ")}
                  </div>
                  <div className="mt-4 flex space-x-4">
                    {task.assigned.map((person, index) => (
                      <div key={index} className="w-8 h-8 rounded-full bg-teal-300 text-white flex items-center justify-center text-sm">{person[0]}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* In Progress */}
          <div className="w-1/3">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">In Progress</h3>
            <div className="space-y-4">
              {tasks.filter(task => task.status === "In Progress").map(task => (
                <div key={task.id} className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-800">{task.title}</h4>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">{task.priority}</span> | {task.tags.join(", ")}
                  </div>
                  <div className="mt-4 flex space-x-4">
                    {task.assigned.map((person, index) => (
                      <div key={index} className="w-8 h-8 rounded-full bg-teal-300 text-white flex items-center justify-center text-sm">{person[0]}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completed */}
          <div className="w-1/3">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Completed</h3>
            <div className="space-y-4">
              {tasks.filter(task => task.status === "Completed").map(task => (
                <div key={task.id} className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-800">{task.title}</h4>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">{task.priority}</span> | {task.tags.join(", ")}
                  </div>
                  <div className="mt-4 flex space-x-4">
                    {task.assigned.map((person, index) => (
                      <div key={index} className="w-8 h-8 rounded-full bg-teal-300 text-white flex items-center justify-center text-sm">{person[0]}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h4>
            <ul className="space-y-4 text-gray-600">
              <li>Task "Mobile App Testing" marked as completed</li>
              <li>New task "UI Design Draft" created</li>
              <li>Task "Webflow Integration" moved to In Progress</li>
            </ul>
          </div>

          {/* Notifications */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Notifications</h4>
            <ul className="space-y-4 text-gray-600">
              <li>You have 3 unread notifications</li>
              <li>Team meeting scheduled at 2:00 PM</li>
              <li>Your task "API Integration" was commented on</li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h4>
            <ul className="space-y-4 text-gray-600">
              <li>
                <button className="text-teal-600 hover:underline">Create New Task</button>
              </li>
              <li>
                <button className="text-teal-600 hover:underline">Assign Task to Team</button>
              </li>
              <li>
                <button className="text-teal-600 hover:underline">View All Projects</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
