
import React, { useState, useEffect } from 'react';
import './TodoList.css';

const TodoList = () => {
  // task => input field ko store karega
  // tasks => array of tasks
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

// fetches the tasks stored in localStorage, 
// parses them from JSON format
// sets them as the initial state for tasks(jo ki array of tasks hai)

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);
// tasks ka state variable change hoga tab
  // localstorage ko update karega with new value of tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
// adds karta hai task using spread operator
  const handleAddTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="delete-btn" onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
