import React, { useContext, Fragment } from "react";
import Pagination from "react-js-pagination";
import { uploudingContext } from "../Context/TaskListContext";

const PaginationComponent = () => {
  const { postsPerPage, filtered, currentPage, paginate } = useContext(
    uploudingContext
  );
  const PageNumbers = [];

  for (let i = 1; i <= Math.ceil(filtered.length / postsPerPage); i++) {
    PageNumbers.push(i);
  }

  return (
    <Fragment>
      <Pagination
        activePage={currentPage}
        totalItemsCount={4500}
        pageRangeDisplayed={7}
        onChange={paginate}
      />
    </Fragment>
  );
};

export default PaginationComponent;
