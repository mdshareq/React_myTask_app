import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

import { useCollection } from "../hooks/useCollection";

export default function Home() {
  const { documents: tasks } = useCollection("tasks");

  return (
    <div>
      {tasks && <TaskList tasks={tasks} />}
      <TaskForm />
    </div>
  );
}
