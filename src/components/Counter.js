import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: this.props.initial };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }

  plus() {
    if (this.state.counter < this.props.max) {
      this.setState({ counter: this.state.counter + 1 });
    }
  }

  minus() {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  render() {
    return (
      <>
        <p>{this.state.counter}</p>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </>
    );
  }
}

export default Counter;
