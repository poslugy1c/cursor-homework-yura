let wrapper = document.querySelector('.wrapper');
let blocks = document.querySelector('.blocks');

// Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір
function generateBlocks() {
    const getRandomColor = () => {
        return `background-color: #${Math.random().toString(16).substring(2, 8)}`;
    };

    for (let i = 0; i < 25; i++) {
        const block = document.createElement('div');
        block.classList.add('cell');
        block.style = getRandomColor();
        blocks.append(block);
    };
};

generateBlocks();

let div = document.createElement("div");
wrapper.append(div);
div.innerHTML = "<h1>Advanced</h1>";

let advanced = document.createElement("div");
advanced.classList.add('blocks');
wrapper.append(advanced);

// Advanced зробіть так, щоб квадрати змінювали колір раз на секунду
const generateBlocksInterval = () => {
    const getRandomColor = () => {
        return `background-color: #${Math.random().toString(16).substring(2, 8)}`;
    };

    for (let i = 0; i < 25; i++) {
        const block = document.createElement('div');
        block.classList.add('cell');
        block.style = getRandomColor();

        setInterval(() => {
            block.style = getRandomColor();
        }, 1000);

        advanced.append(block);
    }
}
generateBlocksInterval();