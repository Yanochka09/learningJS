// function simpleNumber(number){
//     let result = [];
//     let sieve = [];

//     for(let i = 2; i < number; ++i){
//         if (!sieve[i]){
//             result.push(i);
//         for(let j = i << 1; j <= number; j +=i ){
//             sieve[j] = true;
//         }
//         }
//     }
//     return result;
// }

//   console.log(simpleNumber(100));
  
// const message = "You are welcome.";
// let result = message.replaceAll(" ", "_"); // "You_are_welcome";
// console.log(message); // "You are welcome"
// console.log(result);

// const getSlug = name => {
	
// }

// // Sample usage - do not modify
// console.log(getSlug("IKEA table")); // "ikea-table"
// console.log(getSlug("200cm Bed")); // "200cm-bed"
// console.log(getSlug("Bedside lavalamp")); // "bedside-lavalam"
// console.log(getSlug("A B C noodles")); // "a-b-c-noodles"

/* script.js */
import {getTranslation} from "./helpers.js";

const dropdown = document.querySelector("#countries");
const output = document.querySelector("#output");

dropdown.addEventListener("change", () => {
  output.textContent = getTranslation(dropdown.value);
});



