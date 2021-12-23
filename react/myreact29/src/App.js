import { useState } from 'react';

// 리액트 컴포넌트 생성
function Counter() {
  const [value, setValue] = useState(0); // 참조할 수 있도록 한다.
  // 벨류에 대한 설정하는 set벨류로 선택 값 지정
  const [color, setColor] = useState('skyblue');

  // 새로운 정의 함수
  const handleClick = () => {
    console.log(`clicked`);
    setValue(value + 1);
    setColor(value % 2 === 0 ? 'lightgreen' : 'lightpink');
  };
  return (
    <div style={{ backgroundColor: color }}>
      카운더: {value}
      <button onClick={handleClick}>증가</button>
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
