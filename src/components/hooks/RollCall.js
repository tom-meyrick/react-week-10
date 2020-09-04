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
