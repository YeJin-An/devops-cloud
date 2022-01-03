import { useState } from 'react';

function Counter3({ name }) {
  const [state, setstate] = useState({ value: 0, color: 'lightpink' });
  const { value, color } = state;

  const handleplus = (prevValue) => {
    setstate((prevValue) => prevValue + 1);
  };
  const handleMinus = (prevValue) => {
    setstate((prevValue) => prevValue - 1);
  };
  return (
    <>
      <h1 style={{ backgroundColor: color }}>{value}</h1>
      <button onClick={handleplus}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  );
}

export default Counter3;
