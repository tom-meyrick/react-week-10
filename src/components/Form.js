import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    const { name, email } = this.state;
    let personData = { name, email };
    let { handleSubmit } = this.props;
    this.setState({ name: "", email: "" });
    handleSubmit(personData);
  }

  handleName(e) {
    this.setState({ name: e.currentTarget.value });
  }

  handleEmail(e) {
    this.setState({ email: e.currentTarget.value });
  }

  render() {
    const { name, email } = this.state;
    return (
      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            class="form-control"
            type="text"
            id="name"
            onChange={this.handleName}
            value={name}
          />
          <label for="email">Email</label>
          <input
            class="form-control"
            type="email"
            id="email"
            onChange={this.handleEmail}
            value={email}
          />{" "}
          <button className="btn btn-primary" onClick={this.handleClick}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
