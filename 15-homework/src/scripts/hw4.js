const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

// 1. Розділіть студентів на пари(хлопець + дівчина)
export const getPairs = (students) => {

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

    for (let j = 0; j < guys.length; j++) {
        resArray.push([guys[j], girls[j]])
    };
    return resArray
};