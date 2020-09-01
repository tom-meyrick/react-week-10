import React from "react";
import Squares from "./components/Squares";
import SignUp from "./components/SignUp";

const App = () => (
  <>
    <Squares color={"hotpink"} />
    <SignUp minimumLength={4} />
  </>
);

export default App;
