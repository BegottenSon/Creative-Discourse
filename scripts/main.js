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

// HIGHLIGHTING KEYS ON LOAD
let keys = Array.from(document.getElementsByTagName("rect"));

function highlightPiano() {
  let time = 100
  for (let k = 0; k < 7; k++) {
    // 7 IS THE NUMBER OF WHITE KEYS EXCLUDING OUT BLACK KEYS
    const key = keys[k];
    key.style.animationName = "strobe"
    key.style.animationDelay = `${time}ms`;
    time += 80
  }
}
window.addEventListener('load', highlightPiano);

// SETTING TIMER
let countDownDate = new Date("Jul 30, 2021 11:00:00").getTime();
const countDownSection = document.getElementById("countdown");

let x = setInterval(function() {

  let now = new Date().getTime();
    
  let distance = countDownDate - now;
    
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  countDownSection.textContent = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    countDownSection.textContent = "MISSED THE EVENT";
    document.getElementById("countdownEnd").textContent = "Check Back For The Next Event";
  }
}, 1000);

//DISABLING BUY BUTTON WHEN COUNTDOWN IS OVER
let createButton = document.getElementById("checkout-button");

function buttonState() {
  let checker = setTimeout(function check() {
    if (countDownSection.textContent === "") {
      checker = setTimeout(check, 1000);
    } else if (countDownSection.textContent === "MISSED THE EVENT") {
      createButton.style.visibility = "hidden";
    } else {
      createButton.style.visibility = "visible";
    }
  }, 100);
};

window.addEventListener('load', buttonState);