import React, { useEffect, useState } from "react";
import { Button, TextField, FormGroup, Container } from "@material-ui/core";
import taskService from "../services/taskService";
import AddTask from "../components/AddTask";
import AllTasks from "../components/AllTasks";

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTaskValue] = useState({});

  useEffect(() => {});

  return (
    <>
      <AddTask setTaskValue={setTaskValue} />
      <AllTasks tasks={tasks} setTasks={setTasks} />{" "}
    </>
  );
};

export default TasksScreen;
