import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [value, setValue] = useState(0);

  const handleplus = () => {
    setValue(value + 1);
  };
  const handleminus = () => {
    setValue(value - 1);
  };
  return (
    <>
      <div className="counter" style={{ backgroundColor: 'lightpink' }}>
        {value}
      </div>
      <button onClick={handleplus}>+1</button>
      <button onClick={handleminus}>-1</button>
    </>
  );
}

export default Counter;

// 카운터를 클릭 시에 1씩 증가하도록 구현.
