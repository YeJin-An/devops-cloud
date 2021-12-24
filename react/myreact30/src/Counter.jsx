import { useState } from 'react';

function Counter({ initial }) {
  // 속성값을 초기값으로 참조하여 상탯값 valude를 생성
  const [value, setValue] = useState(initial);

  const handleClick = () => {
    setValue(value + 1);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setValue(value - 1);
  };

  return (
    <div
      style={{ userSelect: 'none', curcsor: 'pointer' }}
      oneClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      {value}
    </div>
  );
}
export default Counter;
