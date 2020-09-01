import React, { Component } from "react";
import Square from "./Square";

// Create a component <Squares color="hotpink"> that displays two of your <Square> components from last week and passes through the color prop. As before, when clicked the background colour should change. But only one of the <Square>s should show the given colour at once. You'll need to turn your squares back into stateless components.

class Squares extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 1,
    };
  }

  render() {
    const { selected } = this.state;
    let { color } = this.props;
    console.log(color);
    return (
      <>
        <Square
          name={"uno"}
          selected={selected === 1}
          color={color}
          handleClick={() => this.setState({ selected: 1 })}
        />
        <Square
          name={"dos"}
          selected={selected === 2}
          color={color}
          handleClick={() => this.setState({ selected: 2 })}
        />
      </>
    );
  }
}

export default Squares;
