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
    let totalData = []
    this.props.phonebooks.forEach(item => {
     totalData.push(item.total)
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    
    for (
      let i = 1;
      i <= Math.ceil(totalData[0] / usersPerPage);
      i++
    ) {
      pageNumbers.push(i);
     
    }

    const renderPageNumbers = pageNumbers.map((number, index) => {
      return (
        <li
          className={
            this.state.currentPage === index + 1
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
              this.props.page(index + 1);
              this.setState({ currentPage: index + 1 });
            }}
          > {index + 1}</a>
        </li>
      );
    });

    return (
      <nav id="pagination" aria-label="...">
        <ul className="pagination">
          <li className={this.state.currentPage < 2 ? "page-item disabled" : "page-item"}>
            <a className="page-link" href="/"
            onClick={(e) => {
              e.preventDefault();
              this.props.page(this.state.currentPage - 1);
              this.setState({ currentPage: this.state.currentPage - 1});
            }}>Previous</a>
          </li>
          {renderPageNumbers}
          <li className={this.state.currentPage < pageNumbers.length ? "page-item  " : "page-item disabled"}>
            <a className="page-link" href="/" onClick={(e) => {
              e.preventDefault();
              this.props.page(this.state.currentPage + 1);
              this.setState({ currentPage: this.state.currentPage + 1});
            }}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
