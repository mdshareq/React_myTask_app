import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import "../index.css"

export default function TaskList({ tasks }) {
  const handleClick = async (id) => {
    const ref = doc(db, "tasks", id);
    await deleteDoc(ref);
  };

  const crossLine = (e) => {
    const element = e.target;
    element.classList.toggle("crossed-line");
  };

  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li onClick={crossLine} key={task.id}>
            {" "}
            <button className="list-btn" onClick={() => handleClick(task.id)}>
              x
            </button>
            {task.task}
          </li>
        ))}
      </ul>
    </div>
  );
}
