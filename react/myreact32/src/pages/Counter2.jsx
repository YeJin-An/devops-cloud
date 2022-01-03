import { useState } from 'react';

function reducer(action, prevState) {
  const { type, amount } = action;
  if (type === 'plus') {
    return prevState + amount;
  } else if (type === 'minus') {
    return prevState - amount;
  }
}

function reducer_color(action, prevState) {
  const { CHANGE_COLOR, color } = action;
  if (CHANGE_COLOR === 'green') {
    return color;
  } else if (CHANGE_COLOR === 'blue') {
    return color;
  } else if (CHANGE_COLOR === 'red') {
    return color;
  }
}

function Counter2({ initvalue }) {
  const [value, setvalue] = useState(10);
  const [color, setcolor] = useState('white');

  const handleplus = (prevValue) => {
    const action = { type: 'plus', amount: 1 };
    setvalue((prevvalue) => {
      return reducer(action, prevvalue);
    });
  };

  const handleminus = (prevValue) => {
    const action = { type: 'minus', amount: 1 };
    setvalue((prevvalue) => {
      return reducer(action, prevvalue);
    });
  };
  const handleGreen = (prevColor) => {
    const action = { CHANGE_COLOR: 'green', color: 'green' };
    setcolor((prevColor) => {
      return reducer_color(action, prevColor);
    });
  };
  const handleBlue = (prevColor) => {
    const action = { CHANGE_COLOR: 'blue', color: 'blue' };
    setcolor((prevColor) => {
      return reducer_color(action, prevColor);
    });
  };
  const handleRed = (prevColor) => {
    const action = { CHANGE_COLOR: 'red', color: 'red' };
    setcolor((prevColor) => {
      return reducer_color(action, prevColor);
    });
  };
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

  return (
    <>
      <h1>Counter</h1>
      <div style={{ ...defaultStyle, backgroundColor: color }}>{value}</div>
      {value}
      {color}
      <hr />
      <button onClick={handleplus}>증가</button>
      <button onClick={handleminus}>감소</button>
      <button onClick={handleGreen} style={{ color: 'green' }}>
        green
      </button>
      <button onClick={handleBlue} style={{ color: 'blue' }}>
        blue
      </button>
      <button onClick={handleRed} style={{ color: 'red' }}>
        red
      </button>
    </>
  );
}

export default Counter2;
