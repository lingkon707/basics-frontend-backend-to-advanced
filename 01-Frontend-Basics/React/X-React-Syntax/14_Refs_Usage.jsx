import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();
  return (
    <div>
      <input ref={inputRef} placeholder="Type here" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
