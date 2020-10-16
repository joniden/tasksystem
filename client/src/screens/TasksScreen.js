import React, { useEffect, useState } from "react";
import taskService from "../services/taskService";
import AllTasks from "../components/AllTasks";
import SingleTask from "../components/SingleTask";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: "20px",
    position: "relative",
    height: "100%",
  },
  single: {
    height: "calc(100vh - 105px)",
  },
}));

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [taskDeleted, setTaskDeleted] = useState(false);
  const classes = useStyles();

  let match = useRouteMatch();

  const getTasks = async () => {
    let tasks = await taskService.getAllTasks();
    tasks = tasks.filter((val) => val.title !== undefined).reverse();
    setTasks(tasks);
  };

  const onDelete = () => {
    getTasks();
    setTaskDeleted(true);
    setTimeout(() => setTaskDeleted(false), 3000);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className={classes.container}>
      <AllTasks tasks={tasks} />
      <div className={classes.single}>
        <Switch>
          <Route path={`${match.path}:id`}>
            <SingleTask onDelete={onDelete} />
          </Route>
          <Route path={match.path}>
            <h3>Please select a ticket.</h3>
            {taskDeleted && (
              <Alert variant="filled" severity="success">
                Task added
              </Alert>
            )}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default TasksScreen;
