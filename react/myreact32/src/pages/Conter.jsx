import { useState } from 'react';

function dispatch(action, prevState) {
  const { type, amount } = action;
  if (type === 'PLUS') {
    return prevState + amount;
  } else if (type === 'Minus') {
    return prevState - amount;
  }
  return prevState;
}

function Counter({ initialValue }) {
  const [value, setvalue] = useState(10);

  const handlePlus = () => {
    const action = { type: 'PLUS', amount: 1 };
    setvalue((prevValue) => {
      return dispatch(action, prevValue);
    });
  };

  const handleMinus = () => {
    const action = { type: 'Minus', amount: 1 };
    setvalue((prevValue) => {
      return dispatch(action, prevValue);
    });
  };

  return (
    <>
      <h1>Counter</h1>
      {value}
      <hr />
      <button onClick={handlePlus}>증가</button>
      <button onClick={handleMinus}>감소</button>
    </>
  );
}

export default Counter;
