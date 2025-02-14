import React from "react";

export default function TaskCard({ task, onEdit, onDelete, toggleCompletion }) {
  if (!task) return null;

  return (
    <div className="bg-white p-4 rounded-md shadow-md border">
      <h3 className="font-semibold text-lg text-gray-900">TASK: {task.title}</h3>
      <p className=" text-sm text-gray-700">Description: {task.description}</p>
      <span className="text-sm text-gray-700">Priority: {task.priority}</span>
      <span className="block text-gray-700 text-sm mt-2">Due: {new Date(task.deadline).toLocaleDateString()}</span>
      <p className={`text-sm ${task.completed ? "text-green-500" : "text-red-500"}`}>{task.completed ? "Completed" : "Pending"}</p>
      
       <div className="flex justify-between mt-3">
       <button
                  className={`px-2 py-1 rounded ${task.completed ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}
                  onClick={() => toggleCompletion(task._id)}
                >
                  {task.completed ? "Mark as Pending" : "Mark as Completed"}
                </button>

        <button
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => onDelete(task._id)}
        >
          Delete
        </button>
    </div>
    </div>
  );
}
