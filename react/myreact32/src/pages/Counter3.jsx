import { useState } from 'react';

function Counter3({ name }) {
  const [value, setvalue] = useState(0);

  const handleplus = (prevValue) => {
    setvalue((prevValue) => prevValue + 1);
  };
  const handleMinus = (prevValue) => {
    setvalue((prevValue) => prevValue - 1);
  };
  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleplus}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  );
}

export default Counter3;
