export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

//1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT - спеціаліст в якійсь з країн.

export function getMyTaxes(sum) {
    return this.tax * sum;
};

