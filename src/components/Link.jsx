import React from "react";

function Link({ children, onClick, active }) {
  // console.log(active);
  return (
    <button disabled={active} onClick={onClick}>
      {children}
    </button>
  );
}

export default Link;
