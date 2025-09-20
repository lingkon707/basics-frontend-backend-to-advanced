import React from 'react';

const TaskList = () => {
  const tasks = [
    {
      name: 'Code Review',
      dueDate: '4/27/2025',
      priority: 'HIGH',
      status: 'IN PROGRESS',
      assignedTo: 'Agile Avengers',
    },
    {
      name: 'User Journey Mapping',
      dueDate: '5/02/2025',
      priority: 'MEDIUM',
      status: 'NOT STARTED',
      assignedTo: 'UX Wizards',
    },
    {
      name: 'Prototype Testing',
      dueDate: '5/04/2025',
      priority: 'MEDIUM',
      status: 'NOT STARTED',
      assignedTo: 'Agile Avengers',
    },
    {
      name: 'Design New App Logo',
      dueDate: '4/30/2025',
      priority: 'HIGH',
      status: 'IN PROGRESS',
      assignedTo: 'UX Wizards',
    },
    {
      name: 'Backlog Grooming Session',
      dueDate: '5/10/2025',
      priority: 'LOW',
      status: 'NOT STARTED',
      assignedTo: 'Innovation Insiders',
    },
    {
      name: 'Business Analysts Meeting',
      dueDate: '5/12/2025',
      priority: 'MEDIUM',
      status: 'NOT STARTED',
      assignedTo: 'Innovation Insiders',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Task Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Due Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Priority</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-6 py-4 text-sm text-gray-700">{task.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{task.dueDate}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${task.priority === 'HIGH' ? 'bg-red-200 text-red-800' : task.priority === 'MEDIUM' ? 'bg-blue-200 text-blue-800' : 'bg-green-200 text-green-800'}`}>
                    {task.priority}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${task.status === 'IN PROGRESS' ? 'bg-orange-200 text-orange-800' : task.status === 'NOT STARTED' ? 'bg-gray-200 text-gray-800' : ''}`}>
                    {task.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{task.assignedTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
