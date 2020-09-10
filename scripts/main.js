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
