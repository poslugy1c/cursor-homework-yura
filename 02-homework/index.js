
let N, M, missEven, result;

do {
    N = Number(prompt("Введіть число N", 0));
} while (!!N === false || (N ^ 0) !== N);
// console.log({ N });

do {
    M = Number(prompt("Введіть число M", 0));
} while (!!M === false || (M ^ 0) !== M);
// console.log({ M });

missEven = confirm("Пропускати парні?");
// console.log(typeof missEven);
// console.log({ missEven });

for (let i = N; i <= M; i++) {
    !result ? result = 0 : result;
    missEven ? ((!(i % 2 == 0)) ? (result = result + i) : 0) : (result = result + i);
}

console.log({ result });