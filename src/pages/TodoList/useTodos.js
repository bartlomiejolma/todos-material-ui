import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTodo, addTodo, deleteTodo } from "../../store/todos";
import useLocalStorageTodos from "../../useLocalStorageTodos";


const useTodos = () => {
  useLocalStorageTodos();
  const todos = useSelector((state) => state.todos);
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
