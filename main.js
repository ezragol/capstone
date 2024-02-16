// audio redo...
function playAudio(id) {
    const audio = document.querySelector("#" + id);
    audio.play();
}

function pauseAudio(id) {
    const audio = document.querySelector("#" + id);
    audio.pause();
}