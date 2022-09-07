const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

// 1.Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. 
const getSubjects = (student) => {
    subj = [];
    for (let subject in student.subjects) {
        subject = subject[0].toUpperCase() + subject.slice(1);
        subj.push(subject.replace("_", " "));
    }
    return subj;
};

document.writeln(`1. список предметів - ${getSubjects(students[0])} <br>`);

// 2.Створіть функцію яка поверне середню оцінку по усім предметам для переданого студента
const getAverageMark = (student) => {
    allMarks = [];
    for (let subject in student.subjects) {
        marks = student.subjects[subject];
        allMarks = allMarks.concat(marks);
    };

    // console.log(allMarks);
    return (allMarks.reduce((sumMarks, mark) => sumMarks + Number(mark), 0) / allMarks.length).toFixed(2);
}

document.writeln(`2. середня оцінка по усім предметам - ${getAverageMark(students[0])} <br>`);

// 3.Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту 
const getStudentInfo = (student) => {
    info = {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student),
    };
    return JSON.stringify(info);
};

document.writeln(`3. Загальна інформація - ${getStudentInfo(students[0])} <br>`);

// 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
const getStudentsNames = (students) => {
    let arrNames = [];
    for (const student in students) {
        arrNames.push(students[student].name);
    };
    return arrNames.sort();
};

document.writeln(`3. Загальна інформація - ${getStudentsNames(students)} <br>`);

// 5.Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки
const getBestStudent = (students) => {
    symplyTheBest = '';
    bestAverageMark = 0;

    for (let student in students) {
        averageMark = getAverageMark(students[student]);
        if (averageMark > bestAverageMark) {
            bestAverageMark = averageMark;
            symplyTheBest = students[student].name;
        };
        // console.log(bestAverageMark);
        // console.log(averageMark);
        // console.log(students[student]);
    };
    return symplyTheBest
};

document.writeln(`5. Кращім студентем є ${getBestStudent(students)} <br>`);

// 6.Створіть функцію яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
const calculateWordLetters = (word) => {

    freq = word.split('').reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});

    return JSON.stringify(freq);
};

document.writeln(`6. Кількість повторень літер в слові тест - ${calculateWordLetters('тест')} <br>`);