import React, { useState } from "react";

const Clicked = () => {
  const [clicked, setClicked] = useState(false);

  const updateClick = () => setClicked(!clicked);

  return (
    <header onClick={updateClick} className="jumbotron">
      {clicked ? "Clicked" : "Not Clicked"}
    </header>
  );
};

export default Clicked;
