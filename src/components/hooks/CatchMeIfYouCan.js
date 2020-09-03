// Create a <CatchMeIfYouCan jump={ 100 }> component. It should have a <button> that when clicked moves jump pixels down the screen.

import React, { useState } from "react";

const CatchMeIfYouCan = ({ jump }) => {
  const [position, setPosition] = useState(0);

  const updatePosition = () => setPosition(position + jump);

  return (
    <button onClick={updatePosition} style={{ marginTop: position }}>
      Jump
    </button>
  );
};

export default CatchMeIfYouCan;
