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

function Number({ initialvalue }) {
  const [state, setState] = useState({ numbers: 7, colors: 'lightpink' });
  const { numbers, colors } = state;
  return (
    <>
      <div style={{ ...defaultStyle, margin: '30px', backgroundColor: colors }}>
        {numbers}
      </div>
      <div style={{ ...defaultStyle, margin: '30px', backgroundColor: colors }}>
        {numbers}
      </div>
      <div style={{ ...defaultStyle, margin: '30px', backgroundColor: colors }}>
        {numbers}
      </div>
      <div style={{ ...defaultStyle, margin: '30px', backgroundColor: colors }}>
        {numbers}
      </div>
      <div style={{ ...defaultStyle, margin: '30px', backgroundColor: colors }}>
        {numbers}
      </div>
      <div style={{ ...defaultStyle, margin: '30px', backgroundColor: colors }}>
        {numbers}
      </div>
      <div style={{ ...defaultStyle, margin: '30px', backgroundColor: colors }}>
        {numbers}
      </div>
    </>
  );
}

export default Number;
