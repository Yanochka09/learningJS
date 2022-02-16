/* todo.js */

/**
 * @param {object} data
 */
//  export function createTodo(data) {
// 	console.log (data)
//     let icon = "⏳";
//     if (data.completed){
//         icon = "✅";
//     }
//     return {
//         title: data.todoTitle,
//         isCompleted: data.completed,
//         icon: icon,
//         category: data.chosenCategory,
//         author:  {
//           firstName: data.user.first,
//           lastName: data.user.last
//         }
//       }
// }

// export function addTodo(todos, todo) {
//     todos.push(todo);
//     return todos;
// }

// /**
//  * @param {Todo[]} todos
//  */
// export function countTodos(todos) {
// 	return todos.length;
// }

// /**
//  * @param {Todo[]} todos
//  */
// export function firstTodoTitle(todos) {
// 	return todos[0].title
// }

// /**
//  * @param {Todo[]} todos
//  */
// export function lastTodoTitle(todos) {
// 	return todos[todos.length-1].title
// }

// /**
//  * @param {Todo[]} todos
//  */
// export function exportTitles(todos) {
// 	return todos.map(function(todo){
//         return todo.title
//     })
// }

/* user.js */

// Class definition
export default class User {
	constructor(firstName, lastName,age){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	getFullName(){
		return `${this.firstName} ${this.lastName}`;
	}

	getInitials (){
		return `${this.firstName[0]}${this.lastName[0]}`;
	}

	canVote(){
		return this.age >= 18;
	}
}