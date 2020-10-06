import React from "react";
import AddTaskScreen from "./screens/AddTaskScreen";
import AllTasksScreen from "./screens/AllTasksScreen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddTaskScreen />
      <AllTasksScreen />
    </div>
  );
}

export default App;
