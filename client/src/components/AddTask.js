import React, { useState } from "react";
import { Button, TextField, FormGroup, Container } from "@material-ui/core";
import taskService from "../services/taskService";

const AddTask = (props) => {
  const handleOnChange = (event) => {
    const { name, value } = event.target;

    // Keep task but change just the name
    const t = { ...props.task, [name]: value };

    props.setTaskValue(t);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    taskService.addTask(props.task);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleOnSubmit}>
        <FormGroup>
          <TextField
            label="Task Title"
            name="title"
            onChange={handleOnChange}
          />

          <TextField
            label="Body"
            name="body"
            onChange={handleOnChange}
            multiline
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </FormGroup>
      </form>
    </Container>
  );
};

export default AddTask;
