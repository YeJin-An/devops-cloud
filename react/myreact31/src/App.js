import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Footer />
        <Header />
      </div>
    );
  }
}

App.defaultProps = {
  number: 10,
  number: 11,
  number: 12,
  number: 13,
  number: 14,
  number: 15,
  number: 16,
  number: 17,
};

export default App;
