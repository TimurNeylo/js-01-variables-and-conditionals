/*
* - ввод пользователя
* - методы windows.confirm(), window.prompt()
*/

// const message = 'Хотите продлить подписку?';
// const shouldRenew = confirm(message);
// console.log(shouldRenew);

// 'Введите количество товаров'
// const quantity = prompt('Введите количество товаров');
// console.log(quantity);
// console.log(typeof quantity);

let quantity = prompt('Введите количество товаров');
quantity = Number(quantity)
console.log(quantity);
console.log(typeof quantity);