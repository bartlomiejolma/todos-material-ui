import React from "react";
import { useSelector } from "react-redux";

const groupTodos = (todos) => {
  return todos.reduce((groups, todo) => {
    const group = todo.group || "Backlog";
    groups[group] = groups[group] || [];
    groups[group].push(todo);
    return groups;
  }, {});
};
const Kanban = () => {
  const todos = useSelector((state) => state.todos);

  return <div>{todos.map((todo) => todo.title)}</div>;
};

export default Kanban;
