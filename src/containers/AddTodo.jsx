import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

function AddTodo({ dispatch }) {
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
          dispatch(addTodo(text));
          setText("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default connect()(AddTodo);
