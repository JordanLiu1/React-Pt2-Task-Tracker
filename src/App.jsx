import { useState } from 'react'
import './App.css'


function App() {
  // Step 1: Creating our inital state for recording tasks
  const [taskList, setTaskList] = useState(["Learn React", "Do homework", "Arrive to school on time"]);

  const [taskInput, setTaskInput] = useState("")

  const handleAddTask = () => {
    if(taskInput.trim()) {
      setTaskList([...taskList, taskInput]);
      setTaskInput("");
    }
  }

  const handleDeleteTask = (indexToDelete) => {
    const updatedTasks = taskList.filter((task, index) => {
      return index !== indexToDelete;
    })
    setTaskList(updatedTasks)
    if(taskList=="")
      setTaskList("No more tasks")
  }

  return (
    <>
      <h1>Task Tracker</h1>

     {/* Step 1: Render tasks from tasks */}
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}

            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={taskInput}
        onChange= {(e) => setTaskInput(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </>
  )
}

export default App
