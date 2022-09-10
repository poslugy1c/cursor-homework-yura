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