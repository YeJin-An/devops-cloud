import { useState } from 'react';

function dispath(action, prevState) {
  const { type, amount } = action;
  if (type === 'plus') {
    return prevState + amount;
  } else if (type === 'minus') {
    return prevState - amount;
  }
}

function Counter2({ initvalue }) {
  const [value, setvalue] = useState(10);

  const handleplus = (prevValue) => {
    const action = { type: 'plus', amount: 1 };
    setvalue((prevvalue) => {
      return dispath(action, prevvalue);
    });
  };

  const handleminus = (prevValue) => {
    const action = { type: 'minus', amount: 1 };
    setvalue((prevvalue) => {
      return dispath(action, prevvalue);
    });
  };

  return (
    <>
      <h1>Counter</h1>
      {value}
      <hr />
      <button onClick={handleplus}>증가</button>
      <button onClick={handleminus}>감소</button>
    </>
  );
}

export default Counter2;
