import { Button, Chip, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import taskService from "../services/taskService";

const CreateCategories = (props) => {
  const [newCategoryText, setNewCategoryText] = useState("");
  const [categories, setCategories] = useState([{}]);
  const classes = props.classes;

  const handleTextOnChange = (e) => {
    setNewCategoryText(e.target.value);
  };

  useEffect(() => {
    taskService
      .getAllCategories()
      .then((categories) => setCategories(categories));
  }, []);

  const handleCreateCategory = () => {
    if (!categories.some((category) => category.name === newCategoryText)) {
      const object = { name: newCategoryText };

      taskService.addCategory(object).then((error, category) => {
        setCategories((state) => [...state, category]);
      });
    }
  };

  const handleSelectCategory = (chip) => () => {
    props.selectCategory(chip);
  };

  return (
    <>
      <div className={classes.categoriesContainer}>
        {categories.map((category) => (
          <Chip
            key={`${category._id}`}
            onClick={handleSelectCategory(category)}
            label={category.name}
          />
        ))}
      </div>
      <div className={classes.addCategoryContainer}>
        <h2>Add Categories</h2>
        <TextField
          className={classes.textField}
          label="Add category"
          onChange={handleTextOnChange}
        />
        {newCategoryText.length > 0 && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateCategory}
          >
            Add
          </Button>
        )}
      </div>
    </>
  );
};

export default CreateCategories;
