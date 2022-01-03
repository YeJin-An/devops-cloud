import { useState } from "react";

function Counter({ initialValue }) {
  const [value, setvalue] = useState(10);
  return (
    <>
      <h1>Counter</h1>
      {value}
    </>
  );
}

export default Counter;
