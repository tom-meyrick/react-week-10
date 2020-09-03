import React, { useState } from "react";

// Update your <Square colour="hotpink"> component so that the background starts green, but when it is clicked it changes to the passed in colour. It should alternate every time you click.

const Square = ({ color }) => {
  const [green, setGreen] = useState(true);

  const updateGreen = () => setGreen(!green);

  return (
    <figure>
      <div
        onClick={updateGreen}
        style={{ background: green ? "green" : color, width: 200, height: 200 }}
      ></div>
    </figure>
  );
};

Square.defaultProps = {
  color: "green",
};

export default Square;
