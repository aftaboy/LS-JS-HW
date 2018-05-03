/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
console.log('Task 1');

function forEach(array, fn) {
  var i, length = array.length;
  for (i = 0; i < length; i = i + 1) {
    fn(array[i], i, array);
  }
}

var myForEach = forEach([1, 2, 3], function (number, index, numbers) {
  console.log(number, index, numbers)
});

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
console.log('Task 2');

function map(array, fn) {
  var i, length = array.length, result = [];
  for (i = 0; i < length; i = i + 1) {
    result.push(fn(array[i], i, array));
  }
  return result;
}

var myMap = map([1, 2, 3], function (number, index, numbers) {
  console.log(number, index, numbers)
});

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
console.log('Task 3');

function reduce(array, fn, initial = 0) {
  var i, length = array.length, result = initial;
  for (i = 0; i < length; i = i + 1) {
    result = fn.call(null, result, array[i], i, array);
  }
  return result;
};

var myReduce = reduce([1, 2, 3, 4, 5], function (result, current, index, array) {
  console.log(result, current, index, array);
  return result + current;
});

console.log('Result =', myReduce);

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
console.log('Task 4');

function upperProps(obj) {
  var newObj = Object.getOwnPropertyNames(obj);
  var upperCaseObj = newObj.map(function (fn) {
    
    return fn.toUpperCase();
  });

  console.log(upperCaseObj);
}

upperProps({ name: 'Fedor', lastName: 'Tolmachev' });

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};