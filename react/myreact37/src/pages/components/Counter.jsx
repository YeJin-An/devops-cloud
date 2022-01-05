import { useState, useReducer } from 'react';
import './Counter.css';

function dispath(action, prevState) {
  const { type, amount } = action;
  if (type === 'plus') {
    return prevState + amount;
  } else if (type === 'minus') {
    return prevState - amount;
  }
}

function Counter() {
  const [value, setValue] = useReducer(dispath, 0);

  const handleplus = () => {
    const action = { type: 'plus', amount: 1 };
    setValue((prevValue) => {
      return dispath(action, prevValue);
    });
  };
  const handleminus = (e) => {
    e.preventDefault();
    const action = { type: 'minus', amount: 1 };
    setValue((prevValue) => {
      return dispath(action, prevValue);
    });
  };
  return (
    <>
      <div
        className="counter"
        style={{ backgroundColor: 'lightpink' }}
        onClick={handleplus}
        onContextMenu={handleminus}
      >
        {value}
      </div>
    </>
  );
}

export default Counter;

// 카운터를 클릭 시에 1씩 증가하도록 구현.
