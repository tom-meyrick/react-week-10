// Create a <RollCall names={ names }> component. It should have a button "Next". When the component first loads it should show the first name in the array. Every time you click "Next" it should show the next name in the array. It should loop back to the beginning.

import React, { useState } from "react";

const RollCall = ({ names }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = () => setCurrentIndex((currentIndex + 1) % names.length);

  return (
    <>
      <p>{names[currentIndex]}</p>
      <button onClick={updateIndex}>Next</button>
    </>
  );
};

export default RollCall;
