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

}

document.writeln(`2. середня оцінка по усім предметам - ${getAverageMark(students[0])} <br>`);