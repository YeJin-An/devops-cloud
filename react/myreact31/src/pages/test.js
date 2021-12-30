import React from "react";
import ReactDOM from "react-dom";

const user = {
  firstName: "jina",
  lastName: "kim",
};
function today() {
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();
  return year + "/" + month + "/" + day;
}
class HelloWorld extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, {user.firstName}</h1>
        <h4>This is {today()}</h4>
      </>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
export default HelloWorld;
