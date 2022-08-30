
const getMaxDigit = (N) => {
    let toString = String(N);
    let MaxDigit = 0;

    for (i = 0; i < toString.length; i++) {
        ((+toString[i]) > MaxDigit) ? MaxDigit = +toString[i] : MaxDigit;
    }
    return MaxDigit
};

const myPow = (num, power) => {
    let result = num;
    for (i = 1; i < power; i++) {
        result = result * num;
    }
    return result
}

const nameFormat = (name) => {
    let result = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return result
}

const salaryCalculation = (salary) => {
    //Податок = 18% + 1.5% -> 19.5%
    const tax = 19.5;
    salary = salary - (salary * tax / 100);

    return salary
}

const getRandomNumber = (N, M) => {
    return Math.floor(Math.random() * (M - N) + N);
}

const countLetter = (letter, word) => {
    let result = 0;
    word = word.toLowerCase();
    for (i = 0; i < word.length; i++) {
        word[i] === letter ? result++ : result;
    }

    return result
}

let convertCurrency = (sumСurrency) => {

    let result;
    sumСurrency = sumСurrency.toUpperCase();

    if (sumСurrency.indexOf('UAH') != -1) {
        result = (+(sumСurrency.slice(0, sumСurrency.indexOf('UAH'))) / 25).toString() + '$';
    } else if (sumСurrency.indexOf('$') != -1) {
        // document.writeln(` !!! <br>`);
        result = (+(sumСurrency.slice(0, sumСurrency.indexOf('$'))) * 25).toString() + 'UAH';
    } else {
        return 'Помилка! Інші валюти не конвертуються'
    }

    return result
}

const getRandomPassword = (sizePass = 8) => {
    result = '';
    for (i = 0; i < sizePass; i++) {
        result = result + (Math.floor(Math.random() * 10)).toString();
    }
    return result
}

const deleteLetters = (letter, sentence) => {
    let result = '';
    sentence = sentence.toLowerCase();
    for (i = 0; i < sentence.length; i++) {
        sentence[i] !== letter ? result = result + sentence[i] : result;
    }

    return result
}

const isPalyndrom = (palyndrom) => {
    // palyndrom = palyndrom.toLowerCase();
    // palyndrom = palyndrom.split(' ').join('');
    // let check = '';
    // for (let i = palyndrom.length - 1; i >= 0; i--) {
    //     check += palyndrom[i];
    // }
    // return palyndrom == check;

    return (palyndrom.split(' ').join('').split('').join('').toLowerCase() === palyndrom.split(' ').join('').split('').reverse().join('').toLowerCase());

}

const deleteDuplicateLetter = (sentence) => {
    let result = '';
    sentence = sentence.toLowerCase();
    for (i = 0; i < sentence.length; i++) {
        sentence.indexOf(sentence[i]) === sentence.lastIndexOf(sentence[i]) ? result = result + sentence[i] : result;

        // console.log('_______________');
        // console.log(sentence[i]);
        // console.log(sentence.indexOf(sentence[i]));
        // console.log(sentence.lastIndexOf(sentence[i]));
        // console.log('_______________');
    }
    return result
}


let N = 1236;
document.writeln(`1. Найбільша цифра в числі ${N} є  ${getMaxDigit(N)} <br>`);

let num = 6;
let power = 3;
document.writeln(`2. Число ${num} в ступіні ${power} є  ${myPow(num, power)} <br>`);

let Name = 'юрІЙ';
document.writeln(`3. Форматувати ім'я ${Name} - ${nameFormat(Name)} <br>`);

let sal = 10000;
document.writeln(`4. Сума заробітної плати від ${sal} грн. з урахуванням податку 19.5% = ${salaryCalculation(sal)} грн. <br>`);

let Diap1 = 1;
let Diap2 = 10;
document.writeln(`5. Випадкове число в діапазоні від ${Diap1} до  ${Diap2} = ${getRandomNumber(Diap1, Diap2)}<br>`);

let letter = 'a';
let word = 'Astalavista';
document.writeln(`6. В слові ${word} літера  ${letter} повторюється  ${countLetter(letter, word)} разів <br>`);

let sumСurrency = '2500UAH';
document.writeln(`7. ${sumСurrency} = ${convertCurrency(sumСurrency)} <br>`);
sumСurrency = '2500uah';
document.writeln(`|   ${sumСurrency} = ${convertCurrency(sumСurrency)} <br>`);
sumСurrency = '150$';
document.writeln(`|   ${sumСurrency} = ${convertCurrency(sumСurrency)} <br>`);
sumСurrency = '700EUR';
document.writeln(`|   ${sumСurrency} = ${convertCurrency(sumСurrency)} <br>`);

let sizePass = 8;
document.writeln(`9. Випадковий пароль довжиною ${sizePass} - ${getRandomPassword()} <br>`);

let letterDel = 'a';
let sentenceDel = 'Astalavista bla bla blaaaa';
document.writeln(`11. Видаляємо з речення ${sentenceDel} літеру  ${letterDel} результат -  ${deleteLetters(letterDel, sentenceDel)} <br>`);

let Palyndrom = 'Я несу гусеня';
document.writeln(`12. Слово ${Palyndrom} палиндром  ->  ${isPalyndrom(Palyndrom)} <br>`);

let sentence = 'Бісквіт був дуже ніжним';
document.writeln(`13. Видаляємо з речення ${sentence} букви, які зустрічаються більше 1 разу результат -  ${deleteDuplicateLetter(sentence)} <br>`);

