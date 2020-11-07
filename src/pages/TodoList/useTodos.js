import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodosInStore } from "../../store/todos";

const TODOS = "todos";

const getTodosFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(TODOS)) || [];
  } catch (e) {
    return [];
  }
};
const useTodos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  
  useEffect(() => {
    const localStorageTodos = getTodosFromLocalStorage();
    setTodos(localStorageTodos);
  }, []);
  
  const setTodos = (newTodos) => dispatch(setTodosInStore({ todos: newTodos }));
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
