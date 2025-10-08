const user = {
  name: "Anna",
  age: 22,
  email: "f24lq59@yandex.ru",
  country: "Russia",
};
console.log(`Hello ${user.name}`);

const users = [
  {
    name: "alex",
    age: 23,
    isAdmin: false,
  },

  {
    name: "john",
    age: 30,
    isAdmin: true,
  },

  {
    name: "tom",
    age: 25,
    isAdmin: false,
  },
];

let i = 0;

users.forEach((user) => {
  if (user.isAdmin) {
  } else {
    i += 1;
  }
});

console.log(`${i} простых пользователей`);
