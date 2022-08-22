// Задание 1
//Напишите функцию countDown(n), которая получает число {n} в качестве аргумента и печатает в консоль обратный отсчет, начиная с этого числа. Например, countDown(3) напечатает: 3 2 1.

// function countDown(n) {
// 	for (let i = n; i >= 1; --i) {
//   	console.log(i);
//   } 
// }

// countDown(3);

// /Задание 2
//Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.

// function getPercents(percent, number) {
// 	return number / 100 * percent;
// }

// alert( getPercents(30, 200) );

//Задание 3
// Напишите функцию repeatWord(word, count), которая принимает слово и количество раз для его повторения. Например, если вызвать repeatWord('слово', 3) функция напечатает "слово1, слово2, слово3" на одной строке.

// function repeatWord(word, count) {
// 	let words = ''
//   for (let i = 1; i <= count; ++i) {
//   	words += word + i + ', '
//   }
//   alert(words);
// }

// repeatWord('слово', 3)

//Задание 4

//Напишите функцию createAdder(a), которая возвращает функцию addA, которая принимает b и возвращает a + b.

// Функции должны принимать аргументы.

// function createAdder(a) {
// 	return function addA(b) {
//     return a + b;
//   }
// }

// const add5 = createAdder(5);
// alert( add5(5) ) // Должно получиться 10
// alert( add5(12) ) // Должно получиться 17

//Напишите функцию getMonth(n), которая принимает номер месяца и возвращает его название. Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else

// function getMonth(n){
//     if (n === 1) return 'JAN'
//     if (n === 2) return 'FEB'
//     if (n === 3) return 'MAR'
//     if (n === 4) return 'APR'
//     if (n === 5) return 'MAY'
//     if (n === 6) return 'JUN'
//     if (n === 7) return 'JUL'
//     if (n === 8) return 'AUG'
//     if (n === 9) return 'SEP'
//     if (n === 10) return 'OCT'
//     if (n === 11) return 'NOV'
//     if (n === 12) return 'DEC'
// }
// alert(getMonth(3))