import axios from "axios";

export default {
  getAllTasks: async () => {
    let res = await axios.get("/api/task");
    return res.data || [];
  },
  addTask: async (task) => {
    let res = await axios.post("/api/task", task);
    return res;
  },
  getTask: async (id) => {
    let res = await axios.get(`/api/task/${id}`);
    return res;
  },
  deleteTask: async (id) => {
    let res = await axios.delete(`/api/task/${id}`);
    return res.data;
  },
  getAllCategories: async () => {
    let res = await axios.get("/api/category");
    return res.data || [];
  },
  addCategory: async (task) => {
    let res = await axios.post("/api/category", task);
    return res.data;
  },
  deleteCategory: async (id) => {
    let res = await axios.delete(`/api/category/${id}`);
    return res.data;
  },
};
