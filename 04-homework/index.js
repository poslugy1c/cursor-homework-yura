const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина)
const getPairs = (students) => {

    let resArray = [];
    let guys = [];
    let girls = [];

    for (let i = 0; i < students.length; i++) {
        let lastLetter = students[i].trim().slice(-1);
        if (lastLetter === 'а') {
            girls.push(students[i]);
        } else {
            guys.push(students[i]);
        };
    };
    // console.log(guys);
    // console.log(girls);

    for (let j = 0; j < guys.length; j++) {
        resArray.push([guys[j], girls[j]])
    };
    return resArray
};

const pairs = getPairs(students);
console.log({ pairs });

// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
const getPairsThems = (pairs, themes) => {

    let resArray = [];

    for (let i = 0; i < pairs.length; i++) {
        resArray.push([pairs[i].join(' і '), themes[i]]);
    };
    return resArray
}

const pairsThems = getPairsThems(pairs, themes);
console.log({ pairsThems });

//3. Зіставте оцінки(marks) зі студентом(students)
const getStudentsMarks = (students, marks) => {

    let resArray = [];

    for (let i = 0; i < students.length; i++) {
        resArray.push([students[i], marks[i]])
    };
    return resArray
}

const studentsMarks = getStudentsMarks(students, marks);
console.log({ studentsMarks });

//4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив)
const getPairsThemsMarks = (pairsThems) => {

    let resArray = [];

    for (let i = 0; i < pairsThems.length; i++) {
        resArray.push([pairsThems[i].slice(0)]);
        // console.log(resArray[i][0])
        resArray[i][0].push(Math.floor(Math.random() * 5 + 1));
    };
    return resArray
}

const pairsThemsMarks = getPairsThemsMarks(pairsThems);
console.log(pairsThemsMarks);


