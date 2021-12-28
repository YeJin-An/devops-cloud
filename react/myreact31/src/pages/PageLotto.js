import React, { useState } from "react";

const PageLotto = () => {
  const [lotto, setlotto] = useState([10, 11, 12, 13, 14, 15, 16, 17]);
  const lottoList = lotto.map((lotto, index) => <h5 key={index}>{lotto}</h5>);
  return (
    <ul style={{ margin: "40px", padding: "40px" }}>
      {lotto[0]} {lotto[1]} {lotto[2]} {lotto[3]} {lotto[4]} {lotto[5]}{" "}
      {lotto[6]} {lotto[7]}
    </ul>
  );
};

export default PageLotto;
