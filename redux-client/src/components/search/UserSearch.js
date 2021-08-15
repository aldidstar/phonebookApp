import React, { useState } from 'react'
import { filterUser } from '../../actions/users'
import { useDispatch } from 'react-redux';


export default function UserSearch () {

    const initialUserState = {
        username: "",
        name: "",
        age: ""
    };

    const [user, setUser] = useState(initialUserState);
  
    const dispatch = useDispatch();
   
  

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUser({...user, [name]: value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(initialUserState)
    dispatch(filterUser(user.name,user.phone));
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
