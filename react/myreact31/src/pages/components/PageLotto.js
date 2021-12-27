import React, { Component } from "react";

class PageLotto extends Component {
  render() {
    return (
      <div>
        <p>숫자: {this.props.number}</p>
      </div>
    );
  }
}

export default PageLotto;
