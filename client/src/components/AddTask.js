import React, { useState } from "react";
import { Button, TextField, Grid, Card, CardContent } from "@material-ui/core";
import taskService from "../services/taskService";

const AddTask = (props) => {
  const [task, setTaskValue] = useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    // Keep task but change just the name
    const t = { ...task, [name]: value };

    setTaskValue(t);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    let result = taskService.addTask(task);
    result.then((val) => props.addTask(val.task));
  };

  const flexContainer = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Grid item>
      <h1>Add task</h1>
      <Card>
        <CardContent>
          <form onSubmit={handleOnSubmit} style={flexContainer}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              spacing={2}
              alignItems="flex-start"
            >
              <Grid item>
                <TextField
                  label="Task Title"
                  name="title"
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Body"
                  name="body"
                  onChange={handleOnChange}
                  multiline
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AddTask;
