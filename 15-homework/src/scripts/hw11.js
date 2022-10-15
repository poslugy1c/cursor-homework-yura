
import keyA from "../assets/samples/droid1.mp3";
import keyS from "../assets/samples/droid2.mp3";
import keyD from "../assets/samples/scanner.mp3";
import keyF from "../assets/samples/fly.mp3";
import keyG from "../assets/samples/shuttle.mp3";
import keyH from "../assets/samples/alarm.mp3";
import keyJ from "../assets/samples/sync.mp3";

export const eventsFunction = () => {

  let audio = new Audio();
  let allDivs = document.querySelectorAll('div');
  let buttons = document.querySelectorAll('.button');

  audio.onended = function () {
    removeActive();
  };

  const audioPlay = (keyCode) => {
    let src = getSample(keyCode);
    // console.log(keyCode);
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
    allDivs = document.querySelectorAll('div');
    allDivs.forEach(div => div.classList.remove('active'));
  };

  function getSample(keyCode) {
    if (keyCode === "KeyA") {
      return keyA;
    };
    if (keyCode === "KeyS") {
      return keyS;
    };
    if (keyCode === "KeyD") {
      return keyD;
    };
    if (keyCode === "KeyF") {
      return keyF;
    };
    if (keyCode === "KeyG") {
      return keyG;
    };
    if (keyCode === "KeyH") {
      return keyH;
    };
    if (keyCode === "KeyJ") {
      return keyJ;
    };
  };

};
