// task 1
function removeChar(meaning){
    let rezult = meaning.substring(1, meaning.length-1)
    return rezult
}

console.log(removeChar('eloquent')); // loquen
console.log(removeChar('country')); // ountr
console.log(removeChar('person')); // erso


// task 2

const coll1 = [8, 9, 21, 19, 18, 22, 7]; 
const coll2 = [2, 0, 17, 3, 9, 15, 4]; 

function calculateSum(items){
    let rezult = 0
    items.forEach(function(item) {
        if(item % 3 === 0){
            rezult += item
        }
    });
    return rezult
}

console.log(calculateSum(coll1)); // 48 
console.log(calculateSum(coll2)); // 27 