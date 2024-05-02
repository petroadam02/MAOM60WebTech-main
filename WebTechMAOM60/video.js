document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");
    var playPauseBtn = document.getElementById("playPauseBtn");
    var muteBtn = document.getElementById("muteBtn");
    var volumeRange = document.getElementById("volumeRange");

    playPauseBtn.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = "Megállítás";
        } else {
            video.pause();
            playPauseBtn.innerHTML = "Lejátszás";
        }
    });

    muteBtn.addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            muteBtn.innerHTML = "Némítás";
        } else {
            video.muted = true;
            muteBtn.innerHTML = "Hang bekapcsolása";
        }
    });

    volumeRange.addEventListener("input", function() {
        video.volume = volumeRange.value / 100;
    });
});
