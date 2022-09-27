let audio = new Audio();
let allDivs = document.querySelectorAll('div');
let buttons = document.querySelectorAll('.button');

audio.onended = function () {
    removeActive();
};

const audioPlay = (keyCode) => {
    let src = getSample(keyCode);
    if (src) {
        audio.src = src;
        audio.play();
    };
};

document.body.addEventListener('keydown', function (event) {
    removeActive();
    //console.log(event.code.slice(-1));
    let activeKey = document.getElementById(`key${event.code.slice(-1)}`);
    if (activeKey) {
        activeKey.classList.add('active');
        audioPlay("Key" + event.code.slice(-1));
    };
});

buttons.forEach((button) => {
    button.onclick = () => {
        removeActive();
        button.classList.add("active");
        audioPlay("Key" + button.id.slice(-1));
    };
});

function removeActive() {
    allDivs.forEach(div => div.classList.remove('active'));
};

function getSample(keyCode) {
    if (keyCode === "KeyA") {
        return "samples/droid1.mp3";
    };
    if (keyCode === "KeyS") {
        return "samples/droid2.mp3";
    };
    if (keyCode === "KeyD") {
        return "samples/scanner.mp3";
    };
    if (keyCode === "KeyF") {
        return "samples/fly.mp3";
    };
    if (keyCode === "KeyG") {
        return "samples/shuttle.mp3";
    };
    if (keyCode === "KeyH") {
        return "samples/alarm.mp3";
    };
    if (keyCode === "KeyJ") {
        return "samples/sync.mp3";
    };
};
