import React, { useState } from "react";
import { Button, TextField, FormGroup, Container } from "@material-ui/core";

const AddTaskScreen = () => {
  const [task, setTaskValue] = useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    // Keep task but change just the name
    const t = { ...task, [name]: value };

    setTaskValue(t);
  };

  const handleOnSubmit = (event) => {
    console.log(event);
  };

  return (
    <Container maxWidth="sm">
      <form>
        <FormGroup>
          <TextField
            label="Task Title"
            name="title"
            value={task.title}
            onChange={handleOnChange}
          />

          <TextField
            label="Body"
            name="body"
            onChange={handleOnChange}
            value={task.body}
            multiline
          />
          <Button variant="contained" color="primary" onSubmit={handleOnSubmit}>
            Submit
          </Button>
        </FormGroup>
      </form>
    </Container>
  );
};

export default AddTaskScreen;
