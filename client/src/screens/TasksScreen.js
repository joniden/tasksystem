import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import taskService from "../services/taskService";
import AddTask from "../components/AddTask";
import AllTasks from "../components/AllTasks";
import SingleTask from "../components/SingleTask";
import { useRouteMatch, Switch, Route } from "react-router-dom";

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
  }, []);

  const containerStyle = {
    marginTop: "5px",
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      justify="center"
      style={containerStyle}
    >
      <AllTasks handleSelectTask={handleSelectTask} tasks={tasks} />
      <Switch>
        <Route path={`${match.path}/:id`}>
          <SingleTask />
        </Route>
        <Route path={match.path}>
          <h3>Please select a ticket.</h3>
        </Route>
      </Switch>
    </Grid>
  );
};

export default TasksScreen;
