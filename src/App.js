import React from "react";
import AddTask from "./components/add-tasks-form/add-tasks-form.component";
import TasksList from "./components/tasks-list/tasks-list.component";
import "./App.scss";

function App() {
  return (
    <div className="border-wrapper">
      <div className="content">
        <h1 className="heading">Today's plan</h1>
        <AddTask />
        <TasksList />
      </div>
    </div>
  );
}

export default App;
