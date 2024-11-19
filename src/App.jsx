import React, { useState } from "react";
function TodoListPage() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue(""); // Clear input setelah menambahkan
    }
  };

  return (
    <>
    
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }} >
      <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new task"
          style={{ padding: "8px", marginRight: "10px", width: "250px" }}
        />
        <button onClick={handleAddTask}>Tambah</button>
        <ul style={{ marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default TodoListPage
