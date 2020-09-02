import React, { Component } from "react";
import Password from "./Password";

// Create a component <Password label="Password"> that contains an <input> with a <label>. Inside a <SignUp minimumLength={ 12 }> component put two of these <Password> components: one should have the label "Password" and the other "Confirm Password". Both <Password> components should have a red border unless they are longer than minimumLength and match each other.

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputOne: "",
      inputTwo: "",
    };
  }

  render() {
    const { minimumLength } = this.props;
    const { inputOne, inputTwo } = this.state;
    let colour =
      inputOne === inputTwo && inputOne.length > minimumLength
        ? "green"
        : "red";
    return (
      <>
        <Password
          handleChange={(e) =>
            this.setState({ inputOne: e.currentTarget.value })
          }
          label={"Password"}
          input={inputOne}
          colour={colour}
        />
        <Password
          handleChange={(e) =>
            this.setState({ inputTwo: e.currentTarget.value })
          }
          label={"Confirm Password"}
          input={inputTwo}
          colour={colour}
        />
      </>
    );
  }
}

export default SignUp;
