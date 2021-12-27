import React from "react";

function LottoList() {
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
        <h4>숫자: {number[0].number}</h4>
      </div>
      <div>
        <h4>숫자: {number[1].number}</h4>
      </div>
      <div>
        <h4>숫자: {number[2].number}</h4>
      </div>
      <div>
        <h4>숫자: {number[3].number}</h4>
      </div>
      <div>
        <h4>숫자: {number[4].number}</h4>
      </div>
      <div>
        <h4>숫자: {number[5].number}</h4>
      </div>
      <div>
        <h4>숫자: {number[6].number}</h4>
      </div>
      <div>
        <h4>숫자: {number[7].number}</h4>
      </div>
    </div>
  );
}

export default LottoList;
