import React, { useEffect, useState } from "react";
import { getAll } from "../services/taskService";

const AllTasksScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAll().then((val) => setTasks(val));
  }, []);

  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => <li>{task}</li>)
      ) : (
        <p>No tasks</p>
      )}
    </>
  );
};

export default AllTasksScreen;
