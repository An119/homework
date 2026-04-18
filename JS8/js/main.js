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
const createTodoElement = text => {
  const todoItem = document.createElement("li"); 
  todoItem.classList.add("todo");
  todoItem.innerHTML = `
    <div class="todo-text">${text}</div>
      <div class="todo-actions">
          <button class="button-complete button">&#10004;</button>
          <button class="button-delete button">&#10006;</button>
      </div>
  `;
  return todoItem;

  // const todoDivText = document.createElement("div"); 
  // todoDivText.classList.add("todo-text");
  // todoDivText.textContent = "Задача";
  // const todoDivActions = document.createElement("div"); 
  // todoDivActions.classList.add("todo-actions");
  // const todoBtnComplete = document.createElement("button"); 
  // todoBtnComplete.classList.add("button-complete button");
  // todoBtnComplete.innerHTML = '&#10004;'
  // const todoBtnDelete = document.createElement("button"); 
  // todoBtnDelete.classList.add("button-delete button");
  // todoBtnDelete.innerHTML = '&#10006;';
  //указываем расположения элементов
  // todoItem.insertAdjacentElement('beforeend', todoDivText);
  // todoItem.insertAdjacentElement('beforeend', todoDivActions);
  // todoDivActions.insertAdjacentElement('beforeend', todoBtnComplete);
  // todoDivActions.insertAdjacentElement('beforeend', todoBtnDelete);
};

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text); //cоздаём задачу 
  const todoElement = createTodoElement(text);
  todosContent.prepend(todoElement);
};