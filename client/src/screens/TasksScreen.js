import React, { useEffect, useState } from "react";
import taskService from "../services/taskService";
import AddTask from "../components/AddTask";
import AllTasks from "../components/AllTasks";
import SingleTask from "../components/SingleTask";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = () => makeStyles({
  container: {
    display: "flex",
    flexFlow: "row"
  }
})

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [task, selectTask] = useState({});

  let match = useRouteMatch();

  const getTasks = async () => {
    let tasks = await taskService.getAll();
    tasks = tasks.filter((val) => val.title !== undefined).reverse();
    setTasks(tasks);
  };

  const handleSelectTask = (task) => {
    selectTask(task);
  };

  useEffect(() => {
    getTasks();
    console.log(match.path)
  }, []);

  const containerStyle = {
    marginTop: "5px",
  };

  return (
    <div 
      <AllTasks handleSelectTask={handleSelectTask} tasks={tasks} />
      <Switch>
        <Route path={`${match.path}:id`}>
          <SingleTask />
        </Route>
        <Route path={match.path}>
          <h3>Please select a ticket.</h3>
        </Route>
      </Switch>
  );
};

export default TasksScreen;
