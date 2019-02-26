import React from "react";
import "./ToggleButton.css";

const ToggleButton = ({ toggleNav }) => {
  return (
    <div className="toolbar-toggle-btn">
      <button
        className="toggle-btn"
        aria-label="toggle dropdown"
        onClick={() => toggleNav()}
      >
        <div className="toggle-btn-line" />
        <div className="toggle-btn-line" />
        <div className="toggle-btn-line" />
      </button>
    </div>
  );
};

export default ToggleButton;
