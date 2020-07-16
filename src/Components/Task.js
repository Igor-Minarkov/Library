import React, { useContext, Fragment } from "react";
import { uploudingContext } from "../Context/TaskListContext";

function Task({ task }) {
  const { DeleteTask, findItem } = useContext(uploudingContext);

  return (
    <Fragment>
      <tr>
        <td>{task.author}</td>
        <td>{task.title}</td>
        <td>{task.genre}</td>
        <td>{task.pages}</td>
        <td>
          <i className="far fa-edit" onClick={() => findItem(task.id)}></i>
          <i className="fas fa-trash" onClick={() => DeleteTask(task.id)}></i>
        </td>
      </tr>
    </Fragment>
  );
}

export default Task;
