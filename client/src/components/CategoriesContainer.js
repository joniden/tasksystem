import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  categoriesContainer: {
    display: "flex",
    alignContent: "space-evenly",
    flexWrap: "wrap",
    marginTop: "10px",
    marginBottom: "10px",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const CategoriesContainer = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.categoriesContainer}>{children}</div>;
};

export default CategoriesContainer;
