// task 1

// const cities = ['moscow', 'london', 'berlin', 'porto'];
// let arr = cities

// function get(arr, index, value = "null") {
//   if (index >= arr.length || index < 0) {
//     return value
//   } else {
//     return arr[index]
//   }
// }

// console.log(get(cities, 1)); // 'london'
// console.log(get(cities, 4)); // null
// console.log(get(cities, 10, 'paris')); // 'paris'
// console.log(get(cities, -1, 'oops')); // 'oops'

// task 2

// function solution(string) {
//   let register = string.split('');
//   for (let i = 0; i < register.length; i++) {
//     if (register[i] === register[i].toUpperCase()) {
//       register.splice(i, 1, ' ' + register[i])
//     }
//   }
//   return register.join('')
// }

// console.log(solution('camelCasing')); // "camel Casing"
// console.log(solution('indtntiFier')); // "indtnti Fier"

// task 3

// let arrayNumbers = [1, -4, 7, 12];
// let sumNumbers = 0
// for (let i = 0; i < arrayNumbers.length; i++) {
//   if (arrayNumbers[i] > 0) {
//     sumNumbers += arrayNumbers[i]
//   }
// }

// console.log(sumNumbers) // 20

// 29/01/2022

// function incrementFirstTemperature(temperatures) {
//   return  ++ temperatures [0] 
// }

// // Sample usage
// console.log(incrementFirstTemperature([3, 5, 4, 7]))
// console.log(incrementFirstTemperature([-5, 12, 15, 18, 13]))

// 30/01/2022

// /**
//  * @param {array} grades
//  */
//  function convertToString(grades) {
// 	return grades.join(" & ")
//  }

// // Sample usage - do not modify
// console.log(convertToString([10, 15, 13, 19])) // "10 & 15 & 13 & 19"
// console.log(convertToString([7, 13, 20, 15])) // "7 & 13 & 20 & 15"

// /**
//  * @param {array} grades
//  */
//  function exportCSV(grades) {
// 	return grades.join(", ")
// }

// // Sample usage - do not modify
// console.log(exportCSV([10, 15, 13, 19])) // "10, 15, 13, 19"
// console.log(exportCSV([7, 13, 20, 15])) // "7, 13, 20, 15"

/* index.js */

// import {getNumberOfGrades, getFirstGrade, getLastGrade, addGrade, isTestTooEasy, gradeExists, exportCSV} from "./stats.js"

// let gradesForm = document.querySelector("#grades-form")
// let yourGrade = document.querySelector("#your-grade")
// const gradeToCheck = document.querySelector("#grade-to-check")

// let grades = [14, 9, 13, 15, 18]

// function render(grades) {
//   console.log("Grades: " + grades.join(', '))
//   let tbody = document.querySelector("#stats-table tbody")
//   tbody.innerHTML = `<tr>
//   <td>${getNumberOfGrades(grades)}</td>
//   <td>${getFirstGrade(grades)}</td>
//   <td>${getLastGrade(grades)}</td>
//   </tr>`

//   let tbody2 = document.querySelector("#stats-table2 tbody")
//   tbody2.innerHTML = `<tr>
//   <td>${isTestTooEasy(grades)}</td>
//   <td>${gradeExists(grades, Number.parseInt(gradeToCheck.value, 10))}</td>
//   <td>${exportCSV(grades)}</td>
//   </tr>`
// }

// gradeToCheck.addEventListener("change", () => {
//   render(grades)
// })

// gradesForm.addEventListener("submit", event => {
//   event.preventDefault()
//   let newGrade = Number.parseInt(yourGrade.value, 10)
//   grades = addGrade(grades, newGrade)
//   yourGrade.value = ""
//   render(grades)
// })

// render(grades)

/* index.js */

import {getSumOfGrades, getAverageGrade} from "./stats.js"

let gradesForm = document.querySelector("#grades-form")
let yourGrade = document.querySelector("#your-grade")

let grades = [14, 9, 13, 15, 18]

function render(grades) {
  console.log("Grades: " + grades.join(', '))
  let tbody = document.querySelector("#stats-table tbody")
  tbody.innerHTML = `<tr>
  <td>${grades.length}</td>
  <td>${getSumOfGrades(grades)}</td>
  <td>${getAverageGrade(grades)}</td>
  </tr>`
}

gradesForm.addEventListener("submit", event => {
  event.preventDefault()
  let newGrade = Number.parseInt(yourGrade.value, 10)
  grades.push(newGrade)
  yourGrade.value = ""
  render(grades)
})

render(grades)


// let grades = [10, 20, 30, 45]
// let arrs = [5, 7, 9, 12]
// let items =[3, 5, 8, 10]


// function calculateSum(grades){
//     let result = 0
//     grades.forEach(function(grade) {
//     result = result + grade
// })
//     return result
// }

// console.log(calculateSum(grades))
// console.log(calculateSum(arrs))
// console.log(calculateSum(items))