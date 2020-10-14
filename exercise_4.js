//11.7 Exercise 4
let value1 = +prompt("Enter first value: ");
const value2 = +prompt("Enter second value: ")

const intervalID = setInterval(function() {
	if (value1 === value2) clearInterval(intervalID);
	console.log(value1);
	value1++;

}, 1000)
