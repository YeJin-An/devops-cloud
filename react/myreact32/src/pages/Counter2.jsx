import { useState } from 'react';
import reactDom from 'react-dom';

function dispath(action, prevState) {
  const { type, amount } = action;
  if (type === 'plus') {
    return prevState + amount;
  } else if (type === 'minus') {
    return prevState - amount;
  }
}

function dispath_color(action, prevState) {
  const { type, color } = action;
  if (type === 'green') {
    return color;
  } else if (type === 'blue') {
    return color;
  } else if (type === 'red') {
    return color;
  }
}

function Counter2({ initvalue }) {
  const [value, setvalue] = useState(10);
  const [color, setcolor] = useState('white');

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
  const handleGreen = (prevColor) => {
    const action = { type: 'green', color: 'green' };
    setcolor((prevColor) => {
      return dispath_color(action, prevColor);
    });
  };
  const handleBlue = (prevColor) => {
    const action = { type: 'blue', color: 'blue' };
    setcolor((prevColor) => {
      return dispath_color(action, prevColor);
    });
  };
  const handleRed = (prevColor) => {
    const action = { type: 'red', color: 'red' };
    setcolor((prevColor) => {
      return dispath_color(action, prevColor);
    });
  };

  return (
    <>
      <h1>Counter</h1>
      {value}
      {color}
      <hr />
      <button onClick={handleplus}>증가</button>
      <button onClick={handleminus}>감소</button>
      <button onClick={handleGreen}>green</button>
      <button onClick={handleBlue}>blue</button>
      <button onClick={handleRed}>red</button>
    </>
  );
}

export default Counter2;
