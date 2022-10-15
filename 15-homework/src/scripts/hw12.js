export const getRandomChinese = async (length) => {
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


