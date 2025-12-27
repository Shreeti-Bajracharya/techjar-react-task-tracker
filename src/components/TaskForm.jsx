import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !dueDate) return;

    onAdd({
      id: Date.now(),
      title,
      dueDate,
      status: "Pending",
    });

    setTitle("");
    setDueDate("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col sm:flex-row gap-2 mb-4"
    >
      <input
        className="flex-1 border rounded px-3 py-2"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        className="border rounded px-3 py-2"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700">
        Add
      </button>
    </form>
  );
}
