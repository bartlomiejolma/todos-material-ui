import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { changeTodo, addTodo, deleteTodo } from "../../store/todos";
import useLocalStorageTodos from "../../useLocalStorageTodos";

const getTodos = (state) => state.todos || {};
const todosSelector = createSelector([getTodos], (todos) =>
  Object.values(todos).reduce((current, categoryTodos) => [
    ...current,
    ...categoryTodos,
  ], [])
);

const useTodos = () => {
  useLocalStorageTodos();
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  const modifyTodo = (todo) => {
    if (todo.id !== undefined) {
      dispatch(changeTodo({ todo }));
    } else {
      dispatch(addTodo({ todo }));
    }
  };

  const removeTodo = (todo) => dispatch(deleteTodo({ todo }));

  return [todos, modifyTodo, removeTodo];
};

export default useTodos;
