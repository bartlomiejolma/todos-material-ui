import { useState } from "react";

const sampleTodo = {
  title: "foo",
  description: "lorem lipsum",
};

const useTodos = ({ modifiedCallback = () => {} }) => {
  const [todos, setTodos] = useState([sampleTodo]);

  const addTodo = (todo) => {
    todo.id = Math.floor(Math.random() * 1000);
    todos.push(todo);
    setTodos(todos);
    modifiedCallback();
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
    if (todo.id) {
      changeTodo(todo);
    } else {
      addTodo(todo);
    }
    modifiedCallback();
  };

  return [todos, modifyTodo];
};

export default useTodos;
