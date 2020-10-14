import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Task System
        </Typography>

        <Button href="/add" color="inherit">
          Add Task
        </Button>
        <Button href="/" color="inherit">
          All Tasks
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
