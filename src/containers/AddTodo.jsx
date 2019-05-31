import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [text, setText] = useState("");
  function handleText(text) {
    setText(text);
  }
  return (
    <div>
      <input
        type="text"
        name="text"
        value={text}
        onChange={e => handleText(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(text);
          setText("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default AddTodo;
