import React from "react";
import Squares from "./components/Squares";
import SignUp from "./components/SignUp";
import Button from "./components/Button";
import Form from "./components/Form";
import Max from "./components/Max";
import Clicked from "./components/hooks/Clicked";
import Square from "./components/hooks/Square";

const App = () => (
  <>
    <h1>One-way Data Flow</h1>
    <h3>Lifting State</h3>
    <Squares color={"hotpink"} />
    <SignUp minimumLength={4} />
    <Max numbers={[2, 9, 87, 90, 23, 32]} />
    <h3>Passing value up</h3>
    <Button handleUpdate={(value) => console.log(value)} />
    <Form handleSubmit={(value) => console.log(value)} />
    <h3>Hooks</h3>
    <Clicked />
    <Square color={"orange"} />
  </>
);

export default App;
