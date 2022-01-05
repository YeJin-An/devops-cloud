import React from "react";

import { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };

  return (
    <>
      <input name="name" placehodler="이름" onChange={onChange} value={name} />
      <input
        name="nickname"
        placehodler="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>initial</button>
      <div>
        <b>값:</b>
        {name} ({nickname})
      </div>
    </>
  );
}

export default InputSample;
