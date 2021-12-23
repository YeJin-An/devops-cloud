// 전역변수 : 바뀌지 않는 데이터

import { useState } from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import { Button as AntdButton } from 'antd';
import InitalSongList from './data/melon_data.json';
import './MelonTop10.css';

//  js + json ==> <ul>[create]<li>
function MelonTop10() {
  const [songList, setSongList] = useState([]);

  const handleClick = () => {
    setSongList(InitalSongList);
  };

  return (
    <div>
      <h2>melon top10</h2>

      <BootstrapButton variant="success" onClick={handleClick}>
        로딩
      </BootstrapButton>
      <AntdButton type="primary" onClick={handleClick}>
        로딩
      </AntdButton>

      <ul className="songList">
        {songList.map((song) => {
          return (
            <li key={song.song_no}>
              {song.rank}
              {song.title} [by] {song.artist} {song.like}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MelonTop10;
