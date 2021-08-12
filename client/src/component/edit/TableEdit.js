import React from "react";

export default class TableEdit extends React.Component {
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
    this.props.addChat(this.state.name, this.state.phone);
    this.setState({ name: "", phone: ""});
  }

  render() {
    return (
     
     
      <div hidden className="container-add">
        <div className="text-add">
        <p>Edit Form</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div id="form-add">
          <label  className=" col-form-label d-inline">Name</label>
            <input
              id="user-input"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
            <label  className=" col-form-label d-inline">Phone</label>
            <input
              className="user-input"
              name="description"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <button
            id="btn-post"
            className="w-5 btn btn-lg btn-success"
            type="submit"
            value="save"
          >
            Save
          </button>
          <button
            id="btn-cancel"
            className="w-5 btn btn-lg btn-warning"
            type="button"
            value="save"
          >
            Cancel
          </button>
        </form>
      </div>
   
    );
  }
}
