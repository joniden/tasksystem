import axios from "axios";

export default {
  getAll: async () => {
    let res = await axios.get("/api/task");
    return res.data || [];
  },
  addTask: async (task) => {
    let res = await axios.post("/api/task", task);
    return res.data;
  },
  getTask: async (id) => {
    let res = await axios.get(`/api/task/${id}`);
    return res;
  },
  deleteTask: async (id) => {
    let res = await axios.delete(`/api/task/${id}`);
    return res.data;
  },
};
