import React, { Component } from "react";

const Password = ({ label, handleChange, colour, input }) => (
  <form>
    <label for="password">{label}</label>
    <input
      className="password"
      value={input}
      id="password"
      style={{
        border: `1px solid ${colour}`,
      }}
      onChange={handleChange}
    />
  </form>
);

export default Password;
