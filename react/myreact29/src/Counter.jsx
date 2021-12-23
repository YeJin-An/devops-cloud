import { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);

  const [color, setColor] = useState('skyblue');

  const handleClick = () => {
    console.log(`클릭`);
    setValue(value + 1);
    setColor(value % 2 === 0 ? 'lightgreen' : 'lightpink');
  };
  return (
    <div
      style={{
        backgroundColor: color,
        width: 35,
        height: 40,
        display: 'inline-block',
        margin: 15,
        borderRadius: 50,
        textAlign: 'center',
        userSelect: 'none',

        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <span>{value}</span>
    </div>
  );
}

export default Counter;
