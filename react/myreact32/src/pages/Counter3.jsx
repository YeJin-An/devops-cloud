import { useState } from 'react';

function reducer(action, prevState) {
  const { type, amount } = action;
  if (type === 'plus') {
    return prevState + amount;
  } else if (type === 'Minus') {
    return prevState - amount;
  }
}
const defaultStyle = {};
const color = ['red', 'green', 'blue'];

function Counter3({ name }) {
  const [value, setvalue] = useState(0);

  const handleplus = (prevValue) => {
    const action = { type: 'plus', amount: 1 };
    setvalue((prevValue) => {
      return reducer(action, prevValue), color[0];
    });
  };
  const handleMinus = (prevValue) => {
    const action = { type: 'Minus', amount: 1 };
    setvalue((prevValue) => {
      return reducer(action, prevValue), color[1];
    });
  };
  return (
    <>
      <h1 style={{ ...defaultStyle, backgroundColor: color }}>{value}</h1>
      <button onClick={handleplus}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  );
}

export default Counter3;
