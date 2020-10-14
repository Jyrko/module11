//11.2 Exercise 1
function alertEvenOdd(arr) {
  let odd = 0;
  let even = 0;
  let nullObject = 0;
//	arr.forEach(element => (element % 2 == 0) ? even++ : odd++)
  arr.forEach(function(element) {
    if (element % 2 == 0) even++;
    else if (element % 2 == 1) odd ++;
    else if (element == null) nullObject++;
  })

  return `odd count - ${odd}, even count - ${even}, nullObject count - ${nullObject}`;
}

alert(alertEvenOdd([1, 2, 3, null, undefined, false, true]))
