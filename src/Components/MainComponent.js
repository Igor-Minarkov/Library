import React, { useContext } from "react";
import { uploudingContext } from "../Context/TaskListContext";
import ReactCardFlip from "react-card-flip";
import Header from "./Header";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Search from "./Search";
import PaginationComponent from "./Pagination";
import DropdownFilters from "./DropdownFilters";

function MainComponent(props) {
  const { Flip, isFlipped } = useContext(uploudingContext);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div>
        <div className="app-wrapper">
          <div className="main">
            <Header />
            <TaskForm />
            <button className="flip-btn" onClick={Flip}>
              Looking for your books?
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="app-wrapper">
          <div className="main">
            <DropdownFilters />
            <Header />
            <Search />
            <TaskList />
            <button className="flip-btn flip-btn-backPage" onClick={Flip}>
              Add more, common...
            </button>
            <PaginationComponent />
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default MainComponent;
