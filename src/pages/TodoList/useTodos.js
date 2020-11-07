import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTodosInStore,
  changeTodo,
  addTodo,
  deleteTodo,
} from "../../store/todos";

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
    dispatch(setTodosInStore({ todos: localStorageTodos }));
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem(TODOS, JSON.stringify(todos));
    }
  }, [todos]);

  const modifyTodo = (todo) => {
    if (todo.id !== undefined) {
      dispatch(changeTodo({ todo }));
    } else {
      dispatch(addTodo({ todo }));
    }
  };

  return [todos, modifyTodo, (todo) => dispatch(deleteTodo({todo}))];
};

export default useTodos;
