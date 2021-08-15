import React, { useState } from "react";
import { resendUser, deleteUser, editUser } from "../actions/users";
import { useDispatch } from "react-redux";

// export default class TableItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "", phone: "", edit: true };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

//   }

//   handleChange(event) {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     this.setState({
//       [name]: value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.edit(this.props.id, this.state.name, this.state.phone);
//     this.setState({ name: "", phone: "", edit: true});
//   }

//   render() {
//     return (
//       <tr>
//         <td>{this.props.index}</td>
//         {!this.state.edit && (
//           <td>
//             <input
//               type="text"
//               value={this.state.name}
//               onChange={this.handleChange}
//               name="name"
//             />
//           </td>
//         )}
//         {this.state.edit && <td>{this.props.name}</td>}
//         {!this.state.edit && (
//           <td>
//             <input

//               type="text"
//               value={this.state.phone}
//               onChange={this.handleChange}
//               name="phone"
//             />
//           </td>
//         )}
//         {this.state.edit && <td>{this.props.phone}</td>}
//         <td>
//           {!this.state.edit && (
//             <div>
//             <button onClick={this.handleSubmit}
//               className="btn btn-success"
//             >
//               Save
//             </button>
//              <button
//              className="btn btn-warning"
//              onClick={() => this.setState({edit: true})}
//            >
//              cancel
//            </button>
//            </div>
//           )}
//           {!this.props.sent && this.state.edit && (
//             <button
//               className="btn btn-warning"
//               onClick={() => this.props.edit(this.props.id, this.props.name, this.props.phone)}
//             >
//               Send Again
//             </button>
//           )}
//           {this.props.sent && this.state.edit && (
//             <div>
//               <button className="btn btn-success"
//               onClick={() => this.setState({name: this.props.name, phone: this.props.phone, edit: false})} >
//                 update
//               </button>

//               <button
//                 className="btn btn-danger"
//                 onClick={() => this.props.remove(this.props.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           )}
//         </td>
//       </tr>
//     );
//   }
// }

// import { useDispatch } from 'react-redux'

// import { resendUser } from '../actions/users'

export default function UserItem(props) {
  const initialUserState = {
    name: "",
    phone: "",
    edit: true,
  };

  const [user, setUser] = useState(initialUserState);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUser({...user, [name]: value})
   
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(initialUserState);
    dispatch(editUser(props.id, user.name, user.phone));
  };

  const update = (event) => {
   
    event.preventDefault();
    setUser({edit: false, name: props.name, phone: props.phone});

  };

  const cancel = (event) => {
      event.preventDefault();
      setUser({edit: true});
    
 
  };
  

  const resend = () => dispatch(resendUser(props.id, props.name, props.phone));
  const remove = () => dispatch(deleteUser(props.id));

  return (
    <tr>
      <td>{props.index}</td>
      {user.edit && <td>{props.name}</td>}
      {!user.edit && (
        <td>
          <input
            type="text"
            value={user.name}
            onChange={handleChange}
            name="name"
          />
        </td>
      )}
     {user.edit && <td>{props.phone}</td>}
      {!user.edit && (
      <td>
        <input
          type="text"
          value={user.phone}
          onChange={handleChange}
          name="phone"
        />
      </td>
)}
      <td>
        {props.sent && user.edit && (
          <div>
            <button className="btn btn-success" onClick={update}>
              update
            </button>
            <button className="btn btn-danger" onClick={remove}>
              Delete
            </button>
          </div>
        )}
         {props.sent && !user.edit && (
          <div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Save
            </button>
            <button className="btn btn-warning" onClick={cancel}>
              Cancel
            </button>
          </div>
        )}
        {!props.sent && (
          <button className="btn btn-warning" onClick={resend}>
            send again
          </button>
        )}
      </td>
    </tr>
  );
}
