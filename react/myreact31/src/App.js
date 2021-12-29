import React, { Component } from "react";
import ProfileCard from "./pages/ProfileCard";
import DefaultProps from "./pages/test";
// import "./styles/PageLotto.css";

class App extends Component {
  render() {
    return (
      <div>
        {
          //<h1 title={this.props.title} id={this.props.id}>
        }
        <h1 {...this.props}>Hello, {this.props.frameworkName} world react!</h1>
      </div>
    );
  }
}

export default App;
