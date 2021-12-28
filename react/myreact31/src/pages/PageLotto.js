import React from "react";

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

  return (
    <div class="wrapper">
      <div>{number[0].number}</div>
      <div>{number[1].number}</div>
      <div>{number[2].number}</div>
      <div>{number[3].number}</div>
      <div>{number[4].number}</div>
      <div>{number[5].number}</div>
      <div>{number[6].number}</div>
      <div>{number[7].number}</div>
    </div>
  );
}

export default PageLotto;
