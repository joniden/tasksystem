import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import taskService from "../services/taskService";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    overflowY: "scroll",
    marginLeft: "20px",
  },
}));

const SingleTask = () => {
  const [task, setTask] = useState({});
  let { id } = useParams();

  useEffect(() => {
    taskService.getTask(id).then((t) => setTask(t));
  }, [id]);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>{task.id}</h1>
      <h1>{task.title}</h1>
      <h2>Requirements</h2>
      <p>{task.requirements}</p>
      <h2>Description</h2>
      <p>{task.body}</p>
    </div>
  );
};

export default SingleTask;
