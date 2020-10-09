import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
}));

const SingleTask = (props) => {
  const { task } = props;

  const classes = useStyles();

  return (
    <Grid item className={classes.container}>
      <h1>{task.title}</h1>
      <h2>Requirements</h2>
      <p>{task.requirements}</p>
      <h2>Description</h2>
      <p>{task.body}</p>
    </Grid>
  );
};

export default SingleTask;
