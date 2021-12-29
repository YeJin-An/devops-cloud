import React, { Component } from "react";
import ProfileCard from "./pages/ProfileCard";
import DefaultProps from "./pages/test";
// import "./styles/PageLotto.css";

class App extends Component {
  render() {
    return (
      <>
        <DefaultProps
          profileimage="log"
          name="이름"
          role="role"
          facebookUrl="Url"
          email="ejs"
        />
      </>
    );
  }
}

export default App;
