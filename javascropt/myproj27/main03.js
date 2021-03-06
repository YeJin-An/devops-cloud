const { melon_data: song_array } = require("./melon_data");


// TODO: #3 좋아요수 top10을 출력
// Array의 sort 활용
// 출력포맷 : `[좋아요수] 곡명 가수명`

// 좋아요 수에 대한 내림차순 정렬 -> 처음 10개
const like_top10 = song_array
    .sort(
        (song1, song2) => song2.like - song1.like,
    )
    .slice(0, 10);

// 좋아요 수에 대한 오름차순 정렬 -> 마지막 10개 -> 뒤집음

for (const [index, { like, title, artist }] of like_top10.entries()) {
    console.log(`${index + 1} [${like}] ${title} by ${artist}`);
}






// const top10_song_array = song_array.sort(
//     (song1, song2) => song2.like - song1.like
// ).slice(0, 10);


// for (const [index, song] of top10_song_array.entries()) {
//     const rank = index + 1;
//     console.log(`${rank} [${song.like}] ${song.title} by ${song.artist}`);
// }
