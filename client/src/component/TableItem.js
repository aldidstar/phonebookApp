

export default function TableItem(props) {
    return (
      <tr>
        <td >{props.index}</td>
        <td>{props.name }</td>
        <td>{props.phone}</td>
        <td>
        {!props.sent && <button className="btn btn-warning" onClick={()=> props.resend(props.id, props.name, props.phone)}>Send Again</button>}
        {props.sent && 
        <div> 
        <button className="btn btn-success">update</button>
        <button className="btn btn-danger" onClick={()=> props.remove(props.id)}>Delete</button>
        </div>
        }
        </td>
         
        </tr>
    );
  }