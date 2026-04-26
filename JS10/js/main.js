//Импортируем части кода - основные константы
import { getTodosFromLocalStorage } from "./storage.js";
import { renderTodos, initTodoHandlers } from "./dom.js";


const todos = getTodosFromLocalStorage() || []; //выводим задачи, если нет - массив

//вызываем функцию при загрузке страницы
document.addEventListener("DOMContentLoaded", () => { 
  renderTodos(todos);
  initTodoHandlers(todos);
});

