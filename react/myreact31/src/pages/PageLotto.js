import React from "react";

const PageLotto = () => {
  const Lotto = [10, 11, 12, 13, 14, 15, 16, 17];
  const LottoList = Lotto.map((lotto, index) => <h5 key={index}>{lotto}</h5>);
  return <ul>{LottoList}</ul>;
};

export default PageLotto;
