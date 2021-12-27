import React from "react";
import ReactDOM from "react-dom";
import PageLotto from "./pages/PageLotto";
import styled, { css } from "styled-components";

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid black;
      &:hover {
        background: white;
        color: black;
      }
    `}
`;

class App extends React.Component {
  render() {
    <div className="Box">
      return <PageLotto />;
    </div>;
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
