//11.4 Exercise 2

function isPrimeNumber(num) {
	if (num <= 1000) {
	  for(let i = 2; i < num; i++)
	    if(num % i === 0) return `${num} is not a prime number`;
	  return `${num} is a prime number`;
	} else {
		return "incorrect number"
	}
}

alert(isPrimeNumber(7));
