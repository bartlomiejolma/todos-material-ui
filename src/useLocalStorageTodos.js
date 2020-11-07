import { useEffect } from "react";
import { useSelector } from "react-redux";

const TODOS = "todos";

export const getTodosFromLocalStorage = () => {
    try {
      return JSON.parse(localStorage.getItem(TODOS)) || [];
    } catch (e) {
      return [];
    }
  };

export const saveTodosInLocalStorage = (todos) => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
}

const useLocalStorageTodos = () => {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    saveTodosInLocalStorage(todos)
  }, [todos]);
};

export default useLocalStorageTodos;
