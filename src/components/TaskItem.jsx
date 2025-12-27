import { useState } from "react";

export default function TaskItem({ task, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const toggleStatus = () => {
    onUpdate({
      ...task,
      status: task.status === "Pending" ? "Done" : "Pending",
    });
  };

  const saveEdit = () => {
    onUpdate({ ...task, title });
    setEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-gray-50 p-3 rounded">
      <div className="flex-1">
        {editing ? (
          <input
            className="border rounded px-2 py-1 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <p
            className={
              task.status === "Done" ? "line-through text-gray-400" : ""
            }
          >
            {task.title}
          </p>
        )}
        <small className="text-gray-500">{task.dueDate}</small>
      </div>

      <div className="flex gap-2 ml-4">
        <button
          onClick={toggleStatus}
          className="text-sm px-2 py-1 border rounded"
        >
          {task.status}
        </button>

        {editing ? (
          <button onClick={saveEdit} className="text-sm text-green-600">
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="text-sm text-blue-600"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => onDelete(task.id)}
          className="text-sm text-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
