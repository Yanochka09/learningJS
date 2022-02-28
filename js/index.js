// function fakeStr(test){
//     let testArrs = test.split("");
//     return testArrs.map(function(testArr){
//     if (testArr >= 5){
//         return "1";
//     } else if (testArr < 5){
//         return "0";
//     }
//     }).join("");
// }

    
//     console.log(fakeStr('45385593107843568')); // '01011110001100111'
//     console.log(fakeStr('509321967506747')); // 101000111101101

// export function getDropdown(countries) {
//     console.log(countries);
//     let html = '<option value="">Please select</option>';
//     countries.forEach(function(country) {
//         html += `<option value="${country.toLowerCase()}">${country}</option>`
//     })
//     return html;
// }

// 27.02

/**
//  * @param {number[]} temperatures
//  */
//  function getPositiveTemperatures(temperatures) {
// 	return temperatures.filter(function(temperatu){
//         return temperatu > 0;
//     })
// }

// // Sample usage - do not modify
// console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
// console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]

/**
//  * @param {number[]} years
//  * @param {number} searchYear
//  */
//  function getYear(years, searchYear) {
// 	return years.find(function(year){
//         return year === searchYear;
//     })
// }

// // Sample usage - do not modify
// console.log(getYear([2019, 2020, 2021], 2020)); // 2020
// console.log(getYear([2019, 2020, 2021], 1990)); // undefined

/**
//  * @param {number[]} years
//  */
//  function getOddYears(years) {
// 	return years.filter(function(year){
//         if (year % 2){
//             return year;
//         }
//     })
// }

// // Sample usage - do not modify
// console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
// console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]

/**
 * @param {string[]} strings
 */
//  function getStringSizes(strings) {
// 	return strings.map(function(string){
//         return string.length;
//     });
// }

// // Sample usage - do not modify
// console.log(getStringSizes(["a", "abc"])); // [1, 3]
// console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7]
// console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]
/* index.js */

/* script.js */

// import {getVotersCount} from "./classroom.js";

// const city = document.querySelector("#city-select");
// const count = document.querySelector("#count");
// const cityName = document.querySelector("#city-name");

// city.addEventListener("change", () => {
//   if (!city.value) {
//       return false;
//   }
//   fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/city-stats/${city.value}.json`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       cityName.textContent = city.options[city.selectedIndex].textContent;
//       count.textContent = getVotersCount(data);
//   });
// });

