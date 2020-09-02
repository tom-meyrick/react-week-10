// Create a component <Max count={ numbers }> that you pass an array of numbers. For each number in the array it should display one of your <Counter> components from last week with that number as the initial value. The counter with the highest value should be highlighted.
import React, { Component } from "react";
import Counter from "./Counter";

class Max extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initial: 0,
    };
  }

  render() {
    const { numbers } = this.props;
    return (
      <div>
        {numbers.map((number) => (
          <Counter initial={number} />
        ))}
        ;
      </div>
    );
  }
}

export default Max;
