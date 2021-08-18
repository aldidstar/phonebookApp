import React from "react";
import TableList from "./TableList";
import TableAdd from "./add/TableAdd";
import TableSearch from "./search/TableSearch";
import Pagination from "./Pagination";
import Navbar from "./Navbar";

export default class TableBox extends React.Component {
  componentDidMount() {
    this.props.onLoad();
   
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-chat">
          <TableAdd add={this.props.onAdd}  />
          <TableSearch filter={this.props.onFilter} load={this.props.onLoad} />

          <TableList
            phonebooks={this.props.phonebooks}
            resend={this.props.onResend}
            remove={this.props.onDelete}
            edit={this.props.onEdit}

            />
       <Pagination page={this.props.onLoad}  phonebooks={this.props.phonebooks} pageFilter={this.props.pageFilter} load={this.props.onLoad}  />
          <br></br>
        </div>
      </div>
    );
  }
}
