import React from "react";


export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      usersPerPage: 3,
    };
  }

  

  render() {
    const { usersPerPage } = this.state;
  

    // Logic for displaying page numbers
    const pageNumbers = [];
  
    for (
      let i = 1;
      i <= Math.ceil(this.props.pageFilter.totalData / usersPerPage);
      i++
    ) {
      pageNumbers.push(i);
     
    }

    const renderPageNumbers = pageNumbers.map((number, index) => {
      return (
        <li
          className={
            this.props.pageFilter.page === index + 1
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
              this.props.load(index + 1);
            }}
          > {index + 1}</a>
        </li>
      );
    });

    return (
      <nav id="pagination" aria-label="...">
        <ul className="pagination">
          <li className={this.props.pageFilter.page < 2 ? "page-item disabled" : "page-item"}>
            <a className="page-link" href="/"
            onClick={(e) => {
              e.preventDefault();
              this.props.load(this.props.pageFilter.page - 1);
            }}>Previous</a>
          </li>
          {renderPageNumbers}
          <li className={this.props.pageFilter.page < pageNumbers.length ? "page-item  " : "page-item disabled"}>
            <a className="page-link" href="/" onClick={(e) => {
              e.preventDefault();
              this.props.load(this.props.pageFilter.page + 1);
            }}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
