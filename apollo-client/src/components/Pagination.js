import React from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { loadUser } from "../actions/users";

export default function Pagination() {
  



  const dispatch = useDispatch();
  const { pageFilter } = useSelector(
    (state) => ({
      users: state.users,
      pageFilter: state.pageFilter
    }),
    shallowEqual
  );

// console.log( dispatch(loadUser(users.count)))
  // Logic for displaying page numbers


  const pageNumbers = [];
  console.log(pageFilter)

  for (let i = 1; i <= Math.ceil(pageFilter.totalData / 3); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number, index) => {
    return (
      <li
        className={pageFilter.page === index + 1 ? 'page-item active': 'page-item'}
        key={index}
      >
        <a
          className="page-link"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            dispatch(loadUser(index + 1));
          
          }}
        >
          {" "}
          {index + 1}
        </a>
      </li>
    );
  });

  return (
    <nav id="pagination" aria-label="...">
      <ul className="pagination">
        <li
          className={pageFilter.page < 2 ? "page-item disabled" : "page-item"}
        >
          <a
            className="page-link"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              dispatch(loadUser(pageFilter.page - 1))
              
            }}
          >
            Previous
          </a>
        </li>
        {renderPageNumbers}
        <li
          className={
            pageFilter.page < pageNumbers.length
              ? "page-item"
              : "page-item disabled"
          }
        >
          <a
            className="page-link"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              dispatch(loadUser(pageFilter.page + 1))
           
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
