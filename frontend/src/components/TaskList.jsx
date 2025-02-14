import React, { useState } from "react";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, isCardView, onDelete, onEdit, toggleCompletion }) {
  const [filters, setFilters] = useState({ priority: "", completed: "" });
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTasks = tasks.filter((task) => {
    const priorityMatch = !filters.priority || task.priority === filters.priority;
    const statusMatch =
      filters.completed === "completed"
        ? task.completed
        : filters.completed === "pending"
        ? !task.completed
        : true;
    const searchMatch =
      searchQuery === "" ||
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());

    return priorityMatch && statusMatch && searchMatch;
  });

  return (
    <div className="m-4 text-white p-4">
      <input type="text" placeholder="Search Tasks..." className="p-2 mb-4 border rounded text-black" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

      <div className="flex justify-between mb-4">
        <select value={filters.priority} onChange={(e) => setFilters({ ...filters, priority: e.target.value })} className="p-2 mb-4 border rounded text-black">
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <select value={filters.completed} onChange={(e) => setFilters({ ...filters, completed: e.target.value })} className="p-2 border rounded text-black">
          <option value="">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div className={isCardView ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "flex flex-col gap-2"}>
        {filteredTasks.map((task) =>
          isCardView ? (
            <TaskCard key={task._id} task={task} onEdit={onEdit} onDelete={onDelete} toggleCompletion={toggleCompletion} />
          ) : (
            <div key={task._id} className="p-4 bg-gray-100 border rounded text-black">
              <h3 className="font-bold">TASK: {task.title}</h3>
              <p className="text-sm text-gray-700">Description: {task.description}</p>
              <p className="text-sm text-gray-700">Priority: {task.priority}</p>
              <p className="text-sm text-gray-700">Due: {new Date(task.deadline).toLocaleDateString()}</p>
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
          )
        )}
      </div>
    </div>
  );
}
