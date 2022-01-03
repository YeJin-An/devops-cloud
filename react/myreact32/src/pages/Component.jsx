import React, { useState } from 'react';

function Component({ initialValue }) {
  const [value, setvalue] = useState('컴포넌트');
  const [color, setcolor] = useState('pink');

  const handleOne = (prevValue) => {
    setvalue((prevValue) => (prevValue = 0));
    setcolor((prevValue) => (prevValue = 'red'));
  };
  const handlePlus = (prevValue) => {
    setvalue((prevValue) => prevValue + 1);
    setcolor((prevValue) => (prevValue = 'blue'));
  };
  const handleMinus = (prevValue) => {
    setvalue((prevValue) => prevValue - 1);
    setcolor((prevValue) => (prevValue = 'green'));
  };

  const defaultStyle = {};

  return (
    <div>
      <h1 style={{ ...defaultStyle, backgroundColor: color }}>{value}</h1>
      <button onClick={handleOne}>AC</button>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default Component;
