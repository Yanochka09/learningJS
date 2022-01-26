// task 1

const cities = ['moscow', 'london', 'berlin', 'porto'];
let arr = cities
function get(arr,index,value = "null"){
  if (index >= arr.length || index < 0){ 
    return value }      
  else{ 
    return arr[index] }
}

console.log(get(cities, 1)); // 'london'
console.log(get(cities, 4)); // null
console.log(get(cities, 10, 'paris')); // 'paris'
console.log(get(cities, -1, 'oops')); // 'oops'

// task 2

function solution(string) {
  let b = string.split('');
  for (let i = 0; i < b.length; i++) {
    if (b[i] === b[i].toUpperCase()) {
      b.splice(i, 1, ' ' + b[i])
    }
  }
    return b.join('')
}

console.log(solution('camelCasing')); // "camel Casing"
console.log(solution('indtntiFier')); // "indtnti Fier"

// task 3

let arrayNumbers = [1, -4, 7, 12];
let sumNumbers = 0
for (let i = 0; i < arrayNumbers.length; i++){
  if (arrayNumbers[i]>0) {
      sumNumbers += arrayNumbers[i]
  }
} 
    
console.log(sumNumbers) // 20







