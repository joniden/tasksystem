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
          Ticket System
        </Typography>

        <Button href="/add" color="inherit">
          Add Ticket
        </Button>
        <Button href="/" color="inherit">
          All tickets
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
