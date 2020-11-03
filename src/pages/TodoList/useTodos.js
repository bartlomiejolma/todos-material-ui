import { useState } from "react";

const TODOS = "todos";

const getTodosFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(TODOS)) || [];
  } catch (e) {
    return [];
  }
};
const useTodos = () => {
  const [todos, setTodos] = useState(getTodosFromLocalStorage);

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem(TODOS, JSON.stringify(newTodos));
  };

  const addTodo = (todo) => {
    todo.id = Math.floor(Math.random() * 1000);
    todos.push(todo);
    saveTodos(todos);
  };

  const changeTodo = (todo) => {
    const updatedTodos = todos.map((nextTodo) => {
      if (nextTodo.id === todo.id) {
        return todo;
      }
      return nextTodo;
    });
    saveTodos(updatedTodos);
  };
  const modifyTodo = (todo) => {
    if (todo.id !== undefined) {
      changeTodo(todo);
    } else {
      addTodo(todo);
    }
  };

  const deleteTodo = (todo) => {
    saveTodos(todos.filter((nextTodo) => nextTodo.id !== todo.id));
  };

  return [todos, modifyTodo, deleteTodo];
};

export default useTodos;
