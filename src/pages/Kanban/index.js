import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { DragDropContext } from "react-beautiful-dnd";
import { changeGroupOfTodo, changeIndexOfTodo } from "../../store/todos";
import Column from "./Column";
import { Grid } from "@material-ui/core";

const groupTodos = (todos) => {
  return todos.reduce(
    (groups, todo) => {
      const group = todo.group || "Backlog";
      groups[group] = groups[group] || [];
      groups[group].push(todo);
      return groups;
    },
    { Backlog: [], "In progress": [], Done: [] }
  );
};
const Kanban = () => {
  const todos = useSelector((state) => state.todos) || [];
  const dispatch = useDispatch();

  const groupedTodos = groupTodos(todos);
  const onDragEnd = (result) => {
    const { draggableId, destination } = result;
    console.log(result);
    if (!destination) {
      return;
    }
    const { droppableId, index } = destination;
    dispatch(changeGroupOfTodo({ id: +draggableId, group: droppableId }));
    dispatch(changeIndexOfTodo({ id: +draggableId, index }));
  };
  return (
    <Grid container spacing={4}>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(groupedTodos).map(([group, tasks]) => (
          <Column column={{ title: group, id: group }} tasks={tasks} />
        ))}
      </DragDropContext>
    </Grid>
  );
};

export default Kanban;
