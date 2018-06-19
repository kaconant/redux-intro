// EXERCISE 1
// This counter isn't working! The counter always says 0 even when you press 'increment'
// This is because the reducer isn't implemented 

let reducer1 = (state = 0, action) => {
	// Write code here that will:
	// 1) check to see if the action is of type "INCREMENT" (see the dispatch call below)
	// 2) return state + 1 if it's and "INCREMENT"
	// 3) otherwise just return state
	// (HINT - look at the other exercises to see what might go here)
	if (action.type == "INCREMENT") {
		return state + 1;
	} else {
		return state;
	}
}

let store1 = Redux.createStore(reducer1);

let buttonHTML = document.getElementById('counter1-button');
let counterHTML1 = document.getElementById('counter1-text');

store1.subscribe(()=>{
	let counterValue = store1.getState();
	counterHTML1.innerHTML = counterValue;
})

buttonHTML.addEventListener('click', (e)=>{
	store1.dispatch({
		type: "INCREMENT"
	})
})