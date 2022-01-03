import { useState } from 'react';

function Counter({ initialValue }) {
  const [value, setvalue] = useState(10);

  const handleClick = (prevValue) => {
    setvalue((prevValue) => prevValue + 1);
  };
  return (
    <>
      <h1>Counter</h1>
      {value}
      <hr />
      <button onClick={handleClick}>+</button>
    </>
  );
}

export default Counter;
