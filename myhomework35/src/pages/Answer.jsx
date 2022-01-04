import { useState } from 'react';

function Answer({ title }) {
  const [state, usestate] = useState(1);
  return (
    <>
      {title && <h2>{title}</h2>}
      <hr />
      {state}
    </>
  );
}

export default Answer;
