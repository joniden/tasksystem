import { Box, Grid, Paper, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  list: {
    height: "70vh",
    overflow: "scroll",
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: "#f5f5f5",
  },
}));

const AllTasks = (props) => {
  const classes = useStyles();

  return (
    <Grid item>
      <h1>All tasks</h1>
      <Box className={classes.list}>
        {props.tasks.length > 0 ? (
          props.tasks.map((task, index) => (
            <Paper key={index.toString()} className={classes.paper}>
              <h2>{task.title}</h2>
              <p>{task.body}</p>
            </Paper>
          ))
        ) : (
          <p>No tasks</p>
        )}
      </Box>
    </Grid>
  );
};

export default AllTasks;
