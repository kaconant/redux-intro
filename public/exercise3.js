// EXERCISE 3
// Let's make the checkbox label say 'checked' whenever we check the checkbox
// The subscribe() callback is unimplemented -> 

let defaultState = {
	isChecked: false
}

let reducer3 = (state = defaultState, action) => {

	var stateCopy = Object.assign({}, state); // This is a very ES5 way to copy an object 

	if (action.type == "CLICK_CHECKBOX") {
		stateCopy.isChecked = !stateCopy.isChecked; // return toggled version of the state
		return stateCopy;
	}

	return state;
}

let store3 = Redux.createStore(reducer3);

let checkboxHTML = document.getElementById('checkbox')
let checkboxLabelHTML = document.getElementById('checkbox-label');


// use store3.subscribe() to register a callback
// use store3.getState() in the callback to read the current state 
// use the current state to decide whether checkboxLabelHTML needs to be 'checked' or 'unchecked'
// use checkboxLabelHTML.innerHTML == ...   to update the label with the correct word

store3.subscribe(()=>{
	let currentState = store3.getState();
	if (currentState.isChecked) {
		checkboxLabelHTML.innerHTML = "checked";
	} else {
		checkboxLabelHTML.innerHTML = "unchecked";
	}
})

checkboxHTML.addEventListener('change', (e)=>{
	store3.dispatch({
		type: "CLICK_CHECKBOX"
	})
})