import React from "react";
import Squares from "./components/Squares";
import SignUp from "./components/SignUp";
import Button from "./components/Button";
import Form from "./components/Form";
import Max from "./components/Max";
import Clicked from "./components/hooks/Clicked";
import Square from "./components/hooks/Square";
import ToggleText from "./components/hooks/ToggleText";
import Counter from "./components/hooks/Counter";
import CatchMeIfYouCan from "./components/hooks/CatchMeIfYouCan";
import RollCall from "./components/hooks/RollCall";
import Clicked2 from "./components/hooks/reducer/Clicked2";

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
    <CatchMeIfYouCan jump={100} />
    <Clicked />
    <Square color={"orange"} />
    <ToggleText initial={"Hello"} alternate={"World"} />
    <Counter initial={5} max={10} />
    <RollCall names={["Rita", "Adrian", "Susan", "Stephanie"]} />
    <h3>Reducer</h3>
    <Clicked2 />
  </>
);

export default App;
