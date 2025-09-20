import React from "react";
import { TaskCardProps } from "./types";

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  index,
  handleEdit,
  handleDelete,
  toggleComplete,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
      <div>
        <h3
          className={`text-lg font-semibold ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </h3>
        <p className={`text-gray-700 ${task.completed ? "line-through" : ""}`}>
          {task.description}
        </p>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => toggleComplete(index)}
          className={`flex-1 p-1 rounded text-white ${
            task.completed ? "bg-blue-400 hover:bg-blue-500" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {task.completed ? "Mark Incomplete" : "Complete"}
        </button>
        <button
          onClick={() => handleEdit(index)}
          className="flex-1 bg-yellow-400 text-white p-1 rounded hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(index)}
          className="flex-1 bg-red-500 text-white p-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
