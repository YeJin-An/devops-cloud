import React, { Component, useState } from "react";

class PageLotto extends Component {
  render() {
    const lotto = [10, 11, 12, 13, 14, 15, 16, 17];
    const lottolist = lotto.map((lotto) => <h5>{lotto}</h5>);

    return <ul>{lottolist}</ul>;
  }
}

export default PageLotto;
