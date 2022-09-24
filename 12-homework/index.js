/* Запускається цикл(підказка: можна використовувати while) length раз,
кожен прохід циклу дивимось на останні 5 цифр результату виклику методу Date.now() Наприклад отримали const sign = 16086;.
Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
Функція gerRandomChinese(length) повинна повернути рядок довжиною(length)
з китайськими ієрогліфами.Час роботи проміса має складати length * 50ms.
(Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms */

const getRandomChinese = async (length) => {
    let arr = [];
    const getPromis = () => {
        return new Promise(resolve => setTimeout(() => {
            let sign = String(Date.now()).slice(-5);
            resolve(String.fromCharCode(sign))
        }, 50));
    };
    while (length) {
        length--;
        arr.push(await getPromis());
    };

    let res = arr.join();
    console.log(res);
    return res;
};

getRandomChinese(4).then(result => {
    let h1 = document.createElement('h1')
    document.querySelector('body').append(h1);
    h1.innerHTML = result;
});



