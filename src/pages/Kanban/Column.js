import React from "react";

import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Todo from "./Todo";
import { Paper, Typography } from "@material-ui/core";

const TaskList = styled.div`
  padding: 8px;
`;

const Column = ({ column, tasks }) => {
  return (
    <Paper elevation={3}>
      <Typography variant="h5" component="h3">
        {column.title}
      </Typography>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((todo, index) => (
              <Todo key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Paper>
  );
};

export default Column;
