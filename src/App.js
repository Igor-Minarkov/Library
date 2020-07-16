import React from "react";
import "./App.css";
import { TaskListContextProvider } from "./Context/TaskListContext";
import MainComponent from "./Components/MainComponent";

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <MainComponent />
      </div>
    </TaskListContextProvider>
  );
}

export default App;
