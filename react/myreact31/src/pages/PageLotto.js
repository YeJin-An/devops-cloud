import React, { useState } from "react";

const PageLotto = () => {
  const [Lotto, setLotto] = useState([
    Math.floor(Math.random() * 101),
    Math.floor(Math.random() * 101),
    Math.floor(Math.random() * 101),
    Math.floor(Math.random() * 101),
    Math.floor(Math.random() * 101),
    Math.floor(Math.random() * 101),
    Math.floor(Math.random() * 101),
  ]);
  const LottoList = Lotto.map((lotto, index) => <h5 key={index}>{lotto}</h5>);
  return <ul>{LottoList}</ul>;
};

export default PageLotto;
