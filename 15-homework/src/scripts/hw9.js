
// Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір
export function generateBlocks() {
    let blocks = document.querySelector('.blocks');
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


