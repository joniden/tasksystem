import React, { useState } from "react";
import {
  Button,
  TextField,
  Card,
  CardContent,
  makeStyles,
  Container,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import taskService from "../services/taskService";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  formItem: {
    marginBottom: 20,
  },
}));

const AddTaskScreen = (props) => {
  const [task, setTaskValue] = useState({});
  const [taskAdded, setTaskAdded] = useState(false);

  const classes = useStyles();

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    // Keep task but change just the name
    const t = { ...task, [name]: value };

    setTaskValue(t);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    let result = taskService.addTask(task);
    result.then((val) => {
      setTaskAdded(true);
      // Hide it again after 3 seconds
      setTimeout(() => setTaskAdded(false), 3000);
    });
  };

  return (
    <Container maxWidth="sm">
      <h1>Add task</h1>
      <Card>
        <CardContent>
          <form onSubmit={handleOnSubmit} className={classes.form}>
            {taskAdded && (
              <Alert variant="filled" severity="success">
                Task added
              </Alert>
            )}
            <TextField
              label="Task Title"
              name="title"
              onChange={handleOnChange}
              className={classes.formItem}
            />
            <TextField
              label="Body"
              name="body"
              onChange={handleOnChange}
              multiline
              className={classes.formItem}
            />
            <TextField
              label="Requirements"
              name="body"
              onChange={handleOnChange}
              multiline
              className={classes.formItem}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.formItem}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddTaskScreen;
