import React from "react";
import "./Switch.css";

const Switch = ({ checked = true, handleChange, ...props }) => {
  return (
    <div {...props}>
      <label class="switch">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
