// https://learn.javascript.ru/while-for 
// function fizzBuzz(begin, end){
//   if (begin > end){
//     return ""
//   }
//   for (let i = begin; i <= end; i++){// (начало; условие; шаг) 
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log ("FizzBuzz")
//     }
//     else if (i % 3 === 0){
//       console.log ("Fizz")
//     }
//     else if (i % 5 === 0){
//       console.log ("Buzz")
//     }
//     else {
//       console.log (i)
//     } 
//   }
// } 

// fizzBuzz(31, 20)

// const fizzBuzz = (begin, end) => {
//   if (begin > end) return;
//   let result = begin;
//   if (begin % 3 === 0 && begin % 5 === 0) {
//       result = 'FizzBuzz';
//   } else if (begin % 3 === 0) {
//       result = 'Fizz';
//   } else if (begin % 5 === 0) {
//       result = 'Buzz';
//   };
//   console.log(result)
//   fizzBuzz(begin + 1, end);
// };
// fizzBuzz(11, 20)

// Реализуйте функцию `getWeekends()`, которая возвращает массив из двух элементов – названий выходных дней на английском. Всего есть два возможных значения:

  let longweeks = ['Monday', 'Tuesday']
  let hosrtweeks = ['Mon', 'Tue'] 

  function getWeekends (format) {
    if (format === "long"){
      return longweeks
    } else if (format==="short"){
      return hosrtweeks
    } else {
      return "unknow"
    } 
  }



console.log(getWeekends("long"))  // ['Monday', 'Tuesday']
console.log(getWeekends("short"))  // ['Mon', 'Tue']


