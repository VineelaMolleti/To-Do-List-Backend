import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { getTasks, createTask, updateTask, deleteTask } from "./services/api";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isCardView, setIsCardView] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.log("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      const response = await createTask(task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const editTask = async (updatedTask) => {
    try {
      const response = await updateTask(updatedTask._id, updatedTask);
      setTasks(tasks.map((task) => (task._id === response.data._id ? response.data : task)));
      setCurrentTask(null);
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const toggleCompletion = async (id) => {
    try {
      const task = tasks.find((t) => t._id === id);
      const updatedTask = { ...task, completed: !task.completed };
      const response = await updateTask(id, updatedTask);
      setTasks(tasks.map((t) => (t._id === id ? response.data : t)));
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Header toggleView={() => setIsCardView(!isCardView)} isCardView={isCardView} />
      <TaskForm addTask={addTask} currentTask={currentTask} editTask={editTask} />
      <TaskList tasks={tasks} isCardView={isCardView} onEdit={setCurrentTask} onDelete={removeTask} toggleCompletion={toggleCompletion} />
    </div>
  );
};

export default App;
