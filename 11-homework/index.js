let audio = new Audio();
let allDivs = document.querySelectorAll('div');
let buttons = document.querySelectorAll('.button');

document.body.addEventListener('keydown', function (event) {
    removeActive();
    //console.log(event.code.slice(-1));
    let activeKey = document.getElementById(`key${event.code.slice(-1)}`);
    if (activeKey) {
        activeKey.classList.add('active');
        let src = getSample("Key" + event.code.slice(-1));
        if (src) {
            audio.src = src;
            audio.play();
        };
    };
});

buttons.forEach((button) => {
    button.onclick = () => {
        removeActive();
        button.classList.add("active");
        // console.log(button.id);
        let src = getSample("Key" + button.id.slice(-1));
        if (src) {
            audio.src = src;
            audio.play();
        };
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
