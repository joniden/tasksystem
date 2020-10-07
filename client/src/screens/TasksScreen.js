import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import taskService from "../services/taskService";
import AddTask from "../components/AddTask";
import AllTasks from "../components/AllTasks";

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    let tasks = await taskService.getAll();
    tasks = tasks.filter((val) => val.title !== undefined).reverse();
    setTasks(tasks);
  };

  const addTask = (task) => {
    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  const containerStyle = {
    marginTop: "5px",
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      spacing={10}
      alignItems="flex-start"
      style={containerStyle}
    >
      <AddTask addTask={addTask} />
      <AllTasks tasks={tasks} />
    </Grid>
  );
};

export default TasksScreen;
