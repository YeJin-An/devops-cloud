import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const onIncreace = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={onIncreace}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
}
export default Counter;
