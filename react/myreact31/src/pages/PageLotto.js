import React, { Component, useState } from "react";

function PageLotto() {
  const [numbers, setNumbers] = useState([10, 11, 12, 13, 14, 15, 16]);

  return (
    <div>
      <ul>
        {numbers.map((number) => (
          <h5>{number}</h5>
        ))}
      </ul>
    </div>
  );
}

export default PageLotto;
