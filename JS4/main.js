// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.
// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// ----- РЕШЕНИЕ -----
function calculateFinalPrice(price, discount, taxRate) {
    
    const discountPrice = price - (price * (discount / 100)); //цена со скидкой
    
    const finalPrice = discountPrice + (discountPrice * taxRate); //цена со скидкой + налог
    return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// -------------------


// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

// ----- РЕШЕНИЕ -----
function checkAccess() {
  let user = prompt("Введите имя пользователя");
  let password = prompt("Введите пароль пользователя");

  if (user === "admin" && password == "123456") {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
}

const office = checkAccess();
alert(office);
// -------------------


// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// ----- РЕШЕНИЕ -----
function getTimeOfDay() {
  let number = prompt("Введите текущее время");

  if (isNaN(number) || number < 0 || number > 23) return "Некорректное время"; //проверка на значение = числу, и дапазон от 0 до 23

  switch (true) {
    case number <= 5:
      return "Ночь";
    case number <= 11:
      return "Утро";
    case number <= 17:
      return "День";
    default:
      return "Вечер";
  }
}

alert(getTimeOfDay());
// -------------------


// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".
// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

// ----- РЕШЕНИЕ -----
function findFirstEven(start, end) {
    if (start > end) 
      return "Чётных чисел нет";

    const firstEven = start % 2 === 0 ? start : start + 1;
      return firstEven <= end ? firstEven : "Чётных чисел нет";
}

console.log(findFirstEven(1, 10)); // 2
// -------------------