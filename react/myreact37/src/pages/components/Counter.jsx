import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="Counter" style={{ backgroundColor: 'lightpink' }}>
        {value}
      </div>
    </>
  );
}

export default Counter;
