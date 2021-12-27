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
    <div>
      <div>
        <span>
          {number[0].number}
          {number[1].number}
          {number[2].number}
          {number[3].number}
          {number[4].number}
          {number[5].number}
          {number[6].number}
          {number[7].number}
        </span>
      </div>
    </div>
  );
}

export default PageLotto;
