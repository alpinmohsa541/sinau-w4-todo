import { useState } from "react";

function TodoListPage() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  // Menghandle perubahan input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Menambahkan tugas baru
  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: inputValue, completed: false }, // Tambahkan objek tugas
      ]);
      setInputValue(""); // Hapus input setelah menambahkan
    }
  };

  // Menghapus tugas
  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  // Menghandle toggle selesai/tidak selesai
  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Input dan tombol tambah */}
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

      {/* Daftar tugas */}
      <ul style={{ marginTop: "20px", listStyleType: "none", padding: "0" }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              padding: "10px",
              marginBottom: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#f9f9f9",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)} // Toggle selesai/tidak selesai
                style={{ marginRight: "10px" }}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "#aaa" : "#333",
                }}
              >
                {task.text}
              </span>
            </div>
            <button
              onClick={() => handleDeleteTask(task.id)}
              style={{
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                padding: "4px 8px",
              }}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListPage;
