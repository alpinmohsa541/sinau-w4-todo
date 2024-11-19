import { useState } from "react";
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

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks); // Menghapus tugas berdasarkan index
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
        <button
        onClick={handleAddTask}
        style={{
          padding: "8px 16px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Tambah
      </button>
        <ul style={{ marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li key={index}>{task}<button onClick={() => handleDeleteTask(index)}>Hapus</button></li>
        ))}
        
      </ul>
    </div>
    </>
  )
}

export default TodoListPage
