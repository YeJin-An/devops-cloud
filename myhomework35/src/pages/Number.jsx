import { useState, usestate } from 'react';

const defaultStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50px',
  lineHeight: '100px',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: '3rem',
  userSelect: 'none',
};

function dispatch(action, prevState) {
  const { type, numbers } = action;
  if (type === 'GENERATE_NUMBERS') {
    return prevState + numbers;
  } else if (type === 'SHUFFLE_NUMBERS') {
    return prevState + numbers;
  } else if (type === 'SHUFFLE_COLORS') {
    return prevState + numbers;
  }
}

function Number({ initialvalue }) {
  const [state, setState] = useState({
    numbers: [0, 0, 0, 0, 0, 0, 0],
    colors: [
      '#1B62BF',
      '#1755A6',
      '#37A647',
      '#F29F05',
      '#F23838',
      'purple',
      'pink',
    ],
  });
  const { numbers, colors } = state;

  const GENERATE_NUMBER = (prevValue) => {};
  const SHUFFLE_NUMBERS = (prevValue) => {};
  const SHUFFLE_COLORS = (prevValue) => {};
  return (
    <>
      <h2 style={{ margin: '30px' }}>useState 버진</h2>
      <div
        style={{ ...defaultStyle, margin: '30px', backgroundColor: colors[0] }}
      >
        {numbers[0]}
      </div>
      <div
        style={{ ...defaultStyle, margin: '30px', backgroundColor: colors[1] }}
      >
        {numbers[1]}
      </div>
      <div
        style={{ ...defaultStyle, margin: '30px', backgroundColor: colors[2] }}
      >
        {numbers[2]}
      </div>
      <div
        style={{ ...defaultStyle, margin: '30px', backgroundColor: colors[3] }}
      >
        {numbers[3]}
      </div>
      <div
        style={{ ...defaultStyle, margin: '30px', backgroundColor: colors[4] }}
      >
        {numbers[4]}
      </div>
      <div
        style={{ ...defaultStyle, margin: '30px', backgroundColor: colors[5] }}
      >
        {numbers[5]}
      </div>
      <div
        style={{ ...defaultStyle, margin: '30px', backgroundColor: colors[6] }}
      >
        {numbers[6]}
      </div>
      <hr />
      <button onClick={GENERATE_NUMBER}>GENERATE_NUMBERS </button>
      <button onClick={SHUFFLE_NUMBERS}>SHUFFLE_NUMBERS </button>
      <button onClick={SHUFFLE_COLORS}>SHUFFLE_COLORS </button>
    </>
  );
}

export default Number;
