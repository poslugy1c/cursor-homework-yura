
// 1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
const getRandomArray = (length, min, max) => {
    const arr = new Array(length).fill(0);

    arr.forEach((cur, i) => {
        // console.log(i);
        arr[i] = Number(Math.floor(Math.random() * max + min));
    });

    return arr;
};

document.writeln(`1. масив випадкових цілих чисел - ${getRandomArray(15, 1, 100)} <br>`);

// 2.Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 
const getModa = (...numbers) => {
    return numbers.filter(el => Number.isInteger(el)).sort(function (a, b) {
        let aFreq = 0, bFreq = 0;
        if (a === b) {
            return 0;
        }
        numbers.forEach((cur, i) => {
            if (numbers[i] == a) {
                aFreq++;
            }
            if (numbers[i] == b) {
                bFreq++;
            }
        });

        return bFreq - aFreq;
    })[0];
};

document.writeln(`2. getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`);

// 3.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getAverage = (...numbers) => {
    return numbers.filter(el => Number.isInteger(el)).reduce((acc, el) => acc + el, 0) / numbers.length;
};

document.writeln(`3. getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –>  ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`);

// 4.Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getMedian = (...numbers) => {
    newNumbers = numbers.filter(el => Number.isInteger(el)).sort((a, b) => a - b);
    if (newNumbers.length % 2) {
        return newNumbers[Math.floor(newNumbers.length / 2)];
    } else {
        return (newNumbers[newNumbers.length / 2] + newNumbers[newNumbers.length / 2 - 1]) / 2;
    }
};

document.writeln(`4. getMedian(1, 2, 3, 4) –>  ${getMedian(1, 2, 3, 4)} <br>`);

// 5.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
const filterEvenNumbers = (...numbers) => {
    return numbers.filter(el => el % 2);
};

document.writeln(`5. filterEvenNumbers(1, 2, 3, 4, 5, 6) –>  ${filterEvenNumbers(1, 2, 3, 4, 5, 6)} <br>`);

// 6.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
const countPositiveNumbers = (...numbers) => {
    return numbers.reduce((acc, curr) => (curr > 0) ? acc += 1 : acc, 0);
};

document.writeln(`6. countPositiveNumbers(1, -2, 3, -4, -5, 6) –>  ${countPositiveNumbers(1, -2, 3, -4, -5, 6)} <br>`);

// 7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
const getDividedByFive = (...numbers) => {
    return numbers.filter(el => !(el % 5));
};

document.writeln(`7. getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –>  ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>`);

// 8.Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
// При вирішенні цього завдання необхідно розбити масив
// на слова за допомогою функції.split(" "), після чого масив необхідно буде склеїти.join(" ")
// Погані слова: shit та fuck.Передбачте можливість розширювати список цих слів у майбутньому.
const replaceBadWords = (string) => {
    let arrWords = string.split(' ');
    let arrBadWords = ['shit', 'fuck'];

    arrBadWords.forEach((cur) => {
        arrWords.forEach((cur2, j) => { arrWords[j] = cur2.replace(cur, "****") });
    });

    return arrWords.join(" ");
};

document.writeln(`8. replaceBadWords("Are you fucking kidding?") –>  ${replaceBadWords("Are you fucking kidding?")} <br>`);
document.writeln(`   replaceBadWords("Holy shit!") –>  ${replaceBadWords("Holy shit!")} <br>`);
document.writeln(`   replaceBadWords("It's bullshit!") –>  ${replaceBadWords("It's bullshit!")} <br>`);