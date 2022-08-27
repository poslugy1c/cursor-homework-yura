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

console.log(pairs);