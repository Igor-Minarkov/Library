import React, { useContext } from "react";
import { uploudingContext } from "../Context/TaskListContext";

function Search(props) {
  const { setSearch } = useContext(uploudingContext);

  return (
    <div>
      <input className="task-input task-input-search"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
