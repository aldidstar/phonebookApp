import React from "react";

export default class C extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", phone: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addForm = this.addForm.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);


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
    this.props.add(this.state.name, this.state.phone);
    this.setState({ name: "", phone: ""});
  }

  addForm(event) {
    event.preventDefault();
    document.getElementById("container-add").hidden = false
    document.getElementById("btn-add").hidden = true

  }

  cancelAdd(event) {
    event.preventDefault();
    document.getElementById("container-add").hidden = true
    document.getElementById("btn-add").hidden = false

  }

  render() {
    return (
      <div>
      <button onClick={this.addForm} id="btn-add" className="btn btn-primary">add</button>
      <div hidden id="container-add" className="container-add">
        <div className="text-add">
        <p>Adding Form</p>
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
              name="phone"
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
            Add
          </button>
          <button
          onClick={this.cancelAdd}
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
}
