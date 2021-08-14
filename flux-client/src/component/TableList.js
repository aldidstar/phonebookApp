import TableItem from "./TableItem";

export default function TableList(props){

    const nodeList = [...props.phonebooks.values()].map((item, index) => {
      
      return (
        <TableItem
          name={item.name}
          phone={item.phone}
          key={index}
          index={index + 1}
          id={item.id}
          sent = {item.sent}
          resend={props.resend}
          remove={props.remove}
          edit = {props.edit}
        />
      );
    });

    return (
      <div id="table-data">
      <table className="table table-striped">
        <thead>
        <tr>
          <th>#</th>

          <th>Name</th>

          <th>Phone</th>

          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {nodeList}
        </tbody>

      </table>
      </div>
    );
  }

