/* classroom.js */

// /** @param {number[]} grades */
// export function getNumberOfGrades(grades) {
// 	return grades.length;
// }

// /** @param {number[]} grades */
// export function getSumGrades(grades) {
//   return grades.reduce(function(total, current){
//       return total += current;
//   }, 0);
// }

// /** @param {number[]} grades */
// export function getAverageValue(grades) {
//   let sum = 0;
//   grades.forEach(function(grade){
//       sum += grade
//   })
//   return sum/grades.length;
// }

// /** @param {number[]} grades */
// export function getPassingGrades(grades) {
//   return grades.filter(function(grade){
//     if(grade >= 10){
//         return grade;
//       }
//   });
// }

// /** @param {number[]} grades */
// export function getFailingGrades(grades) {
//     return grades.filter(function(grade){
//         if(grade <= 9){
//             return grade;
//           }
//       });
// }

// /** @param {number[]} grades */
// export function getRaisedGrades(grades) {
//   return grades.map(function(grade){
//   if(grade <= 20){
//     return grade + 1;
//   }
//   });
// }

/* stats.js */

/**
 * @param {number[]} ages
 */
 export function getVotersCount(ages) {
	let result = ages.filter(function(age){
        if (age >= 18){
            return age;
        }
    })
    return result.length  
}