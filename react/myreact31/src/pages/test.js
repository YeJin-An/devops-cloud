import React, { Component } from "react";
// prop-types [ yarn add prop-types ]
import PropTypes from "prop-types";

class invokeMethod extends Component {
  render() {
    const value = 1;
    return (
      <>
        {1 + 1 === 2 ? <div>딩동댕</div> : <div>땡</div>}
        {1 + 1 === 2 && <div>맞아요!</div>}
        {(function () {
          if (value === 1) return <div>하나</div>;
        })()}

        {(() => {
          if (value === 1) return <div>둘</div>;
        })()}
      </>
    );
  }
}
export default invokeMethod;
