import "../styles/styles.css";
import "../styles/hw10.css";
import "../styles/hw11.css";
import { myPow } from "../scripts/hw3.js";
import { getPairs } from "../scripts/hw4.js";
import { getRandomArray } from "../scripts/hw5.js";
import { students } from "../scripts/hw6.js";
import { getSubjects } from "../scripts/hw6.js";
import { ukraine } from "../scripts/hw7.js";
import { getMyTaxes } from "../scripts/hw7.js";
import { student } from "../scripts/hw8.js";
import { generateBlocks } from "../scripts/hw9.js";
import { eventsFunction } from "../scripts/hw11.js";

let container = document.querySelector('.container');

let addHW = (elem = container, className = 'item') => {
    let div = document.createElement('div');
    elem.append(div);
    div.classList.add(className);
    return div;
};

//hw3
addHW().innerHTML = `<h2>Homework 3</h2> Число 5 в ступіні 3: є  ${myPow(5, 3)}`;
//hw4
const pairs = getPairs(["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]);
addHW().innerHTML = `<h2>Homework 4</h2> Розділіть студентів на пари(хлопець + дівчина):  ${pairs}`;
//hw5
addHW().innerHTML = (`<h2>Homework 5</h2> масив випадкових цілих чисел - ${getRandomArray(15, 1, 100)}`);
//hw6
addHW().innerHTML = (`<h2>Homework 6</h2> список предметів студента ${students[0].name} - ${getSubjects(students[0])}`);
//hw7
addHW().innerHTML = (`<h2>Homework 7</h2> Сума податків IT - спеціаліста в Україні - ${getMyTaxes.call(ukraine, 20000)}`);
//hw8
addHW().innerHTML = (`<h2>Homework 8</h2> ${student.getInfo()}`);
//hw9
let hw9 = addHW();
hw9.innerHTML = (`<h2>Homework 9</h2> `)
addHW(hw9, 'blocks');
generateBlocks();
//hw11
let hw11 = addHW();
hw11.innerHTML = (`<h2>Homework 11</h2> 
    <div class="container11">
      <div class="button" id="keyA">
        <div class="textKey">A</div>
        <div class="textSample">Droid</div>
      </div>
      <div class="button" id="keyS">
        <div class="textKey">S</div>
        <div class="textSample">Droid2</div>
      </div>
      <div class="button" id="keyD">
        <div class="textKey">D</div>
        <div class="textSample">Test</div>
      </div>
      <div class="button" id="keyF">
        <div class="textKey">F</div>
        <div class="textSample">Fly</div>
      </div>
      <div class="button" id="keyG">
        <div class="textKey">G</div>
        <div class="textSample">Shuttle</div>
      </div>
      <div class="button" id="keyH">
        <div class="textKey">H</div>
        <div class="textSample">Alarm</div>
      </div>
      <div class="button" id="keyJ">
        <div class="textKey">J</div>
        <div class="textSample">Sync</div>
      </div>
    </div>
`);
eventsFunction();


