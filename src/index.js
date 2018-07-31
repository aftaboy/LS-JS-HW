/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:
 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */

function map(array, fn) {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i], i, array));
  }
  return result;
}

/*
 Задание 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */

function reduce(array, fn, initial) {
  let result, i;
  if (initial !== undefined) {
    i = 0;
    result = initial;
  } else {
    i = 1;
    result = array[0];
  }

  for (i; i < array.length; i++) {
    result = fn.call(null, result, array[i], i, array);
  }

  return result;
}

/*
 Задание 4:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива
 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */

function upperProps(obj) {
  var newObj = Object.getOwnPropertyNames(obj);
  var upperCaseObj = newObj.map(function(fn) {
    return fn.toUpperCase();
  });

  return upperCaseObj;
}

/*
 Задание 5 *:
 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
  var i,
    length,
    result = [];

  if (from == null || from == undefined || from < -array.length) {
    i = 0;
  } else if (from > array.length) {
    i = array.length;
  } else if (from < 0) {
    i = array.length + from;
  } else {
    i = from;
  }

  if (to == null || to == undefined) {
    length = array.length;
  } else if (to > array.length) {
    length = array.length;
  } else if (to < 0) {
    length = array.length + to;
  } else {
    length = to;
  }

  for (i; i < length; i++) {
    result.push(array[i]);
  }

  return result;
}

/*
 Задание 6 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
  return new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value * value;

      return true;
    }
  });
}

export { forEach, map, reduce, upperProps, slice, createProxy };
