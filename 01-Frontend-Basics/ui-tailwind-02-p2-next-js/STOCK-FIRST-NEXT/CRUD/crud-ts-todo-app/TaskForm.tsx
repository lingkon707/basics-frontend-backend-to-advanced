import React from "react";
import { TaskFormProps } from "./types";

const TaskForm: React.FC<TaskFormProps> = ({
  title,
  description,
  setTitle,
  setDescription,
  handleSubmit,
  editingIndex,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded shadow mb-8"
    >
      <h2 className="text-xl font-semibold mb-4">
        {editingIndex !== null ? "Edit Task" : "Add New Task"}
      </h2>

      <input
        type="text"
        placeholder="Task Title"
        className="w-full border p-2 mb-3 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        className="w-full border p-2 mb-3 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        {editingIndex !== null ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
