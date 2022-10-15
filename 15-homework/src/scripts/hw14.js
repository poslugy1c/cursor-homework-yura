
// Завдання 2

function* newFontGenerator(size) {
    // console.log(size);
    let changeFont = yield;
    while (true) {
        changeFont = yield (changeFont === "up" ? size += 2 : size -= 2);
    };
};
export const fontGenerator = newFontGenerator(26);

export const addListeners = () => {
    const increase = document.getElementById("inc");
    const decrease = document.getElementById("dec");
    const text = document.getElementById("text");

    increase.addEventListener("click", () => {
        if (!text.style.fontSize) { fontGenerator.next() };
        text.style.fontSize = `${fontGenerator.next("up").value}px`;
    });
    decrease.addEventListener("click", () => {
        if (!text.style.fontSize) { fontGenerator.next() };
        text.style.fontSize = `${fontGenerator.next("down").value}px`;
    });
}