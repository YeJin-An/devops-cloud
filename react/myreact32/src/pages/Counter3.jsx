import { useState, createContext } from 'react';

function reducer(action, prevState) {
  const { type, amount } = action;
  if (type === 'plus') {
    return prevState + amount;
  } else if (type === 'Minus') {
    return prevState - amount;
  }
}

// const ColorContext = createContext({ color: 'blue' });

function Counter3({ name }) {
  const [value, setvalue] = useState(0);
  const [color, setcolor] = useState('lightgreen');
  const [textColor, setTextColor] = useState('white');
  const colors = ['red', 'green', 'blue'];

  const handleplus = (prevValue) => {
    const action = { type: 'plus', amount: 1 };
    setcolor({ color: 'blue' });
    setvalue((prevValue) => {
      return reducer(action, prevValue);
    });
  };
  const handleMinus = (prevValue) => {
    const action = { type: 'Minus', amount: 1 };
    setcolor({ color: 'green' });
    setvalue((prevValue) => {
      return reducer(action, prevValue);
    });
  };
  return (
    <div>
      <h1>Counter3</h1>
      <div style={{ ...defaultStyle, backgroundColor: color }}>{value}</div>
      <hr />
      <button
        onClick={handleplus}
        style={{ background: color, color: textColor }}
      >
        +
      </button>
      <button
        onClick={handleMinus}
        style={{ background: color, color: textColor }}
      >
        -
      </button>
      <button
        onClick={() => {
          setcolor('lightblue');
          setTextColor('black');
        }}
        style={{ background: color, color: textColor }}
      >
        파랑
      </button>
      <button
        onClick={() => {
          setcolor('lightpink');
          setTextColor('black');
        }}
        style={{ background: color, color: textColor }}
      >
        핑크
      </button>
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
