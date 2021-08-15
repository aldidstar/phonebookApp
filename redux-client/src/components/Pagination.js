import React,  { useState } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../actions/users";



export default function Pagination() {
  const initialUserState = {
    currentPage: 1,
  
  };

  const [user, setUser] = useState(initialUserState);

  const dispatch = useDispatch();

  // Logic for displaying page numbers
  const pageNumbers = [];
  
  for (
    let i = 1;
    i <= Math.ceil(9 / 3);
    i++
  ) {
    pageNumbers.push(i);
   
  }
  
  const renderPageNumbers = pageNumbers.map((number, index) => {
    
    return (
      
      <li
        className={
          user.currentPage === index + 1
            ? "page-item active"
            : "page-item"
        }
        key={index}
      >
     
        <a
          className="page-link"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            dispatch(loadUser(index + 1));
            setUser({ currentPage: index + 1 });
          }}
        > {index + 1}</a>
      </li>
    );
  });

  return (
    <nav id="pagination" aria-label="...">
      <ul className="pagination">
        <li className={user.currentPage < 2 ? "page-item disabled" : "page-item"}>
          <a className="page-link" href="/"
          onClick={(e) => {
            e.preventDefault();
            dispatch(loadUser(user.currentPage - 1));
            setUser({ currentPage: user.currentPage - 1});
          }}>Previous</a>
        </li>
        {renderPageNumbers}
        <li className={user.currentPage < pageNumbers.length ? "page-item  " : "page-item disabled"}>
          <a className="page-link" href="/" onClick={(e) => {
            e.preventDefault();
            dispatch(loadUser(user.currentPage + 1));
            setUser({ currentPage: user.currentPage + 1});
          }}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}