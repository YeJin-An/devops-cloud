const { melon_data: song_array } = require("./melon_data");


// TODO: #8 곡명에 "사랑"이 포함된 곡들의 곡명 배열을 구성해주세요.
// Array의 filter와 map 활용
// 출력포맷 : [곡명1, 곡명2, 곡명3]

song_array
.filter( ({title}) => song.title.indexOf("사랑")
.map( ({title}) => title )
);

// polyfill
// 하위 호환성을 보장해주는 라이브러리