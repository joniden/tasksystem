import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import taskService from "../services/taskService";
import { Redirect, useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    overflowY: "scroll",
    marginLeft: "20px",
  },
}));

const SingleTask = (props) => {
  const [task, setTask] = useState({});
  const [error, setError] = useState(false);
  const classes = useStyles();
  let { id } = useParams();

  useEffect(() => {
    taskService
      .getTask(id)
      .then((t) => {
        setTask(t.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, [id]);

  const onDelete = () => {
    taskService.deleteTask(id).then((res) => {
      props.onDelete();
      setError(true);
    });
  };

  return (
    <div className={classes.container}>
      {error ? (
        <Redirect to="/" />
      ) : (
        <>
          <h1>{task.id}</h1>
          <h1>{task.title}</h1>
          <h2>Requirements</h2>
          <p>{task.requirements}</p>
          <h2>Description</h2>
          <p>{task.body}</p>

          <Button variant="contained" color="secondary" onClick={onDelete}>
            Delete
          </Button>
        </>
      )}
    </div>
  );
};

export default SingleTask;
