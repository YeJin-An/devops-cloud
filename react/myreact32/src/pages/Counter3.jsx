import { useState } from 'react';

function reducer(action, prevState) {
  const { type, amount } = action;
  if (type === 'plus') {
    return prevState + amount;
  } else if (type === 'Minus') {
    return prevState - amount;
  }
}

const color = ['red', 'green', 'blue'];

function Counter3({ name }) {
  const [value, setvalue] = useState(0);

  const handleplus = (prevValue) => {
    const action = { type: 'plus', amount: 1 };
    setvalue((prevValue) => {
      return reducer(action, prevValue);
    });
  };
  const handleMinus = (prevValue) => {
    const action = { type: 'Minus', amount: 1 };
    setvalue((prevValue) => {
      return reducer(action, prevValue);
    });
  };
  return (
    <div>
      <h1>Counter3</h1>
      <div style={{ ...defaultStyle, backgroundColor: color }}>{value}</div>
      <button onClick={handleplus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}
const defaultStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50px',
  lineHeight: '100px',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: '3rem',
  userSelect: 'none',
};

export default Counter3;
