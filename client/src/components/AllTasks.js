import { Paper, makeStyles, ButtonBase, Chip } from "@material-ui/core";
import React from "react";
import CategoriesContainer from "./CategoriesContainer";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "300px",
    overflowY: "scroll",
    bottom: "0",
  },
  listWrapper: {
    position: "absolute",
  },
  list: {
    listStyle: "none",
    marginLeft: "-40px",
  },
  paper: {
    width: 250,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: "#f5f5f5",
  },
  button: {
    display: "block",
  },
}));

const AllTasks = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>All tasks</h1>
      <div className={classes.listWrapper}>
        <ul className={classes.list}>
          {props.tasks.length > 0 ? (
            props.tasks.map((task, index) => (
              <li key={index.toString()}>
                <ButtonBase
                  key={task._id.toString()}
                  href={`/${task._id}`}
                  className={classes.button}
                >
                  <Paper className={classes.paper}>
                    <h2>{task.title}</h2>
                    {task.categories !== undefined && (
                      <>
                        <h2>Categories</h2>
                        <CategoriesContainer>
                          {task.categories.map((category) => (
                            <Chip
                              key={category.id}
                              label={category.name}
                              color="primary"
                            />
                          ))}
                        </CategoriesContainer>
                      </>
                    )}
                  </Paper>
                </ButtonBase>
              </li>
            ))
          ) : (
            <p>No tasks</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AllTasks;
