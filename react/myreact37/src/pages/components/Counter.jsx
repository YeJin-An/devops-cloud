import { useState } from 'react';
import './Counter.css';

function reducer(action, prevState) {
  const { type, amount } = action;
  if (type === 'plus') {
    return prevState + amount;
  } else if (type === 'minus') {
    return prevState + amount;
  }
}

function Counter() {
  const [value, setValue] = useState(0);

  const handleplus = () => {
    setValue((prevValue) => prevValue + 1);
  };
  const handleminus = (e) => {
    e.preventDefault();
    setValue((prevValue) => prevValue - 1);
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
