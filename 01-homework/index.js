let capPrice = 15.678, bootsPrice = 123.965, pulloverPrice = 90.2345;

console.log('max price is: ' + Math.max(capPrice, bootsPrice, pulloverPrice));
console.log('min price is: ' + Math.min(capPrice, bootsPrice, pulloverPrice));

let itemsSum = capPrice + bootsPrice + pulloverPrice;
console.log('all prices sum is: ' + itemsSum);

let roundedSum = Math.floor(capPrice) + Math.floor(bootsPrice) + Math.floor(pulloverPrice);
console.log('all prices sum no kopecks is: ' + roundedSum);

console.log('all prices sum rounded to 100 is: ' + (Math.round(itemsSum / 100) * 100));

console.log('sum is double: ' + (roundedSum % 2 == 0));

console.log('the rest from 500 is: ' + (500 - itemsSum));

console.log('the average price is: ' + ((itemsSum / 3).toFixed(2)));

let discount = itemsSum * Math.random();
console.log('discount is: ' + discount);

console.log('sum with discount is: ' + (itemsSum - discount).toFixed(2));

console.log('net profit is: ' + ((itemsSum - discount).toFixed(2) - (itemsSum / 2)));

console.log(`ціна була ${itemsSum.toFixed(2)} 
, знижка склала ${(discount.toFixed(2) / itemsSum * 100).toFixed(2)}%, клієнт заплатив на ${discount.toFixed(2)} меньше
, собівартість = ${itemsSum.toFixed(2)} / 2 -> ${(itemsSum / 2).toFixed(2)}. Чистий прибуток = ${(itemsSum / 2).toFixed(2)} - ${discount.toFixed(2)} -> ${(((itemsSum - discount).toFixed(2) - (itemsSum / 2)).toFixed(2))}`);

console.log(`
Максимальна ціна: ${Math.max(capPrice, bootsPrice, pulloverPrice)}
Мінімальна ціна:  ${Math.min(capPrice, bootsPrice, pulloverPrice)}
Вартість всіх товарів:  ${itemsSum}
Сумма цілих частин вартості кожного товару: ${roundedSum}
Сума товарів округлену до сотень: ${(Math.round(roundedSum / 100) * 100)}
Булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним: ${(Math.floor(itemsSum) % 2 == 0)}
Сума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн:  ${(500 - itemsSum)}
Середнє значення цін, округлене до другого знаку після коми:  ${(itemsSum / 3).toFixed(2)}
Випадкова знижка: ${discount}
Сума до оплати зі знижкою округлена до 2 знаків після коми:  ${(itemsSum - discount).toFixed(2)}
Чистий прибуток:  ${(itemsSum - discount).toFixed(2) - (itemsSum / 2)}
ціна була ${itemsSum.toFixed(2)} 
, знижка склала ${(discount.toFixed(2) / itemsSum * 100).toFixed(2)}%, клієнт заплатив на ${discount.toFixed(2)} меньше
, собівартість = ${itemsSum.toFixed(2)} / 2 -> ${(itemsSum / 2).toFixed(2)}. Чистий прибуток = ${(itemsSum / 2).toFixed(2)} - ${discount.toFixed(2)} -> ${(((itemsSum - discount).toFixed(2) - (itemsSum / 2)).toFixed(2))}
`);