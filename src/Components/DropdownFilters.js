import React, { useContext} from "react";
import { uploudingContext } from "../Context/TaskListContext";

function DropdownFilters(props) {
  const { setDropdown } = useContext(uploudingContext);

  return (
    <div className="dropdown">
      <label htmlFor="books">Choose a genre, </label>
      <select onChange={(e) => setDropdown(e.target.value)}>
        <option disabled defaultValue>
          {" "}
          or select your favourite genre{" "}
        </option>
        <option>All</option>
        <option>historical drama</option>
        <option>romance</option>
        <option>adventure</option>
        <option>thriller</option>
        <option>fantasy</option>
        <option>futurism</option>
        <option>children</option>
        <option>psychology</option>
        <option>philosophy</option>
      </select>
    </div>
  );
}

export default DropdownFilters;
