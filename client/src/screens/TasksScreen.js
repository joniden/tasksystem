import React, { useEffect, useState } from "react";
import { Button, TextField, FormGroup, Container } from "@material-ui/core";
import taskService from "../services/taskService";
import AddTask from "../components/AddTask";
import AllTasks from "../components/AllTasks";

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    let tasks = await taskService.getAll();
    tasks = tasks.filter((val) => val.title !== undefined);
    setTasks(tasks);
  };

  const addTask = (task) => {
    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <AddTask addTask={addTask} />
      <AllTasks tasks={tasks} />{" "}
    </>
  );
};

export default TasksScreen;
