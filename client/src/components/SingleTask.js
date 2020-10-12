import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import taskService from "../services/taskService";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    flex: 1,
  },
}));

const SingleTask = (props) => {
  const { task } = props;

  useEffect(() => {});

  const classes = useStyles();

  return (
    <Grid item className={classes.container}>
      <h1>{task.id}</h1>
      <h1>{task.title}</h1>
      <h2>Requirements</h2>
      <p>{task.requirements}</p>
      <h2>Description</h2>
      <p>{task.body}</p>
    </Grid>
  );
};

export default SingleTask;
