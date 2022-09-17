// 1.
// необхідно створити клас Student та розробляти методи всередині цього класу.
class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
        this.dismissed = false;
    };
    //  метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    // "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер"
    getInfo() {
        return (`Студент ${this.course}го курсу ${this.university}, ${this.fullName}`);
    }
    // Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
    get getMarks() {
        return !this.dismissed ? this.marks : null;
    }
    // Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. 
    // Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
    set setMark(marks) {
        if (!this.dismissed) {
            typeof marks === 'number' ? this.marks.push(marks) : this.marks.push(...marks);
        }
    };
    // Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
    getAverageMark() {
        return this.marks.length > 0 ? this.marks.reduce((acc, mark) => acc += mark, 0) / this.marks.length : null;
    };
    // Створіть метод this.dismiss, який "виключить" студента.
    // Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна.
    // (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
    dismiss() {
        this.dismissed = true;
    };
    // Створіть метод this.recover, який дозволить поновити студента
    recover() {
        this.dismissed = false;
    };
};

const student = new Student('Національний технічний університет Харківський політехнічний інститут', '5', 'Юрій Хмелевський');
console.log(student.getInfo());
// запушу массивом бо ліньки писати :)
student.setMark = [5, 4, 4, 5, 5];
console.log("Массив оцінок: " + student.getMarks);
console.log("Середня оцінка: " + student.getAverageMark());
student.dismiss();
console.log('Студент виключен');
console.log(student.getMarks);
student.recover();
console.log('Студент поновлен');
console.log(student.getMarks);

// 2.
// Створіть новий клас BudgetStudent, який повністю наслідує клас Student
class BudgetStudent extends Student {
    constructor(university, course, fullName, marks) {
        super(university, course, fullName, marks);
        this.dismissed = false;
        setInterval(() => {
            this.getScholarship()
        }, 30000);
    };

    getScholarship() {
        if (this.getAverageMark() >= 4 && !this.dismissed) {
            console.log(`Ви отримали 1400 грн стипендії`);
        };
    }
};

const studentBudget = new BudgetStudent('Гарвардський університет', '3', 'Bill Gates ');
studentBudget.setMark = [5, 4, 5, 5, 4];
console.log(studentBudget.getInfo());
studentBudget.getScholarship();