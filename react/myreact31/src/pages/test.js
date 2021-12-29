import React, { Component } from "react";
// prop-types [ yarn add prop-types ]
import PropTypes from "prop-types";
import App from "../App";
import { render } from "@testing-library/react";

class invokeMethod extends Component {
  getUrl() {
    return "http://google.com";
  }
  render() {
    return (
      <div>
        Google: <a href={this.getUrl()}>{this.getUrl}</a>
      </div>
    );
  }
}
export default invokeMethod;
