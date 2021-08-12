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
    this.props.addChat(this.state.name, this.state.phone);
    this.setState({ name: "", phone: ""});
  }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.state.name) {
  //     return this.state.name.includes(this.searchletter);
  //   }
  //   return this.items.filter((item) => {
  //     if (this.searchletter) {
  //       return item.letter.includes(this.searchletter);
  //     } else if (this.searchfrequency) {
  //       return item.frequency == this.searchfrequency;
  //     } else {
  //       return item; 
  //     }
  //   });
  // }

 

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
            Search
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
     
      <script>
        
      </script>
      </div>
    );
  }
}
