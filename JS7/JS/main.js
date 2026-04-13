"use stricr"

//БЛОКНОТ ЗАДАЧ

const todoKeys = {  //объект с ключами для дальнейшего использования, которое предотвращает ошибки при изменении значений(названий)
  id: 'id', 
  text: 'text', 
  is_complered: 'is_complered',
};

const todos = []; //изначальный массив без задач

const errTodoNotFound = todoId => `Todo with id ${todoId} not fund`; //данная строчка повторяется в коде, поэтому выносим ее отдельно для удобного использования



const getNewTodo = todos => //для изменения id, чтобы был индивидуальный для разных задач
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1; //считаем максимальный id и увеличиваем на 1

const createTodo = (todos, text) => { //добавление задач через функцию
  const newTodo = { //выносим данные в отдельную переменную для корректного срабатывания return
    [todoKeys.id]: getNewTodo(todos), 
    [todoKeys.text]: text, 
    [todoKeys.is_complered]:false,
  }
  todos.push(newTodo); //добавляем переменную newTodo
  return newTodo
};

//отметка выполненой задачи
const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);
  if (!todo) {
    console.error(errTodoNotFound(todoId)); //если не находиться задача с определенным id
    return null;
  }
  todo[todoKeys.is_complered] = !todo[todoKeys.is_complered]; //меняем is_complered:false на true
  return todo;
}

//удаление задачи
// первый вариант
  const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
    if(todoIndex == -1){
      console.error(errTodoNotFound(todoId));
      return todos;
    }
    todos.splice(todoIndex, 1);
    return todos;
  };
//  второй вариант
//  const deleteTodoById = (todos, todoId) => {
//   return todos.filter(todo => todo[todoKeys.id] !== todoId);
//  }



// createTodo(todos, "Новая задача");
// console.log(todos);