// Завдання 1
function* createIdGenerator() {
    let i = 1;
    while (true) {
        yield i++;
    };
};
const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

// Завдання 2
const increase = document.getElementById("inc");
const decrease = document.getElementById("dec");
const h1 = document.querySelector("h1");

function* newFontGenerator(size) {
    // console.log(size);
    let changeFont = yield;
    while (true) {
        changeFont = yield (changeFont === "up" ? size += 2 : size -= 2);
    };
};
const fontGenerator = newFontGenerator(14);

increase.addEventListener("click", () => {
    // console.log(h1.style.fontSize);
    if (!h1.style.fontSize) { fontGenerator.next() };
    h1.style.fontSize = `${fontGenerator.next("up").value}px`;
});
decrease.addEventListener("click", () => {
    if (!h1.style.fontSize) { fontGenerator.next() };
    h1.style.fontSize = `${fontGenerator.next("down").value}px`;
});