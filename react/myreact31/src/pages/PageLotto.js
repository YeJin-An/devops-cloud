import React, { Component, useState } from "react";

function PageLotto() {
  const [numbers, setNumbers] = useState([10, 11, 12, 13, 14, 15, 16]);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <ul>
        {numbers.map((number) => (
          <span style={{ margin: "10px" }}>{number}</span>
        ))}
      </ul>
      <button onClick={handleClick}>예지</button>
    </div>
  );
}

export default PageLotto; // 티스토리 144
