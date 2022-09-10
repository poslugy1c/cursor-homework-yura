const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT - спеціаліст в якійсь з країн.

function getMyTaxes(sum) {
    return this.tax * sum;
};

document.writeln(`1. Сума податків IT - спеціаліста в Україні - ${getMyTaxes.call(ukraine, 20000)} <br>`);
document.writeln(` Сума податків IT - спеціаліста в Латвії - ${getMyTaxes.call(latvia, 20000)} <br>`);
document.writeln(` Сума податків IT - спеціаліста в Літві - ${getMyTaxes.call(litva, 20000)} <br>`);

//2. Створіть функцію яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary)
function getMiddleTaxes() {
    return this.tax * this.middleSalary;
};

document.writeln(`2. В Україні IT-спеціалісти у середньому податків платять  - ${getMiddleTaxes.call(ukraine)} <br>`);
document.writeln(` В Латвії IT-спеціалісти у середньому податків платять  - ${getMiddleTaxes.call(latvia)} <br>`);
document.writeln(` В Літві IT-спеціалісти у середньому податків платять  - ${getMiddleTaxes.call(litva)} <br>`);

//3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies)
function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
};

document.writeln(`3. В Україні IT-спеціалісти платять всього податків платять - ${getTotalTaxes.call(ukraine)} <br>`);
document.writeln(` В Латвії IT-спеціалісти платять всього податків платять - ${getTotalTaxes.call(latvia)} <br>`);
document.writeln(` В Літві IT-спеціалісти платять всього податків  - ${getTotalTaxes.call(litva)} <br>`);

/*4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
 Значення salary – генеруйте випадковим чином у діапазоні 1500 - 2000.
taxes – розраховується в залежності від вибраної країни та значення salary. */

function getMySalary() {
    let salary = Math.floor(Math.random() * (2000 - 1500) + 1500).toFixed();
    let taxes = Math.round(salary * this.tax);
    let profit = salary - taxes;

    // Варіант в середені функції -> будуть виводитись однакові данні
    // let logMySalary = () => {
    //     console.log({ salary, taxes, profit })
    // };
    // setInterval(logMySalary, 10000);

    console.log({ salary, taxes, profit });
};

// getMySalary.call(ukraine);
// getMySalary.call(latvia);
// getMySalary.call(litva);

setInterval(() => getMySalary.call(ukraine), 10000);
setInterval(() => getMySalary.call(latvia), 10000);
setInterval(() => getMySalary.call(litva), 10000);




