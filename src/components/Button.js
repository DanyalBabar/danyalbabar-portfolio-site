import React from "react";
import "./styles/button.css";

export default function Button(props) {
  return (
    <button
      disabled={props.disabled}
      className={"db_button" + " " + props.className}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
}
