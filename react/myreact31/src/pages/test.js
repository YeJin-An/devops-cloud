import React, { Component } from "react";
// prop-types [ yarn add prop-types ]
import PropTypes from "prop-types";

class DefaultProps extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
  cjamgeinput(e) {
    this.setState({ input: e.targer.value });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.changeinput.bind(this)}
        ></input>
      </div>
    );
  }
}

export default DefaultProps;
