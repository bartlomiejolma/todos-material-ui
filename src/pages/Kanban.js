import React from "react";
import { useSelector } from "react-redux";

const Kanban = () => {
  const todos = useSelector((state) => state.todos);

  return <div>{todos.map((todo) => todo.title)}</div>;
};

export default Kanban;
