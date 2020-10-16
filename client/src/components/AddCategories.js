import { Button, Chip, makeStyles, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import taskService from "../services/taskService";

const useStyles = makeStyles(() => ({
  addCategoryContainer: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  textField: {
    flexGrow: 2,
    marginRight: "10px",
  },
  categoriesContainer: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: "10px",
  },
  category: {
    marginRight: "10px",
  },
}));

const AddCategories = () => {
  const [newCategoryText, setNewCategoryText] = useState("");
  const [categories, setCategories] = useState([{}]);
  const classes = useStyles();

  const handleTextOnChange = (e) => {
    setNewCategoryText(e.target.value);
  };

  useEffect(() => {
    taskService
      .getAllCategories()
      .then((categories) => setCategories(categories));
  }, []);

  const handleAddCategory = () => {
    if (!categories.includes(newCategoryText)) {
      setCategories((state) => {
        const object = { name: newCategoryText };
        taskService.addCategory(object);
        return [...state, object];
      });
    }
  };

  return (
    <>
      <div className={classes.addCategoryContainer}>
        <TextField
          className={classes.textField}
          label="Add category"
          onChange={handleTextOnChange}
        />
        {newCategoryText.length > 0 && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddCategory}
          >
            Add
          </Button>
        )}
      </div>
      <div className={classes.categoriesContainer}>
        {categories.map((category, index) => (
          <Chip
            className={classes.category}
            key={index.toString()}
            label={category.name}
          />
        ))}
      </div>
    </>
  );
};

export default AddCategories;
