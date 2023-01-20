import React from "react";

function Buttons(props) {
  return (
    <button
      type="button"
      className=""
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span>{props.name}</span>
    </button>
  );
}

export default Buttons;
