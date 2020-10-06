import React, { useEffect, useState } from "react";
import taskService from "../services/taskService";

const AllTasksScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    let tasks = await taskService.getAll();

    tasks = tasks.filter((val) => val.title !== undefined);
    setTasks(tasks);
  };

  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.body}</p>
          </div>
        ))
      ) : (
        <p>No tasks</p>
      )}
    </>
  );
};

export default AllTasksScreen;
