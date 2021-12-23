import { useState } from 'react';

// 리액트 컴포넌트 생성
function Counter() {
  const [value, setValue] = useState(0); // 참조할 수 있도록 한다.
  // 벨류에 대한 설정하는 set벨류로 선택 값 지정
  const [color, setColor] = useState('skyblue');

  // 새로운 정의 함수
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
      }}
      onClick={handleClick}
    >
      <span>{value}</span>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1> 안녕 리액트 </h1>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
