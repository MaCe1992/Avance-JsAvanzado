/* ------------- para reproducción de video ---------------- */

let video = document.querySelector("video");

document.getElementById("duracionVideo").innerHTML=`Duración video: ${video.duration.toFixed(2)}`

let botonPlay = document.getElementById("play");
let botonPause = document.getElementById("pause");

botonPlay.addEventListener("click",()=>{
    video.play();
});
botonPause.addEventListener("click",()=>{
    video.pause();
});
