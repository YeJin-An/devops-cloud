import React, { Component } from "react";

class PageLotto extends Component {
  state = {
    number: [10, 11, 12, 13, 14, 15, 16],
  };

  render() {
    return (
      <>
        <ul>
          {this.state.number.map((number) => {
            return <h5>{number}</h5>;
          })}
        </ul>
      </>
    );
  }
}
export default PageLotto;
