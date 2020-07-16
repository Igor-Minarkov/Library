import React, { useContext } from "react";
import { uploudingContext } from "../Context/TaskListContext";
import Task from "./Task";

function TaskList(props) {
  const {
    currentPosts,
    currentPostsOfFilters,
    search,
    dropdown,
    AllPosts,
  } = useContext(uploudingContext);

  return (
    <div>
      {search !== "" ? (
        currentPosts.length ? (
          <table>
            <thead>
              <tr>
                <th>Author</th>
                <th>Title</th>
                <th>Genre</th>
                <th>Pages</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((task) => {
                return <Task task={task} key={task.id} />;
              })}
            </tbody>
          </table>
        ) : (
          <div className="no-tasks">Better read this one!</div>
        )
      ) : dropdown !== "All" ? (
        currentPostsOfFilters.length ? (
          <table>
            <thead>
              <tr>
                <th>Author</th>
                <th>Title</th>
                <th>Genre</th>
                <th>Pages</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {currentPostsOfFilters.map((task) => {
                return <Task task={task} key={task.id} />;
              })}
            </tbody>
          </table>
        ) : (
          <div className="no-tasks">
            Books are wealth, why aren't you reading one?
          </div>
        )
      ) : AllPosts.length ? (
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Pages</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {AllPosts.map((task) => {
              return <Task task={task} key={task.id} />;
            })}
          </tbody>
        </table>
      ) : (
        <div className="no-tasks">
          Books are wealth, why aren't you reading one?
        </div>
      )}
    </div>
  );
}

export default TaskList;
