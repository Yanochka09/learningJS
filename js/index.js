// // task 1
// function removeChar(meaning){
//     let rezult = meaning.substring(1, meaning.length-1)
//     return rezult
// }

// console.log(removeChar('eloquent')); // loquen
// console.log(removeChar('country')); // ountr
// console.log(removeChar('person')); // erso


// // task 2

// const coll1 = [8, 9, 21, 19, 18, 22, 7]; 
// const coll2 = [2, 0, 17, 3, 9, 15, 4]; 

// function calculateSum(items){
//     let rezult = 0
//     items.forEach(function(item) {
//         if(item % 3 === 0){
//             rezult += item
//         }
//     });
//     return rezult
// }

// console.log(calculateSum(coll1)); // 48 
// console.log(calculateSum(coll2)); // 27 

// 5.01.22

// function tripleGrades(grades) {
// 	return grades.map(function(grade){
//         return grade * 3
//     })
// }

// // Sample usage - do not modify
// console.log(tripleGrades([10, 20])) // [30, 60]
// console.log(tripleGrades([5, 12, 20, 10])) // [15, 36, 60, 30]

// function tripleGrades(grades) {
// 	let newGrades = grades.map(function(grade){
//         return grade * 3
//     })
//     return newGrades
// }

// Sample usage - do not modify
// console.log(tripleGrades([10, 20])) // [30, 60]
// console.log(tripleGrades([5, 12, 20, 10])) // [15, 36, 60, 30]

// const grades = [2, 3, 4, 5, 35]
// //// create a function to use
// function makeGrades(grade) {
//     return grade * 3
// }
// //// call the function we made. more readable
// const newGrade = grades.map(makeGrades)
// console.log(grades)
// console.log(newGrade)

/* index.js */


// import { getNumberOfGrades, getFirstGrade, getLastGrade, addGrade, getSumOfGrades, getAverageGrade, getRaisedGrades } from "./stats.js"

// let gradesForm = document.querySelector("#grades-form")
// let yourGrade = document.querySelector("#your-grade")

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
//   <td>${getSumOfGrades(grades)}</td>
//   <td>${getAverageGrade(grades)}</td>
//   <td>${getRaisedGrades(grades)}</td>
//   </tr>`
// }

// gradesForm.addEventListener("submit", event => {
//   event.preventDefault()
//   let newGrade = Number.parseInt(yourGrade.value, 10)
//   grades = addGrade(grades, newGrade)
//   yourGrade.value = ""
//   render(grades)
// })

// render(grades)

// 6.01.22

// function hasCharacterBeenUsed(characters, char) {
// 	return characters.includes(char)
// }

// // Sample usage - do not modify
// console.log(hasCharacterBeenUsed(["A", "B", "C", "D"], "A")) // true
// console.log(hasCharacterBeenUsed(["A", "B", "C", "D"], "F")) // false
// console.log(hasCharacterBeenUsed(["A", "B"], "B")) // true
// console.log(hasCharacterBeenUsed(["A", "B"], "C")) // false

// function lowerCaseNames(names) {
// 	return names.map(function(name){
//     return name.toLowerCase()  
//   })
// }  

// // Sample usage - do not modify
// console.log(lowerCaseNames(["Addison", "Blake", "Sam", "August"])) // ["addison", "blake", "sam", "august"]
// console.log(lowerCaseNames(["SAM", "AlEx", "CHARLIE"])) // ["sam", "alex", "charlie"]

