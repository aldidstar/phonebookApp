import React from "react";

export default class TableSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", phone: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.load(1,this.state.name, this.state.phone);
   

  }



 

  render() {
    return (
      <div >
      <div className="container-add">
        <div className="text-add">
        <p>Searching Form</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div id="form-add">
          <label  className=" col-form-label d-inline">Name</label>
            <input
             
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
            <label  className=" col-form-label d-inline">Phone</label>
            <input
              className="user-input"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
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
}
