import React, { Component } from "react";

const Square = ({ selected, name, handleClick, color }) => (
  <div
    onClick={handleClick}
    style={{
      background: `${selected ? color : "blue"}`,
      height: 200,
      width: 200,
    }}
  >
    {name}
  </div>
);

export default Square;
