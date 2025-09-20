import React from 'react';

// Sample task data
const tasks = [
  {
    taskName: 'Task',
    assignedTo: 'Ava Harper',
    date: '01 March, 2023',
    status: 'In Progress',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    taskName: 'Task',
    assignedTo: 'Gregg Martin',
    date: '11 April, 2023',
    status: 'To Do',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    taskName: 'Task',
    assignedTo: 'Olivia Quinn',
    date: '11 April, 2023',
    status: 'Done',
    avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
  },
  {
    taskName: 'Task',
    assignedTo: 'Margot Jaine',
    date: '11 May, 2023',
    status: 'To Do',
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
  {
    taskName: 'Task',
    assignedTo: 'Clara Mars',
    date: '05 June, 2023',
    status: 'To Do',
    avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
  },
];

const TaskTable = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
              <option>Projects</option>
              <option>Project 1</option>
              <option>Project 2</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Table */}
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">TASKS</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">ASSIGNED TO</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">DATE</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-3 text-sm text-gray-700">{task.taskName}</td>
                <td className="px-6 py-3 text-sm text-gray-700 flex items-center space-x-2">
                  <img
                    src={task.avatar}
                    alt={task.assignedTo}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{task.assignedTo}</span>
                </td>
                <td className="px-6 py-3 text-sm text-gray-700">{task.date}</td>
                <td className="px-6 py-3 text-sm">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      task.status === 'In Progress'
                        ? 'bg-orange-200 text-orange-800'
                        : task.status === 'Done'
                        ? 'bg-green-200 text-green-800'
                        : 'bg-blue-200 text-blue-800'
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-700">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              &lt; Previous
            </button>
            <span className="mx-4">1</span>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTable;
