import { useState } from "react";

const sampleTodo = {
  title: "foo",
  description: "lorem lipsum",
};

const useTodos = () => {
  const [todos, setTodos] = useState([sampleTodo]);

  const addTodo = (todo) => {
    todo.id = Math.floor(Math.random() * 1000);
    todos.push(todo);
    setTodos(todos);
  };

  const changeTodo = (todo) => {
    const updatedTodos = todos.map((nextTodo) => {
      if (nextTodo.id === todo.id) {
        return todo;
      }
      return nextTodo;
    });
    setTodos(updatedTodos);
  };
  const modifyTodo = (todo) => {
    if (todo.id !== undefined) {
      changeTodo(todo);
    } else {
      addTodo(todo);
    }
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((nextTodo) => nextTodo.id !== todo.id));
  };

  return [todos, modifyTodo, deleteTodo];
};

export default useTodos;
