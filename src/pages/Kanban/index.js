import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { DragDropContext } from "react-beautiful-dnd";
import { moveTodo } from "../../store/todos";
import Column from "./Column";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { createSelector } from "@reduxjs/toolkit";

const GridContainer = styled(Grid)`
  padding: 10px;
`;

const getTodos = (state) => state.todos;
const getTodosWithDefaultGroups = createSelector([getTodos], (todos) => {
  const defaultGroups = ["backlog", "in_progress", "done"];
  return defaultGroups.map((groupName) => [groupName, todos[groupName] || []]);
});

const Kanban = () => {
  const groupedTodos = useSelector(getTodosWithDefaultGroups);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { draggableId, destination } = result;
    if (!destination) {
      return;
    }
    const { droppableId, index } = destination;
  };
  return (
    <GridContainer container spacing={4}>
      <DragDropContext onDragEnd={onDragEnd}>
        {groupedTodos.map(([group, tasks]) => (
          <Column column={{ title: group, id: group }} tasks={tasks} />
        ))}
      </DragDropContext>
    </GridContainer>
  );
};

export default Kanban;
