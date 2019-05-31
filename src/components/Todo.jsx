import React from "react";

function Todo({ text, onClick }) {
  return <li onClick={onClick}>{text}</li>;
}

export default Todo;
