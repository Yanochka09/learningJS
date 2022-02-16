// // task 1

// const names = ['john', 'smith', 'karl']; 
// let result = names.reverse();
// console.log(result); // ['karl', 'smith', 'john']

// function reverseNames(names){
//     return names.sort();
// };

// console.log(reverseNames(names)); // ['john', 'smith', 'karl']

// // task 2

// const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// function isPangram(pangrams){
//     for (let i = 0; i < items.length; i++){
//       if(pangrams.indexOf(items[i]) === -1){
//         return false;
//     }}
    
//     return true;
// }


// console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
// console.log(isPangram("This is not a pangram")); // false

// 12.02.22

// task 1
/**
 * @param {Object[]} user
 * @param {string} user[].firstName
 * @param {string} user[].lastName
 * @param {number} user[].age
 */
//  function getVotingMessage(user) {
// 	if(user.age >= 18){
//         return "You can vote"
//     }
//     return "You cannot vote"
// }

// // Sample usage - do not modify
// let user1 = {
//   firstName: "Sam",
//   lastName: "Doe",
//   age: 15
// };

// let user2 = {
//   firstName: "Charlie",
//   lastName: "Fort",
//   age: 31
// };

// console.log(getVotingMessage(user1)); // "You cannot vote"
// console.log(getVotingMessage(user2)); // "You can vote"

// task 2
/**
 * @param {Object[]} course
 * @param {number} count
 */
//  function addNumberOfChapters(course, count) {
//     course.numberOfChapters = count
//     return course
//   }
  
//   // Sample usage - do not modify
//   let course1 = {
//     name: "Learn English",
//     isCompleted: true
//   };
//   let course2 = {
//     name: "Learn JavaScript",
//     isCompleted: false
//   };
  
//   console.log(addNumberOfChapters(course1, 80)); // { name: 'Learn English', isCompleted: true, numberOfChapters: 80 }
//   console.log(addNumberOfChapters(course2, 60)); // { name: 'Learn JavaScript', isCompleted: false, numberOfChapters: 60 }

// task 3
  /**
 * @param {Object} game
 * @param {string} game.name
 * @param {string[]} game.tags
 * @param {number} game.releaseYear
 */
// function getNumberOfTags(game) {
// 	return game.tags.length;
// }

// // Sample usage - do not modify
// let game = {
//   name: "Risk",
//   tags: ["Strategy", "War", "Family friendly"],
//   releaseYear: 1957
// };

// console.log(getNumberOfTags(game));

// task 4

  /**
 * @param {Object} student
 * @param {string} student.name
 * @param {number} student.age
 * @param {number[]} student.grades
 */
//  function getLastGrade(student) {
// 	return student.grades[student.grades.length - 1]
// }

// // Sample usage - do not modify
// let student = {
//   name: "Sam Doe",
//   age: 24,
//   grades: [13, 15, 15, 14, 18]
// };


// console.log(getLastGrade(student)); // 18


//   task 5
  /**
 * @param {Object} student
 * @param {string} student.name
 * @param {number} student.age
 * @param {number[]} student.grades
 */

// function getSumOfGrades(student) {
// 	let result = 0
//     student.grades.forEach(function(grade){
//         result += grade
//     })
//     return result
// }

// // Sample usage - do not modify
// let student = {
//   name: "Sam Doe",
//   age: 24,
//   grades: [13, 15, 15, 14, 18]
// };

// console.log(getSumOfGrades(student)); // 75

/* index.js */

/* index.js */

// import { createTodo, addTodo, countTodos, exportTitles, firstTodoTitle, lastTodoTitle } from "./todo.js";

// let form = document.querySelector("#todo-list-form");
// let title = document.querySelector("#todo-title");
// let completed = document.querySelector("#todo-completed");
// let category = document.querySelector("#todo-category");
// let list = document.querySelector("#todo-list");

// let todos = [];

// function render(todos) {
//   list.innerHTML = `<h3>Todos (${countTodos(todos)})</h3>`;
//   todos.forEach(function (todo) {
//     list.insertAdjacentHTML("beforeend", `<li><div class="card">${todo.icon} &nbsp;<strong>${todo.title}</strong> - by ${todo.author.firstName} ${todo.author.lastName}</strong> in ${todo.category}</div></li>`);
//   });
// }

// form.addEventListener("submit", event => {
//   event.preventDefault();
//   let author = {
//     first: "Sam",
//     last: "Blue"
//   };
//   let values = {
//     todoTitle: title.value,
//     completed: completed.checked,
//     chosenCategory: category.value,
//     user: author
//   };
//   let todo = createTodo(values);
//   todos = addTodo(todos, todo);
//   render(todos);
//   //reset form
//   title.value = "";
//   completed.checked = false;
//   // Log the result of firstTodoTitle(), lastTodoTitle() and exportTitles()
//   console.log("First todo title: " + firstTodoTitle(todos));
//   console.log("Last todo title: " + lastTodoTitle(todos));

//   console.log("Exported titles: ", exportTitles(todos));
// });
import User from "./user.js";

// class usage
let sam = new User("Sam", "Blue", 49);
console.log(sam);
console.log(sam.canVote());

console.log("---");

let charlie = new User("Charlie", "Doe", 13);
console.log(charlie);
console.log(charlie.canVote());