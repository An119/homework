//Основные константы для использования

//объект с ключами для дальнейшего использования, которое предотвращает ошибки при изменении значений(названий)
export const todoKeys = { 
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

//данная строчка повторяется в коде, поэтому выносим ее отдельно для удобного использования
export const errTodoNotFound = todoId => `Todo with id ${todoId} not found`; 