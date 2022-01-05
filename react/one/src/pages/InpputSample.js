import React from "react";

import { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText("");
  };

  return (
    <>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>initial</button>
      <div>
        <b>값: {text}</b>
      </div>
    </>
  );
}

export default InputSample;
