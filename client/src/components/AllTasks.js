import React, { useEffect } from "react";
import taskService from "../services/taskService";

const AllTasks = (props) => {
  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    let tasks = await taskService.getAll();

    tasks = tasks.filter((val) => val.title !== undefined);
    props.setTasks(tasks);
  };

  return (
    <>
      {props.tasks.length > 0 ? (
        props.tasks.map((task) => (
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

export default AllTasks;
