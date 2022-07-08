/* ------------- para reproducción de video ---------------- */

let video = document.querySelector("video");
let botonPlay = document.getElementById("play");
let botonPause = document.getElementById("pause");


var v = document.getElementById("miVideo");
console.log(v.duration);


/*(no puedo lograr que al cargar la pagina, se visualice el tiempo de duración del video, pero si lo puedo ver por consola, como indico justo 2 líneas de código arriba)*/

botonPlay.addEventListener("click",()=>{
    video.play();
});
botonPause.addEventListener("click",()=>{
    video.pause();
});
