import { Button, Chip, TextField } from "@material-ui/core";
import React, { useState } from "react";

const AddCategories = () => {
  const [newCategoryText, setNewCategoryText] = useState("");
  const [categories, setCategories] = useState([]);

  const handleTextOnChange = (e) => {
    setNewCategoryText(e.target.value);
  };

  const handleAddCategory = () => {
    if (!categories.includes(newCategoryText)) {
      setCategories((state) => {
        return [...state, newCategoryText];
      });
    }
  };

  return (
    <>
      <TextField
        label="Add category"
        name="title"
        onChange={handleTextOnChange}
      />
      {newCategoryText.length > 0 && (
        <Button variant="contained" color="primary" onClick={handleAddCategory}>
          Add
        </Button>
      )}
      {categories.map((category, index) => (
        <Chip key={index.toString()} label={category} />
      ))}
    </>
  );
};

export default AddCategories;
