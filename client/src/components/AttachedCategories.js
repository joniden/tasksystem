import { Chip } from "@material-ui/core";
import React from "react";

const AttachedCategories = (props) => {
  const classes = props.classes;

  return (
    <div className={classes.categoriesContainer}>
      <>
        {props.categories.map((category) => (
          <div key={`${category._id}`}>
            <Chip
              label={category.name}
              onDelete={props.removeCategory(category)}
              color="primary"
            />
            <input
              type="hidden"
              name={`categories[${category.name}]`}
              value={category}
            />
          </div>
        ))}
      </>
    </div>
  );
};

export default AttachedCategories;
