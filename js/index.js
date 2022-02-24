// задача. написать функцию findSum.
// До n включительно эта функция вернет сумму всех чисел, кратных 3 и 5.
// findSum(5) должен вернуть 8 (3 + 5)
// findSum(10) должен вернуть 33 (3 + 5 + 6 + 9 + 10)

// function findSum(n){
//   let sum = 0;
//   for(let i = 0; i <= n; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//       sum += i
//     }
//   }
//   return sum
// }

// console.log(findSum(5));
// console.log(findSum(10));

// / задача.
// В вашем классе был тест, и вы его прошли.
// Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе.
// Вы получаете массив с результатами тестов ваших сверстников. Теперь посчитайте среднее и сравните свой результат!

// function betterThanAverage(items,estimation){
//   let sum = items.reduce(function(total,current){
//     return total+current;
//   },0)
//   let result = sum/items.length;
//   if(result<estimation){
//     return true;
//   }
//   return false;
// }

// function betterThanAverage(items,estimation){
//   let sum = 0
//    items.forEach(function(item){
//     sum += item
//   })
//   let result = sum/items.length;
//   if(result<estimation){
//     return true;
//   }
//   return false;
// }

// function betterThanAverage(items,estimation){
//   let sum = 0
//    for (let i = 0; i < items.length-1; i++){
//      sum += i
//    }
//   let result = sum/items.length;
//   if(result<estimation){
//     return true;
//   }
//   return false;
// }

// console.log(betterThanAverage([2, 3], 5)); // true
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true


// дана строка цифр вы должны заменить любую цифру ниже 5 на «0», а любую цифру выше или равную 5 на «1». Функция возвращает строку.


// function fakeStr(test) {
//   test.split("");

// }

// ​​​​​​console.log(fakeStr('45385593107843568')); // '01011110001100111'
// console.log(fakeStr('509321967506747')); // 101000111101101

// Есть массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
// Возвращаем ваш ответ в виде числа.




// console.log(sumElements([9, 3, '7', '3'])); // 22
// console.log(sumElements('5', '0', 9, 3, 2, 1, '9', 6, 7)); // 42

// ваша задача — создать функцию, которая превращает строку в мексиканскую волну. Вам будет передана строка, и вы должны вернуть эту строку в виде массива, где заглавная буква означает стоящего человека.


// function wave(str) {
//   let resultArr = [];
//     for(let i = 0; i < str.length; i++) {
//         let result = str.split('');
//         if(result[i] !== '') {
//             result[i] = result[i].toUpperCase();
//             resultArr.push(result.join(''));
//         }
//     }
//     return resultArr;
// }


// console.log(wave('hello')); // [Hello, hEllo, heLlo, helLo, hellO]

/* script.js */
import {getDescription} from "/js/helpers.js";

const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", (event) => {
  output.textContent = getDescription(event.currentTarget.value);
});