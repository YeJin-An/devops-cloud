import React, { Component } from "react";
// prop-types [ yarn add prop-types ]
import PropTypes from "prop-types";

// 기본값 지정
class DefaultProps extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

export default DefaultProps;
