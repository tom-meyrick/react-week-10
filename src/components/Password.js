import React, { Component } from "react";

const Password = ({ label, handleChange, colour }) => (
  <form>
    <label for="password">{label}</label>
    <input
      className="password"
      id="password"
      style={{
        border: `1px solid ${colour}`,
      }}
      onChange={handleChange}
    />
  </form>
);

export default Password;
