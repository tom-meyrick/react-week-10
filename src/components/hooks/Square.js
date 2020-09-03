import React, { useState } from "react";

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
