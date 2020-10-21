import { Paper, makeStyles, ButtonBase, Chip } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CategoriesContainer from "./CategoriesContainer";
import Filter from "./Filter";

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

  const [filters, setFilters] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (filters.length > 0) {
      // Check tasks that contains categories
      const tasks = props.tasks.filter((task) => {
        return filters.some((filter) => {
          return task.categories.some(
            (category) => filter.name === category.name
          );
        });
      });

      setTasks(tasks);
    } else {
      setTasks(props.tasks);
    }
  }, [filters, props.tasks]);

  return (
    <div className={classes.container}>
      <h1>All tasks</h1>
      <Filter setFilters={setFilters} />
      <div className={classes.listWrapper}>
        <ul className={classes.list}>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <li key={index.toString()}>
                <ButtonBase
                  key={task._id.toString()}
                  href={`/${task._id}`}
                  className={classes.button}
                >
                  <Paper className={classes.paper}>
                    <h2>{task.title}</h2>
                    {task.categories.length > 0 && (
                      <CategoriesContainer>
                        {task.categories.map((category) => (
                          <Chip
                            key={category.id}
                            label={category.name}
                            color="primary"
                          />
                        ))}
                      </CategoriesContainer>
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
