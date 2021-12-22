const { melon_data: song_array } = require("./melon_data");


Array.prototype.min = function(key_fn){
    return this.reduce((acc, song) => {
        return key_fn(acc) < key_fn(song)? song : acc;
    });
};

const top_song = song_array
.filter(({srtist})=> srtist === "방탄소년단")
.min(song => song.rank); // .min(({rank})=> rank)

console.log(top_song);

// TODO: #13 방탄소년단의 곡 중에 좋아요 수가 가장 큰 곡명은?
// Array의 filter와 reduce를 활용해주세요.

// 1
song_array
.filter(({artist})=> artiat ==="방탄소년단")
.reduce((acc,song) => {
    if(!acc) return song_array;
    else if(acc.like < song.like) return song;
    else return acc;
}, null)

// 2
song_array
.filter(({artist})=> artiat ==="방탄소년단")
.reduce((acc,song) => {
    if(!acc || acc.like < song.like) return song;
    else return acc;
}, null)

 // 3 
song_array
.filter(({artist})=> artiat ==="방탄소년단")
.reduce((acc,song) => {
    return acc.like < song.like ? song : acc; });

// acc : null  곡1.like   => 곡 1
// acc :곡1(100) 곡2(200) => 곡 2