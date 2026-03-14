import axiosInstance from "./axiosInstance";
export const fetchTasksApi = () => axiosInstance.get("/tasks");
