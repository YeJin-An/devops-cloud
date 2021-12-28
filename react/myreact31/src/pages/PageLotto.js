import React, { useState } from "react";

const PageLotto = () => {
  const [lotto, setlotto] = useState([10, 11, 12, 13, 14, 15, 16]);
  const number = lotto.map((x) => Math.floor(Math.random(x) * 101));
  return (
    <ul style={{ margin: "40px", padding: "40px" }}>
      <h2>{number}</h2>
    </ul>
  );
};

export default PageLotto;
