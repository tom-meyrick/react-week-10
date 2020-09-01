import React from "react";
import Squares from "./components/Squares";
import SignUp from "./components/SignUp";
import Button from "./components/Button";

const App = () => (
  <>
    <h1>One-way Data Flow</h1>
    <h3>Lifting State</h3>
    <Squares color={"hotpink"} />
    <SignUp minimumLength={4} />
    <h3>Passing value up</h3>
    <Button handleUpdate={(value) => console.log(value)} />
  </>
);

export default App;
