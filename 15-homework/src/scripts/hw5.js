// 1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
export const getRandomArray = (length, min, max) => {
    const arr = new Array(length).fill(0);

    arr.forEach((cur, i) => {
        // console.log(i);
        arr[i] = Number(Math.floor(Math.random() * max + min));
    });

    return arr;
};