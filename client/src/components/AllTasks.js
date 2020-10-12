import { Box, Grid, Paper, makeStyles, ButtonBase } from "@material-ui/core";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  list: {
    height: "70vh",
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: "#f5f5f5",
  },
  button: {
    display: "block",
  },
}));

const AllTasks = (props) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.list}>
      <h1>All tasks</h1>
      {props.tasks.length > 0 ? (
        props.tasks.map((task, index) => (
          <ButtonBase
            key={task._id.toString()}
            href={`/${task._id}`}
            className={classes.button}
          >
            <Paper className={classes.paper}>
              <h2>{task.title}</h2>
              <p>{task.body}</p>
            </Paper>
          </ButtonBase>
        ))
      ) : (
        <p>No tasks</p>
      )}
    </Grid>
  );
};

export default AllTasks;
