
let mySong = document.getElementById("mySong");
let play = document.getElementById("play");

play.onclick = function() {
    if(mySong.paused) {
        mySong.play();
        play.src = "imgs/b.png"
    } else {
        mySong.pause();
        play.src = "imgs/d.png"
    }
}