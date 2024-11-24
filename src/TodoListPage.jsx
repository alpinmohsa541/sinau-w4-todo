import { useState } from "react";

function TodoListPage() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Menghandle perubahan input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Menambahkan tugas baru
  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  // Membuka modal dan menyimpan tugas yang akan dihapus
  const openDeleteModal = (id) => {
    setTaskToDelete(id);
    setIsModalOpen(true);
  };

  // Menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  // Menghapus tugas
  const handleDeleteTask = () => {
    const newTasks = tasks.filter((task) => task.id !== taskToDelete);
    setTasks(newTasks);
    closeModal(); // Tutup modal setelah menghapus tugas
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Judul */}
      <h1
        style={{
          position: "absolute",
          top: "20px",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        To Do List
      </h1>

      <div
        style={{
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {/* Input dan tombol tambah */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new task"
          style={{
            padding: "8px",
            marginRight: "10px",
            width: "250px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
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
          Add 
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
                  onChange={() => handleToggle(task.id)}
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
                onClick={() => openDeleteModal(task.id)}
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

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "400px",
              textAlign: "center",
            }}
          >
            <p style={{ marginBottom: "20px" }}>
              Are you sure you want to delete this task?
            </p>
            <div>
              <button
                onClick={handleDeleteTask}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#f44336",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                Yes
              </button>
              <button
                onClick={closeModal}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#ccc",
                  color: "black",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoListPage;
