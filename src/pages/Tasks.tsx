import { useState } from 'react';

interface Task {
  text: string;
  completed: boolean;
}

const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState<string>('');

  const addTask = () => {
    if (input) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTask = (index: number) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Add a new task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Task
        </button>
      </div>
      <ul className="list-disc pl-5">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
              className="mr-2"
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
              className="flex-grow"
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
