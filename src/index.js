/* ДЗ 1 - Функции */

/*
 Задание 1:

 1.1: Добавьте к функции параметр с любым именем
 1.2: Функция должна возвращать аргумент, переданный ей в качестве параметра

 Пример:
   returnFirstArgument(10) вернет 10
   returnFirstArgument('привет') вернет `привет`

 Другими словами: функция должна возвращать в неизменном виде то, что поступает ей на вход
 */

function returnFirstArgument(a, b) {
  return a + b;
}

var test = returnFirstArgument('Igor, ', 'Halo!');

console.log('Задание 1');
console.log(test);

/*
 Задание 2:

 2.1: Функция должна возвращать сумму переданных аргументов

 Пример:
   sumWithDefaults(10, 20) вернет 30
   sumWithDefaults(2, 4) вернет 6

 2.1 *: Значение по умолчанию для второго аргумента должно быть равно 100

 Пример:
   sumWithDefaults(10) вернет 110
 */

const b = 100;

function sumWithDefaults(a) {
  return a + b;
}

var sum = sumWithDefaults(1);

console.log('Задание 2');
console.log(sum);

/*
 Задание 3:

 Функция должна принимать другую функцию и возвращать результат вызова этой функции

 Пример:
   returnFnResult(() => 'привет') вернет 'привет'
 */

function returnFnResult(a, b) {

  function fn() {
    return a + b;    
  }

  return fn();
}

var twoFuncs = returnFnResult(2, 5);

console.log('Задание 3');
console.log(twoFuncs);

/*
 Задание 4:

 Функция должна принимать число и возвращать новую функцию (F)
 При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F

 Пример:
   var f = returnCounter(10);

   console.log(f()); // выведет 11
   console.log(f()); // выведет 12
   console.log(f()); // выведет 13
 */

function returnCounter(number) {
  return function() {
    return number++;
  }
}

var f = returnCounter(1);

console.log('Задание 4');
console.log(f());
console.log(f());
console.log(f());

/*
 Задание 5 *:

 Функция должна возвращать все переданные ей аргументы в виде массива
 Количество переданных аргументов заранее неизвестно

 Пример:
   returnArgumentsArray(1, 2, 3) вернет [1, 2, 3]
 */

function returnArgumentsArray() {
  var arr = [];
  for (var i = 0; i < arguments.length; i++) {
    arr[i] = arguments[i];
  }

  return arr;
}

var myNewArray = returnArgumentsArray(1, 'arrrraaaay', 5);

console.log('Задание 5');
console.log(myNewArray);

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию

 Пример:
   function sum(a, b) {
     return a + b;
   }

   var newSum = bindFunction(sum, 2, 4);

   console.log(newSum()) выведет 6
 */

function bindFunction(fn) {
}
console.log('Задание 6');

/*
export {
    returnFirstArgument,
    sumWithDefaults,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}*/