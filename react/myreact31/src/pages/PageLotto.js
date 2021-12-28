import React, { Component, useState } from "react";

function makeLottoNumbers() {
  let lotto = [];

  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * 44) + 1;

    for (let j in lotto) {
      if (num == lotto[j]) {
        num = Math.floor(Math.random() * 44) + 1;
      }
    }
    lotto.push(num);
  }

  lotto.sort(function (a, b) {
    return a - b;
  });

  return lotto;
}

function PageLotto() {
  const [numbers, setNumbers] = useState([10, 11, 12, 13, 14, 15, 16]);

  const handleClick = () => {
    setNumbers(makeLottoNumbers());
    console.log("clicked");
  };

  return (
    <div>
      <ul>
        {numbers.map((number) => (
          <span style={{ margin: "10px" }}>{number}</span>
        ))}
      </ul>
      <button onClick={handleClick}>예지</button>
    </div>
  );
}

export default PageLotto; // 티스토리 144
