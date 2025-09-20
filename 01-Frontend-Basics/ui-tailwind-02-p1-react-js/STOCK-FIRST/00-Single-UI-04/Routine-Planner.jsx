import React, { useState } from "react";

export default function RoutineApp() {
  const initialRoutine = {
    Monday: [
      { id: 1, task: "Wake up early", done: false },
      { id: 2, task: "Exercise for 30 min", done: false },
      { id: 3, task: "Read a book", done: false },
    ],
    Tuesday: [
      { id: 4, task: "Check emails", done: false },
      { id: 5, task: "Team meeting", done: false },
    ],
    Wednesday: [
      { id: 6, task: "Write code", done: false },
      { id: 7, task: "Lunch with friends", done: false },
    ],
    // Add more days if needed
  };

  const [routine, setRoutine] = useState(initialRoutine);
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [newTask, setNewTask] = useState("");

  const toggleDone = (day, taskId) => {
    setRoutine((prev) => {
      const newDayTasks = prev[day].map((t) =>
        t.id === taskId ? { ...t, done: !t.done } : t
      );
      return { ...prev, [day]: newDayTasks };
    });
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    setRoutine((prev) => {
      const newId = Math.max(
        ...Object.values(prev).flat().map((t) => t.id),
        0
      ) + 1;
      const updatedTasks = [...prev[selectedDay], { id: newId, task: newTask, done: false }];
      return { ...prev, [selectedDay]: updatedTasks };
    });
    setNewTask("");
  };

  const completedCount = routine[selectedDay].filter((t) => t.done).length;
  const totalCount = routine[selectedDay].length;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-6">
        <h1 className="text-2xl font-extrabold text-blue-900 mb-6 text-center tracking-wide">
          Daily Routine Planner
        </h1>

        <select
          className="w-full p-3 text-sm rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-6"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {Object.keys(routine).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <ul className="mb-4 space-y-3 max-h-64 overflow-y-auto">
          {routine[selectedDay].map(({ id, task, done }) => (
            <li
              key={id}
              className="flex items-center justify-between bg-blue-50 p-3 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <label className="flex items-center cursor-pointer select-none w-full">
                <input
                  type="checkbox"
                  checked={done}
                  onChange={() => toggleDone(selectedDay, id)}
                  className="mr-3 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className={`text-blue-900 font-medium ${done ? "line-through text-opacity-60" : ""}`}>
                  {task}
                </span>
              </label>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Add new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow p-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
          />
          <button
            onClick={addTask}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Add
          </button>
        </div>

        <div className="text-center text-blue-800 font-semibold">
          Completed {completedCount} / {totalCount} tasks
        </div>
      </div>
    </div>
  );
}
