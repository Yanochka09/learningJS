/* surface-difference.js */

// export default function calculateDifference(firstRectangle, secondRectangle) {
//     console.log("first rectangle", firstRectangle)
//     console.log("second rectangle", secondRectangle)
//     return (firstRectangle[0] * firstRectangle[1]) - (secondRectangle[0] * secondRectangle[1])
//   }


//  export function addGrade(grades, grade) {
// 	 grades.push(grade)
//      return grades
// }

// /**
//  * @param {array} grades
//  */
// export function getNumberOfGrades(grades) {
//     return grades=grades.length
// }

// /**
//  * @param {array} grades
//  */
// export function getFirstGrade(grades) {
//     return grades[0]
// }

// /**
//  * @param {array} grades
//  */
// export function getLastGrade(grades) {
//     return grades[grades.length-1]
// }

/*  stats.js */


//  export function addGrade(grades, grade) {
//     grades.push(grade)
//     return grades
// }

// /**
//  * @param {array} grades
//  */
// export function getNumberOfGrades(grades) {
//     return grades.length
// }

// /**
//  * @param {array} grades
//  */
// export function getFirstGrade(grades) {
//     return grades[0]
// }

// /**
//  * @param {array} grades
//  */
// export function getLastGrade(grades) {
// 	return grades[grades.length-1]
// }

// /**
//  * @param {array} grades
//  */
// export function isTestTooEasy(grades) {
//     return grades.includes(20)
// }

// /**
//  * @param {array} grades
//  * @param {number} grade
//  */
// export function gradeExists(grades, grade) {
//     return grades.includes(grade)
// }

// /**
//  * @param {array} grades
//  */
// export function exportCSV(grades) {
//     return grades.join(", ")
// }

/* stats.js */

/**
 * @param {array} grades
 */
 export function getSumOfGrades(grades) {
	let sum = 0
    grades.forEach(function(grade) {
    sum = sum + grade
  })
  return sum
}

/**
 * @param {array} grades
 */
export function getAverageGrade(grades) {
	let sum = 0
    grades.forEach(function(grade) {
    sum = (sum + grade)/grades.length
  })
  return sum
}