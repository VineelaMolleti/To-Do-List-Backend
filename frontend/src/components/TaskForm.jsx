/*import React, {useState,useEffect} from 'react';

export default function TaskForm({ addTask, currentTask, editTask}){
    const [task,setTask] = useState({
        title:'',
        description:'',
        priority:'medium',
        deadline:'',
    });

    useEffect(()=>{
        if(currentTask){
            setTask(currentTask);
        }
    },[currentTask]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(currentTask){
            editTask(task);
        }
        else{
            addTask(task);
        }
        setTask({title:'',description:'',priority:'medium',deadline:''});
    };

    return(
        <form onSubmit={handleSubmit} className="p-4 bg-gray-200 rounded">
            <input 
              type="text"
              placeholder='Task Title'
              value={task.title}
              onChange={(e)=> setTask({...task,title:e.target.value})}
              className="p-2 mb-2 w-full"
              />
              <textarea 
                 placeholder='Task Description'
                 value={task.description}
                 onChange={(e)=>{
                    setTask({...task,
                        description:e.target.value
                    })
                 }}
                 className="p-2 mb-2 w-full"
              />

              <select value={task.priority}
              onChange={(e)=>{
                setTask({...task,priority:e.target.value})
              }}
              className="p-2 mb-2 w-full"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            
           {/* <input type="date" 
                value={task.deadline}
                onChange={(e)=>{
                    setTask({...task,deadline:e.target.value})
                }}
                className="p-2 mb-2 w-full"/> */

/*<input
  type="date"
  min={new Date().toISOString().split('T')[0]} // Restricts past dates
  value={task.deadline}
  onChange={(e) => setDeadline(e.target.value)}
  className="border rounded p-2"
/>


            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                {currentTask ? 'Edit Task' : 'Add Task'}
                </button> 
        </form>
    );
};*/

import React, { useState, useEffect } from 'react';

export default function TaskForm({ addTask, currentTask, editTask }) {
    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: 'medium',
        deadline: '',
    });

    useEffect(() => {
        if (currentTask) {
            setTask(currentTask);
        }
    }, [currentTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentTask) {
            editTask(task);
        } else {
            addTask(task);
        }
        setTask({ title: '', description: '', priority: 'medium', deadline: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-200 rounded">
            <label className="block mb-2 text-gray-700">Enter the task:</label>
            <input
                type="text"
                placeholder="Task Title"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                className="p-2 mb-2 w-full"
            />
            <label className="block mb-2 text-gray-700">Enter the task description:</label>
            <textarea
                placeholder="Task Description"
                value={task.description}
                onChange={(e) =>
                    setTask({
                        ...task,
                        description: e.target.value,
                    })
                }
                className="p-2 mb-2 w-full"
            />
            <label className="block mb-2 text-gray-700">Select your Priority of the task</label>
            <select
                value={task.priority}
                onChange={(e) => {
                    setTask({ ...task, priority: e.target.value });
                }}
                className="p-2 mb-2 w-full"
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <label className="block mb-2 text-gray-700">Enter the deadline for the task:</label>
            <input
                type="date"
                min={new Date().toISOString().split('T')[0]} // Restricts past dates
                value={task.deadline}
                onChange={(e) => setTask({ ...task, deadline: e.target.value })}
                className="p-2 mb-2 w-full border rounded"
            />

            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                {currentTask ? 'Edit Task' : 'Add Task'}
            </button>
        </form>
    );
}
