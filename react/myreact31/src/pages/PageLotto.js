import React, { useState } from "react";

function PageLotto() {
  const number = [
    { number: 10 },
    { number: 11 },
    { number: 12 },
    { number: 13 },
    { number: 14 },
    { number: 15 },
    { number: 16 },
    { number: 17 },
  ];

  const [Lotto, setLotto] = useState();

  function onClick() {
    return setLotto(Math.floor(Math.random() * 101));
  }

  return (
    <div class="wrapper">
      <h2>{`${Lotto} ${Lotto} ${Lotto} ${Lotto} ${Lotto} ${Lotto} ${Lotto} ${Lotto}`}</h2>
      <button onClick={onClick}>예지</button>
    </div>
  );
}

export default PageLotto;
