//11.5 Exercise 3

function summ(num) {
		return function(num2) {
			console.log(num + num2);
		}
}

summ(1)(4);
