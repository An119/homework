//Работа с DOM (html теги - визуальная часть)

//для использования импортируем сюда константы:
import { todoKeys } from "./constants.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js";
import {setTodosFromLocalStoresge} from "./storage.js"; 

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

//функция которая достает сохраненные данные из local storage
export const renderTodos = todos =>{ //очищает контейнер если там что то осталось
  todosContent.innerHTML = ""; //очищает контейнер если там что то осталось
  todos.forEach(todo => {
    const todoItem = createTodoElement(todo);
    if (todo [todoKeys.is_completed]){  //если задача выполнена добавляем conplered
      todoItem.classList.add("completed");
    }
      todosContent.prepend(todoItem);
  });
};

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
const handleCreateTodo = (todos, text) => {

    const todo = createTodo(todos, text); //cоздаём задачу 
    const todoElement = createTodoElement(todo);
    setTodosFromLocalStoresge(todos); //для сохранения задач
    todosContent.prepend(todoElement);
    };

    // выносим в отдельную функцию для использования (экспорта)
    export const initTodoHandlers = todos => {
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
            setTodosFromLocalStoresge(todos); //для сохранения задач
            todo.classList.toggle("completed");
        }

        if(event.target.matches(".button-delete")) { //если нажата кнопка удаление задачи
            deleteTodoById(todos, todoId);
            setTodosFromLocalStoresge(todos); //для сохранения задач
            todo.remove();
        }
    });

};


