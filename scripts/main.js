const cKey = document.getElementById("cKey");
const dKey = document.getElementById("dKey");
const eKey = document.getElementById("eKey");
const fKey = document.getElementById("fKey");
const gKey = document.getElementById("gKey");
const piano = [
    {key: "cPiano", audio: cKey},
    {key: "dPiano", audio: dKey},
    {key: "ePiano", audio: eKey},
    {key: "fPiano", audio: fKey},
    {key: "gPiano", audio: gKey},
];

function playSong() {
    const keyPressed = event.target.id;
    const songFound = piano.find(song => song.key === keyPressed);
    const song = songFound.audio;
    function pauseSong() {
        song.pause();
        song.currentTime = 0;
    }    
    return song.paused ? song.play() : pauseSong();
}

window.addEventListener("play", function(evt) { 
    if(window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target) 
    { window.$_currentlyPlaying.pause(); } window.$_currentlyPlaying = evt.target; 
}, true);

// SETTING TIMER
let countDownDate = new Date("Nov 21, 2020 11:00:00").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();
    
  let distance = countDownDate - now;
    
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdown").textContent = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").textContent = "MISSED THE EVENT";
    document.getElementById("countdownEnd").textContent = "Check Back For The Next Event";
  }
}, 1000);
