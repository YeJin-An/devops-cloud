import React, { Component } from "react";
// prop-types [ yarn add prop-types ]
import PropTypes from "prop-types";

class DefaultProps extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
DefaultProps.defaultProps = { name: "React" };

export default DefaultProps;
