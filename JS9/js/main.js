"use strict";

const todoKeys = { //объект с ключами для дальнейшего использования, которое предотвращает ошибки при изменении значений(названий)
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = []; //изначальный массив без задач

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`; //данная строчка повторяется в коде, поэтому выносим ее отдельно для удобного использования



const getNewTodoId = todos => //для изменения id, чтобы был индивидуальный для разных задач
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1; //считаем максимальный id и увеличиваем на 1

const createTodo = (todos, text) => { //добавление задач через функцию
  const newTodo = { //выносим данные в отдельную переменную для корректного срабатывания return
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo); //добавляем переменную newTodo
  return newTodo;
};

//отметка выполненой задачи
const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId)); //если не находиться задача с определенным id
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed]; //меняем is_complered:false на true
  return todo;
};

//удаление задачи
const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};



// При помощи метода querySelector получаем элементы .form, .input и .todos
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosContent = document.querySelector(".todos");

// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
const createTodoElement = todo => {
  const todoItem = document.createElement("li"); 
  todoItem.classList.add("todo");
  todoItem.dataset.id = todo[todoKeys.id]; // используем dataset.id для добавления data- атрибута со значением id
  todoItem.innerHTML = `
    <div class="todo-text">${todo[todoKeys.text]}</div>
      <div class="todo-actions">
          <button class="button-complete button">&#10004;</button>
          <button class="button-delete button">&#10006;</button>
      </div>
  `;
  return todoItem;
};

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text); //cоздаём задачу 
  const todoElement = createTodoElement(todo);
  todosContent.prepend(todoElement);
};

//Реализация выведения задач написаных в input
form.addEventListener("submit", event => {
  event.preventDefault(); //отменяем стандартное поведение

  const text = input.value.trim(); //trim убирает лишнии пробелы
  if (text == ""){ //переменная text создана чтобы не отправлялась пустая форма, if срабатывает если (text) форма все таки пустая
    return;
  }
  // if (!text) return; краткая запись

  handleCreateTodo(todos, text);
  input.value = ""; //очищаем строку после вывода
});



//реализация взаимодействия с кнопками
todosContent.addEventListener("click", event =>{
  const todo = event.target.closest(".todo"); //closest - определяет ближайший нажатый элемент
  if(!todo) return; //чтобы не срабатывал за пределами элементов

  const todoId = Number(todo.dataset.id)//отдельно выносим повторяющийся код

  if(event.target.matches(".button-complete")) { //если нажата кнопка выполненой задачи
    completeTodoById(todos, todoId);
    todo.classList.toggle("completed");
  }

  if(event.target.matches(".button-delete")) { //если нажата кнопка удаление задачи
    completeTodoById(todos, todoId);
    todo.remove();
  }
});