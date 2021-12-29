import React, { Component } from "react";
// prop-types [ yarn add prop-types ]
import PropTypes from "prop-types";
import App from "../App";

// 기본값 지정
class DefaultProps extends Component {
  render() {
    return (
      <>
        <div>
          <h1 {...this.props}>Hello, {this.props.frameworkName} world!</h1>
        </div>
      </>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  frameworkName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

export default DefaultProps;
