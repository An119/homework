//Работа с storage - в данном случае local storage

//функция для выведения всех сохраненных задач после обновления страницы
export const getTodosFromLocalStorage = () =>{
  return JSON.parse(localStorage.getItem("todos"));
};
//функция для сохранения задач
export const setTodosFromLocalStoresge = todos => {
  localStorage.setItem("todos", JSON.stringify(todos));
};