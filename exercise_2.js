//11.4 Exercise 2

function isPrimeNumber(num) {
	if (num > 1 && num <= 1000) {
	  for(let i = 2; i < num; i++)
	    if(num % i === 0) return `${num} is not a prime number`;
	  return `${num} is a prime number`;
	} else if (num === 0 || num === 1) {
		return `${num} is not a prime number`;
	} else {
		return "incorrect number"
	}
}

alert(isPrimeNumber(7));

// Почти правильно, есть небольшая ошибка - по правилам, 0 и 1 не являются простыми числами, поэтому было бы хорошо предусмотреть для них отдельное условие. Сейчас при вводе 0 или 1 выводится, что эти числа - простые, что не соответствует действительности. Выше исправила