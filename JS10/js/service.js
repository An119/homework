// Основная логика приложения (сервис) - создание, выполнение, удаление задач (консольная часть)

import { todoKeys, errTodoNotFound } from "./constants.js";  //для использования импортируем сюда 2 константы

const getNewTodoId = todos => //для изменения id, чтобы был индивидуальный для разных задач
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1; //считаем максимальный id и увеличиваем на 1

//добавление задач через функцию
export const createTodo = (todos, text) => { 
  const newTodo = { //выносим данные в отдельную переменную для корректного срабатывания return
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo); //добавляем переменную newTodo
  return newTodo;
};

//отметка выполненой задачи
export const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId)); //если не находиться задача с определенным id
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed]; //меняем is_complered:false на true
  return todo;
};

//удаление задачи
export const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};