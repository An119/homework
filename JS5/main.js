// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// ----------------РЕШЕНИЕ----------------
const person = {
  name: "Anna",
  birthYear: 2003,
  age: 22,
  city: "Kamensk-Uralsky",
};

console.log(`Hello, my name is ${person.name}, i'm ${person.age} years old`);
// ---------------------------------------

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// ----------------РЕШЕНИЕ----------------
const object = {}

function isEmpty(object) {
  for (let key in object) {
    return false; //объект не пуст
  }
  return true; //объект пуст
}

console.log(isEmpty(object));
// ---------------------------------------

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// ----------------РЕШЕНИЕ----------------
const task = {
  title: "Изучить объекты",
  description: "Научиться работать с объектами",
  isCompleted: false
};

function cloneAndModify(object, modifications) {
  return { ...object, ...modifications };
}

const modifications = {
  isCompleted: true,
  deadline: 2026
};

const modifiedTask = cloneAndModify(task, modifications);

for (const key in modifiedTask) {
  console.log(modifiedTask[key]);
}
// ---------------------------------------

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

// ----------------РЕШЕНИЕ----------------
function callAllMethods(myObject) {
  for (let key in myObject) {
    if (typeof myObject[key] === 'function') {  // проверка чтобы значение было свойством функции
      myObject[key]();
    }
  }
}
callAllMethods(myObject);
// ---------------------------------------

