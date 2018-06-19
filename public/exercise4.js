// EXERCISE 4
// This one is supposed to be a simple to-do list
// The reducer is unimplemented - give it a shot!
// The subscribe callback is already implemented, let it inform how you write your reducer
// HINT - The ADD_TODO action also has a property called todoText

let defaultTodos = {
	todos: []
}

// write a reducer that updated the todos array whenever a ADD_TODO action is dispatched
let reducer4 = (state = defaultTodos, action) => {
	if (action.type == "ADD_TODO") {
		let { todoText } = action; // let todoText = action.todoText;
		
		return {
			todos: state.todos.concat(todoText)
		}
	}
	return state;
};

//  per Josh G:
//  let reducer4 = (state = defaultTodos, action) => {
// 		let newState = {}
	
// 		if (action.type == "ADD_TODO") {
// 			return {
// 				todos: [
// 					...state.todos, action.todoText
// 				]
// 			}
// 		}
// };

let store4 = Redux.createStore(reducer4);

let addTodoHTML = document.getElementById('add-todo')
let inputHTML = document.getElementById('todo-text')
let todosListHTML = document.getElementById('todos')

store4.subscribe(()=>{
	let { todos } = store4.getState();
	
	let list = ``;
	todos.forEach(todo => {
		list += `<li>${todo}</li>`
	})
	todosListHTML.innerHTML = list;
	
})

addTodoHTML.addEventListener('click', (e)=>{
	store4.dispatch({
		type: "ADD_TODO",
		todoText: inputHTML.value
	})
})