import { useState } from "react";

function PageLotto() {
  const [state, setState] = useState([]);

  const setStateWithArray = () => {
    const LottoList = [];
    [10, 11, 12, 13, 14, 15, 16, 17].forEach((value) => {
      LottoList.push(value);
    });
    setState(LottoList);
  };

  return (
    <div className="wrapper">
      <div>
        {state?.map((value, idx) => (
          <div key={idx}>{value}</div>
        ))}
      </div>
      <button onClick={() => setStateWithArray()}>예지</button>
    </div>
  );
}

export default PageLotto;
