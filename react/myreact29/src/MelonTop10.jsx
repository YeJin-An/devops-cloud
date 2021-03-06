// 전역변수 : 바뀌지 않는 데이터

import { useState } from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import { Button as AntdButton } from 'antd';
import Axios from 'axios';
import InitalSongList from './data/melon_data.json';
import './MelonTop10.css';

//  js + json ==> <ul>[create]<li>
function MelonTop10() {
  const [songList, setSongList] = useState([]);

  const handleClick1 = () => {
    setSongList(InitalSongList);
  };

  const handleClick2 = () => {
    const url = 'https://antigravity-daejeon-2021.herokuapp.com/api/melon/';
    Axios.get(url)
      .then((response) => {
        const { data } = response;
        setSongList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClick3 = () => {
    setSongList([]);
  };

  return (
    <div>
      <h2>melon top10</h2>

      <BootstrapButton variant="success" onClick={handleClick1}>
        파일 로딩
      </BootstrapButton>
      <AntdButton type="primary" onClick={handleClick2}>
        서버 로딩
      </AntdButton>
      <AntdButton type="primary" onClick={handleClick3}>
        클리어
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
