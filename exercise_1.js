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

// В это задание перекочевали ошибки из аналогичного задания прошлого модуля, на всякий случай перечислю их ещё раз:

// 1. По заданию нужно считать не значения undefined, а нулевые элементы, т.е. нули (числа). Все значения, что не являются числами, нужно просто отсеивать и не учитывать
// 2. Чтобы исключить всё, кроме чисел, нужно обязательно использовать проверку на NaN, т.к. typeof NaN = "number" и только проверка на typeof не отсеет эти значения.

// В остальном всё правильно, код переписан на функцию верно