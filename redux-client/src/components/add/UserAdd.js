import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { addUser } from '../../actions/users'

export default function UserAdd () {
 
    const initialUserState = {
        name: "",
        phone: ""
    };

    const [user, setUser] = useState(initialUserState);


    const dispatch = useDispatch();
  
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUser({...user, [name]: value})
  }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.add(this.state.name, this.state.phone);
//     this.setState({ name: "", phone: ""});
//   }

  const addForm = (event) => {
    event.preventDefault();
    document.getElementById("container-add").hidden = false
    document.getElementById("btn-add").hidden = true

  }

 const  cancelAdd = (event) => {
    event.preventDefault();
    document.getElementById("container-add").hidden = true
    document.getElementById("btn-add").hidden = false

  }
  
    return (
      <div>
      <button onClick={addForm} id="btn-add" className="btn btn-primary">add</button>
      <div hidden id="container-add" className="container-add">
        <div className="text-add">
        <p>Adding Form</p>
        </div>
        <form onSubmit={(event) => {event.preventDefault();
        dispatch(addUser(user.name,user.phone)); setUser('') }}
        /*{handleSubmit}*/ >
          
          <div id="form-add">
          <label  className=" col-form-label d-inline">Name</label>
            <input
              id="user-input"
              type="text"
              value={user.name}
              onChange={handleChange}
              name="name"
            />
            <label  className=" col-form-label d-inline">Phone</label>
            <input
              className="user-input"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </div>
          <button
            id="btn-post"
            className="w-5 btn btn-lg btn-success"
            type="submit"
            value="save"
          >
            Add
          </button>
          <button
          onClick={cancelAdd}
            id="btn-cancel"
            className="w-5 btn btn-lg btn-warning"
            type="button"
            value="save"
          >
            Cancel
          </button>
        </form>
      </div>
      </div>
    );
  
    }
