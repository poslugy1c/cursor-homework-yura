let wrapper = document.querySelector('.wrapper');
let blocks = document.querySelector('.blocks');

let a = [];
function createBlock() {
    for (let i = 0; i < 25; i++) {
        a[i] = document.createElement("div");
        a[i].classList.add("cell");
        blocks.append(a[i]);
    }
    return a;
}

function generateBlocks() {
    createBlock();
    a.forEach((element) => {
        element.style.background = getRandomBgColor();
    });
}

const getRandomBgColor = () => {
    return '#fff'
};

generateBlocks();

let div = document.createElement("div");
wrapper.append(div);
div.innerHTML = "<h1>Advanced</h1>";

let advanced = document.createElement("div");
advanced.classList.add('blocks');
wrapper.append(advanced);


function generateBlocksInterval() {
    for (let i = 0; i < 25; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.style = 'background-color:' + "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);

        setInterval(() => {
            div.style = 'background-color:' + "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
        }, 1000);

        advanced.append(div);
    }
}
generateBlocksInterval()