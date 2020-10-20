import { Chip } from "@material-ui/core";
import React from "react";
import CategoriesContainer from "./CategoriesContainer";

const AttachedCategories = (props) => {
  return (
    <CategoriesContainer>
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
    </CategoriesContainer>
  );
};

export default AttachedCategories;
