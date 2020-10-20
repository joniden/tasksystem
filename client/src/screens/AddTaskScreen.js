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
import CreateCategories from "../components/CreateCategories";
import AttachedCategories from "../components/AttachedCategories";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  formItem: {
    marginBottom: 20,
  },
  addCategoryContainer: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "flex-start",
    flexFlow: "column",
  },
  textField: {
    flexGrow: 2,
    marginRight: "10px",
  },
}));

const AddTaskScreen = (props) => {
  const [task, setTaskValue] = useState({});
  const [taskAdded, setTaskAdded] = useState(false);
  const [attachedCategories, setAttachedCategories] = useState([]);

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

  const addCategoryToTask = (category) => {
    let newTask = task;

    let obj = { id: category._id, name: category.name };

    if (`categories` in task) {
      newTask.categories.push(obj);
    } else {
      newTask["categories"] = [obj];
    }
    setTaskValue(newTask);
  };

  const handleSelectCategory = (selectedCategory) => {
    if (!attachedCategories.some((category) => category === selectedCategory)) {
      addCategoryToTask(selectedCategory);
      setAttachedCategories((state) => [...state, selectedCategory]);
    }
  };

  const handleRemoveCategory = (categoryToDelete) => () => {
    let newCategories = attachedCategories.filter(
      (category) => category._id !== categoryToDelete._id
    );

    setAttachedCategories(newCategories);
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
              required
              onChange={handleOnChange}
              className={classes.formItem}
            />
            <TextField
              label="Description"
              name="body"
              onChange={handleOnChange}
              rows={4}
              multiline
              className={classes.formItem}
            />
            <TextField
              label="Requirements"
              name="requirements"
              onChange={handleOnChange}
              multiline
              rows={4}
              className={classes.formItem}
            />
            <AttachedCategories
              classes={classes}
              categories={attachedCategories}
              removeCategory={handleRemoveCategory}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.formItem}
            >
              Create task
            </Button>
          </form>
          <CreateCategories
            classes={classes}
            selectCategory={handleSelectCategory}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddTaskScreen;
