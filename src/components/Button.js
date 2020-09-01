import React, { Component } from "react";

// Create a component <Button> which keeps track of how many times it's been clicked (it doesn't need to display it anywhere). It should have a handleUpdate prop which accepts a function. Whenever the value of the <Button> changes it should also call the handleUpdate function and pass it the current value. Use the <Button> as follows and check that it logs the value to the console each time the button is clicked.

{
  /* <Button handleUpdate={ console.log } /> */
}

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  componentDidUpdate(prevState) {
    let { handleUpdate } = this.props;
    handleUpdate(this.state.counter);
  }

  render() {
    let { counter } = this.state;
    return (
      <>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Click me
        </button>
      </>
    );
  }
}

export default Button;
