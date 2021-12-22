const { melon_data: song_array } = require("./melon_data");


// TODO: #12 2곡 이상 랭크된 가수는 총 몇 팀인가요?
// reduce, Set

// [2,10,3,] __ boolean 타입을 얻는다.

// 1
song_array
.reduce((acc,{artist})=> {
    if (!acc[artist]) acc[artist] = 0;
    acc[artist] += 1;
},{});

// 2 node 14
const artist_count_object = song_array
.reduce((acc,{artist})=> {
    acc[artist] = acc[artist] || 0;
    acc[artist] += 1;
    return acc;
},{});

// 3 node 16
const artist_count_object = song_array
    .reduce((acc, { artist }) => {
        acc[artist] ||= 0;
        acc[artist] += 1;
        return acc;
    }, {});

// 4
const total = Object.values(artist_count_object)
    .filter(count => count >= 2)
    .length;


Object.value(artist_count_object)
.filter(number => number >=2)
.length;
