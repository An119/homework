// Задание 1.
// Дан массив пользователей:
// Добавьте в конец массива двух пользователей:

//------------- РЕШЕНИЕ -------------
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
]

users.push(
  { name: 'Ann', age: 19, isAdmin: false },
  { name: 'Jack', age: 43, isAdmin: true }
);

console.log(users);
//-----------------------------------

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

//------------- РЕШЕНИЕ -------------
function getUserAverageAge(users) {

  let totalAge = 0; 
  users.forEach(user => { //сумирует весь возрост
    totalAge += user.age;
  });

  const averageAge = totalAge / users.length; //вычисляет средний возраст

  return averageAge;
}

console.log(getUserAverageAge(users));
//-----------------------------------

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

//------------- РЕШЕНИЕ -------------
function getAllAdmins(users) {
  return users.filter(user => user.isAdmin === true);
}
console.log(getAllAdmins(users));
//-----------------------------------

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.



//------------- РЕШЕНИЕ -------------
// function first(arr, n) {

//   if (n === 0) {   //если n == 0, возвращает пустой массив
//     return [];
//   }

//   if (n === undefined) {   //если n = undefined, возвращает массив с первым элементом
//     return arr.length > 0 ? [arr[0]] : [];
//   }

//   //возвращает первые n элементов  
  
// }

// console.log(first());
//-----------------------------------

