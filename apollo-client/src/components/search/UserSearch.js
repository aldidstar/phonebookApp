import React, { useState } from 'react'
import {  loadUser,  } from "../../actions/users";
import { useDispatch } from 'react-redux';


export default function UserSearch () {
  const dispatch = useDispatch();

    const initialUserState = {
      name: "",
      phone: "",
    };

    const [{ name, phone }, setState] = useState(initialUserState);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setState((prevState) => ({ ...prevState, [name]: value }));
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(loadUser(1, name, phone));
    };



 

    return (
      <div >
      <div className="container-add">
        <div className="text-add">
        <p>Searching Form</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div id="form-add">
          <label  className=" col-form-label d-inline">Name</label>
            <input
             
              type="text"
              value={name}
              onChange={handleChange}
              name="name"
            />
            <label  className=" col-form-label d-inline">Phone</label>
            <input
              className="user-input"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <button
      
            className="w-5 btn btn-lg btn-success"
            type="submit"
            value="save"
          >
            Search
          </button>
         
        </form>
      </div>
     
      <script>
        
      </script>
      </div>
    );
  
    }
