import { useTasks } from "../hooks/useTasks";
import TaskCard from "../components/task/TaskCard";
const Kanban = () => {
  const { tasks } = useTasks();
  return <div>{tasks.map(t => <TaskCard key={t.id} title={t.title} />)}</div>;
};
export default Kanban;
