import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTodo, addTodo, deleteTodo } from "../../store/todos";

const TODOS = "todos";

const useTodos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

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

  const removeTodo = (todo) => dispatch(deleteTodo({ todo }));

  return [todos, modifyTodo, removeTodo];
};

export default useTodos;
