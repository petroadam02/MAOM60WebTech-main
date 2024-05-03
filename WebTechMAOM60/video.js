function playVideo() {
    var video = document.getElementById("myVideo");
    video.play();
}

function pauseVideo() {
    var video = document.getElementById("myVideo");
    video.pause();
}

function volumeDown() {
    var video = document.getElementById("myVideo");
    if (video.volume >= 0.1) {
        video.volume -= 0.1;
    }
}

function volumeUp() {
    var video = document.getElementById("myVideo");
    if (video.volume <= 0.9) {
        video.volume += 0.1;
    }
}