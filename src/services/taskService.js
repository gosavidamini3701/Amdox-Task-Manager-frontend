import { fetchTasksApi } from "../api/taskApi";
export const getTasks = async () => (await fetchTasksApi()).data;
