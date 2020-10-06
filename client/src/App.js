import React from "react";
import "./App.css";
import { Box } from "@material-ui/core";
import Header from "./components/Header";
import TasksScreen from "./screens/TasksScreen";

function App() {
  return (
    <Box>
      <Header />
      <TasksScreen />
    </Box>
  );
}

export default App;
