import React, { useState } from "react";
import { resendUser, deleteUser, editUser, loadUser } from "../actions/users";
import { useDispatch } from "react-redux";


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
  const remove = (event) => { 
    event.preventDefault();
    dispatch(deleteUser(props.id))
    dispatch(loadUser())
   }

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
