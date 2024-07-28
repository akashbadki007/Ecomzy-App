import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Todo() {
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState('');

    function TodoAddHandler() {
        if(newTask.trim() !== '') {
            setTasks([...tasks,newTask]);
            setNewTask('')
        }
    }
  return (
    <div>
        <h1> Todo App </h1>
        <input 
         type="text"
         value={newTask}
         onChange={(e) => setNewTask(e.target.value)}
         placeholder='Enter Todo'
        />
        <button onClick={TodoAddHandler}> Add Todo </button>
    </div>
  )
}

export default Todo