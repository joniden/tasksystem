import React from "react";
import "./App.css";
import { Box } from "@material-ui/core";
import Header from "./components/Header";
import AddTaskScreen from "./screens/AddTaskScreen";
import TasksScreen from "./screens/TasksScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Box>
      <Header />
      <Router>
        <Switch>
          <Route path="/add">
            <AddTaskScreen />
          </Route>
          <Route path="/">
            <TasksScreen />
          </Route>
        </Switch>
      </Router>
    </Box>
  );
};

export default App;
