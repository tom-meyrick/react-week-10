import React, { useReducer } from "react";

// Try recreating the <Clicked> component from the previous set of challenges using useReducer instead of useState. This would be overkill in a real app, but good practice.

// Your initial state should be:

// const initialState = { clicked: false };
// Your action should be:

// {
//   type: "CLICKED";
// }

const initialState = { clicked: false };

const clicked = (state) => {
  return {
    ...state,
    clicked: !state.clicked,
  };
};

const reducer = (state, action) => {
  //Switch
  return action.type === "CLICKED" ? clicked(state) : state;
};

const Clicked2 = () => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let { clicked } = state;
  //dispatch calls usereducer
  //state is what reducer returns
  return (
    <header onClick={() => dispatch({ type: "CLICKED" })} className="jumbotron">
      {clicked ? "Clicked" : "Not Clicked"}
    </header>
  );
};

export default Clicked2;
