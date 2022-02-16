import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function TaskForm() {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let ref = collection(db, "tasks");

    await addDoc(ref, {
      task: newTask,
    });

    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a Task:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
      </label>
      <button className="new-task-btn">Add</button>
    </form>
  );
}
