// Task type
export interface Task {
  title: string;
  description: string;
  completed: boolean;
}

// Props for TaskForm component
export interface TaskFormProps {
  title: string;
  description: string;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  editingIndex: number | null;
}

// Props for TaskCard component
export interface TaskCardProps {
  task: Task;
  index: number;
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
  toggleComplete: (index: number) => void;
}
