import React from "react";

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
    // const dispatch = useDispatch();

    // const resend = () => dispatch(resendUser(props.username, props.name, props.age))
    // const remove = () => { }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            {/* <td>{props.age}</td> */}
            <td>
                <button type="button" className="btn btn-warning" /* onClick={props.sent ? remove : resend}>{props.sent ? 'Delete' : 'Resend'}*/>
                </button>

            </td>
        </tr>
    )
}
