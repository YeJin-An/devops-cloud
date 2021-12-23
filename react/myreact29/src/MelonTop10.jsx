// 전역변수 : 바뀌지 않는 데이터

import { useState } from 'react';
import InitalSongList from './data/melon_data.json';

//  js + json ==> <ul>[create]<li>
function MelonTop10() {
  const [songList, setSongList] = useState([]);

  const handleClick = () => {
    setSongList(InitalSongList);
  };

  return (
    <div>
      <h2>melon top10</h2>
      <button onClick={handleClick}>로딩</button>
      <ul>
        {songList.map((song) => {
          return <li>{song.title}</li>;
        })}
        <li> title </li>
      </ul>
    </div>
  );
}

export default MelonTop10;
