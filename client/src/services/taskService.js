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
    let res = await axios.get("/api/task/:id", id);
    return res.data;
  },
};
