// task 1

const names = ['john', 'smith', 'karl']; 
let result = names.reverse();
console.log(result) // ['karl', 'smith', 'john']

function reverseNames(names){
    return names.sort();
};

console.log(reverseNames(names)); // ['john', 'smith', 'karl']

// task 2

const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function isPangram(pangrams){
    for (let i = 0; i < items.length; i++){
    if(pangrams.indexOf(items[i]) === -1){
        return false;
    }}
    
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("This is not a pangram")); // false
