import React, { useState } from "react";

const ToggleText = ({ initial, alternate }) => {
  const [clicked, setClicked] = useState(true);

  const updateClick = () => setClicked(!clicked);

  return (
    <>
      <p>{clicked ? initial : alternate}</p>
      <button onClick={updateClick}>Click here</button>
    </>
  );
};

export default ToggleText;
